"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const Storage_1 = require("./core/repositories/Storage");
const popup_1 = require("./ui/popup");
// Dummy organization data
const dummyData = [
    {
        id: "1",
        name: "Organization One",
        description: "Sample organization",
        account_id: "acc-123",
        metadata: { plan: "premium" },
        allowed_url: ["/about", "/"],
        created_at: "2024-01-01T12:00:00Z",
        updated_at: "2024-02-01T12:00:00Z",
    },
    {
        id: "2",
        name: "Organization Two",
        description: "Another organization",
        account_id: "acc-456",
        allowed_url: ["/services"],
        created_at: "2024-01-15T12:00:00Z",
        updated_at: "2024-02-10T12:00:00Z",
    },
];
/**
 * Initializes the popup handler by saving dummy organization data in sessionStorage.
 * @param {Object} options
 * @param {string} options.organizationId - The ID of the organization.
 */
function init(_a) {
    return __awaiter(this, arguments, void 0, function* ({ organizationId }) {
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
        (0, Storage_1.saveToSessionStorage)(orgData);
        console.log("Organization data saved in sessionStorage.");
        // Check if the current URL matches allowed URLs
        checkAndShowPopup();
    });
}
/**
 * Checks if the current page URL is allowed and triggers the popup if applicable.
 */
function checkAndShowPopup() {
    const currentPath = window.location.pathname; // Get current path like "/login", "/", "/about"
    const orgData = (0, Storage_1.getFromSessionStorage)();
    if (!orgData)
        return;
    // Check if any allowed URL matches the current path
    const matchedOrg = orgData.find((org) => { var _a; return (_a = org.allowed_url) === null || _a === void 0 ? void 0 : _a.includes(currentPath); });
    if (matchedOrg) {
        (0, popup_1.showPopup)();
    }
    else {
        console.log("No matching allowed URLs found for this page.");
    }
}
