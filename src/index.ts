import { Organization } from "./core/entities/Organization";
import { saveToSessionStorage, getFromSessionStorage } from "./core/repositories/Storage";
import { fetchOrganizationData } from "./core/usecases/fetchOrganizationData";
import { showPopup } from "./ui/popup";


const orgDataStorageName = "prodio-feedback"


/**
 * Initializes the popup handler by saving dummy organization data in sessionStorage.
 * @param {Object} options 
 * @param {string} options.organizationId - The ID of the organization.
 */

properties: {

}
type PropertiesType = {
  name:string,
  email:string,
  id: string,
  phone_number: string,
  job_title: string,
}
export async function init({ organizationId,properties }: { organizationId: string,properties:PropertiesType }): Promise<void> {
  if (!organizationId) {
    console.error("Error: organizationId is required.");
    return;
  }

  const requiredFields: (keyof PropertiesType)[] = ["name", "phone_number", "id", "job_title", "email"];
  const missingFields = requiredFields.filter(field => !properties[field]);
  
  if (missingFields.length > 0) {
    console.error(`Error: Missing the following fields: [${missingFields.join(", ")}]`);
    return;
  }

  // Find the organization data based on the provided ID
  const orgData = await fetchOrganizationData({organizationId})

  if (!orgData.length) {
    console.error("Error: Organization not found for ID", organizationId);
    return;
  }

  // Save data in sessionStorage
  saveToSessionStorage(orgDataStorageName,orgData);
  console.log("Organization data saved in sessionStorage.");

  // Check if the current URL matches allowed URLs
  checkAndShowPopup();
}

/**
 * Checks if the current page URL is allowed and triggers the popup if applicable.
 */
function checkAndShowPopup(): void {
  const currentPath = window.location.pathname; // Get current path like "/login", "/", "/about"
  const orgData = getFromSessionStorage(orgDataStorageName);

  if (!orgData) return;

  // Check if any allowed URL matches the current path
  const matchedOrg = orgData.find((org) =>
    org.allowed_urls?.includes(currentPath)
  );

  if (matchedOrg) {
    showPopup(matchedOrg);
  } else {
    console.log("No matching allowed URLs found for this page.");
  }
}
