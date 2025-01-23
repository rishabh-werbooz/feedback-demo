import { handleSubmit } from "../core/usecases/handleSubmit";

/**
 * Displays a dark-themed popup with form fields for user feedback.
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
  popup.style.position = "fixed";
  popup.style.zIndex = "9999999";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#1e1e1e";
  popup.style.color = "#ffffff";
  popup.style.padding = "30px";
  popup.style.borderRadius = "10px";
  popup.style.width = "400px";
  popup.style.boxShadow = "0 0 15px rgba(255,255,255,0.2)";
  popup.style.textAlign = "center";
  popup.innerHTML = `
      <h2 style="margin-bottom: 20px; color: #fff;">Submit Feedback</h2>

      <label for="popup-type" style="display: block; text-align: left; color: #bbb;">Type</label>
      <select id="popup-type" style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 5px; border: none; background: #333; color: #fff;">
        <option value="feature">Feature</option>
        <option value="bug">Bug</option>
        <option value="improvement">Improvement</option>
        <option value="task">Task</option>
        <option value="question">Question</option>
      </select>

      <label for="popup-title" style="display: block; text-align: left; color: #bbb;">Title</label>
      <input 
        type="text" 
        id="popup-title" 
        placeholder="Enter title" 
        style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 5px; border: none; background: #333; color: #fff;"
      />

      <label for="popup-description" style="display: block; text-align: left; color: #bbb;">Description</label>
      <textarea 
        id="popup-description" 
        placeholder="Enter description" 
        style="width: 100%; height: 100px; padding: 10px; margin-bottom: 20px; border-radius: 5px; border: none; background: #333; color: #fff; resize: none;"
      ></textarea>

      <button id="popup-submit" style="width: 100%; padding: 12px; background-color: #ff5722; border: none; border-radius: 5px; color: #fff; font-size: 16px; cursor: pointer;">
        Submit
      </button>
      <br/><br/>
      <button id="popup-close" style="width: 100%; padding: 12px; background-color: #444; border: none; border-radius: 5px; color: #fff; font-size: 16px; cursor: pointer;">
        Close
      </button>
  `;

  // Delay popup display according to `openAfter` property
  setTimeout(() => {
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Submit button click handler
    document.getElementById("popup-submit")!.addEventListener("click", () => {
      const type = (document.getElementById("popup-type") as HTMLSelectElement).value;
      const title = (document.getElementById("popup-title") as HTMLInputElement).value;
      const description = (document.getElementById("popup-description") as HTMLTextAreaElement).value;


      const dataToSend = { type, title, description }

      handleSubmit(dataToSend);
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
