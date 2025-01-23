import { handleSubmit } from "../core/usecases/handleSubmit";

/**
 * Displays a feedback popup with form fields.
 */
export function showPopup(matchedOrg: any): void {
  if (document.getElementById("custom-popup-overlay")) return; // Avoid duplicate popups

  const { metadata } = matchedOrg;
  const { openAfter } = metadata;

  // Create the overlay
  const overlay = document.createElement("div");
  overlay.id = "custom-popup-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.zIndex = "9999998";

  // Create the popup container
  const popup = document.createElement("div");
  popup.id = "custom-popup";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.gap = "20px";
  popup.style.position = "fixed";
  popup.style.zIndex = "9999999";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#000";
  popup.style.color = "#ffffff";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.width = "500px";
  popup.style.border = "1px solid white";

  popup.innerHTML = `
    <h2 style="margin:0px;font-size: 35px;">Submit Your Feedback</h2>
    <span>Fill out the form below to submit your feedback</span>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="popup-type" style="display: block; text-align: left; color: #bbb;">Type</label>
      <select id="popup-type" style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff;">
        <option value="feature">Feature</option>
        <option value="bug">Bug</option>
        <option value="improvement">Improvement</option>
        <option value="task">Task</option>
        <option value="question">Question</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="popup-title" style="display: block; text-align: left; color: #bbb;">Title</label>
      <input 
        type="text" 
        id="popup-title" 
        placeholder="Enter title" 
        style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff;"
      />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="popup-description" style="display: block; text-align: left; color: #bbb;">Description</label>
      <textarea 
        id="popup-description" 
        placeholder="Enter description" 
        rows="5"
        style="padding: 10px; border-radius: 5px; border: none; background: #333; color: #fff; resize: none;"
      ></textarea>
    </div>

    <div style="display: flex;justify-content: end;gap: 16px;">
      <button id="popup-close" style="padding: 12px 24px; background-color: #000; border: 1px solid white; border-radius: 5px; color: #fff; font-size: 16px; cursor: pointer;">
        Cancel
      </button>
      <button id="popup-submit" style="padding: 12px 24px; background-color: #39C3EF; border: none; border-radius: 5px; color: #fff; font-size: 16px; cursor: pointer;">
        Submit
      </button>
    </div>
  `;

  // Show popup after delay
  setTimeout(() => {
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Submit button click handler
    document.getElementById("popup-submit")!.addEventListener("click", () => {
      const type = (document.getElementById("popup-type") as HTMLSelectElement).value;
      const title = (document.getElementById("popup-title") as HTMLInputElement).value;
      const description = (document.getElementById("popup-description") as HTMLTextAreaElement).value;

      handleSubmit({ type, title, description });
      overlay.remove();
      popup.remove();
    });

    // Close button click handler
    document.getElementById("popup-close")!.addEventListener("click", () => {
      overlay.remove();
      popup.remove();
    });
  }, openAfter * 1000); // Convert seconds to milliseconds
}
