import { handleSubmit } from "../core/usecases/handleSubmit";

/**
 * Displays a popup with name and email input fields.
 */
export function showPopup(): void {
  if (document.getElementById("custom-popup")) return; // Avoid duplicate popups

  const popup = document.createElement("div");
  popup.id = "custom-popup";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#fff";
  popup.style.padding = "20px";
  popup.style.border = "1px solid #ccc";
  popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  popup.innerHTML = `
      <h2>Enter Your Details</h2>
      <input type="text" id="popup-name" placeholder="Enter your name" /><br/><br/>
      <input type="email" id="popup-email" placeholder="Enter your email" /><br/><br/>
      <button id="popup-submit">Submit</button>
      <button id="popup-close">Close</button>
  `;

  document.body.appendChild(popup);

  document.getElementById("popup-submit")!.addEventListener("click", () => {
    const name = (document.getElementById("popup-name") as HTMLInputElement).value;
    const email = (document.getElementById("popup-email") as HTMLInputElement).value;

    handleSubmit({ name, email });
    popup.remove();
  });

  document.getElementById("popup-close")!.addEventListener("click", () => {
    popup.remove();
  });
}
