import { Organization } from "./core/entities/Organization";
import { saveToSessionStorage, getFromSessionStorage } from "./core/repositories/Storage";
import { showPopup } from "./ui/popup";

// Dummy organization data
const dummyData: Organization[] = [
  {
    id: "1",
    name: "Organization One",
    description: "Sample organization",
    metadata: { openAfter:5 },
    allowed_urls: ["/about", "/"],
  },
  {
    id: "2",
    name: "Organization Two",
    description: "Another organization",
    metadata: { openAfter:10 },
    allowed_urls: ["/services"],
  },
];

/**
 * Initializes the popup handler by saving dummy organization data in sessionStorage.
 * @param {Object} options 
 * @param {string} options.organizationId - The ID of the organization.
 */
export async function init({ organizationId }: { organizationId: string }): Promise<void> {
  if (!organizationId) {
    console.error("Error: organizationId is required.");
    return;
  }

  // Find the organization data based on the provided ID
  const orgData = dummyData.filter(org => org.id === organizationId);

  if (!orgData.length) {
    console.error("Error: Organization not found for ID", organizationId);
    return;
  }

  // Save data in sessionStorage
  saveToSessionStorage(orgData);
  console.log("Organization data saved in sessionStorage.");

  // Check if the current URL matches allowed URLs
  checkAndShowPopup();
}

/**
 * Checks if the current page URL is allowed and triggers the popup if applicable.
 */
function checkAndShowPopup(): void {
  const currentPath = window.location.pathname; // Get current path like "/login", "/", "/about"
  const orgData = getFromSessionStorage();

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
