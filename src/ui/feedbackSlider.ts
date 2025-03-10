import { frequencyTypes, localStorageName, SessionStorageName } from "..";
import { getFromLocalStorage, getFromSessionStorage, saveToLocalStorage, saveToSessionStorage } from "../core/repositories/Storage";
import { handleSubmit } from "../core/usecases/handleSubmit";
import { submitPublicFeedback } from "../core/usecases/submitPublicFeedback";
import { whiteLabel } from "./whiteLabel";
/**
 * Displays a feedback slider with form fields.
 */
export function openFeedbackSlider(data: any): void {
  if (document.getElementById("custom-slider-overlay")) return; // Avoid duplicate sliders

    const { orgData,form } = data;
    const { title, description, theme, primaryColor } = form;

  console.log("Public feedback form", title, description, theme, primaryColor)


      // Set theme-based styles
  const isDarkMode = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const backgroundColor = isDarkMode ? "#000" : "#fff";
  const textColor = isDarkMode ? "#fff" : "#000";
  const borderColor = isDarkMode ? "#6a676778" : "#868484";
    const labelColor = isDarkMode ? "#bbb" : "#000";
    
      // Create the overlay
  const overlay = document.createElement("div");
  overlay.id = "custom-slider-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9999998";

    const slider = document.createElement("div");
    slider.id = "custom-slider";
    slider.style.display = "flex";
    slider.style.flexDirection = "column";
    slider.style.gap = "12px";
    slider.style.position = "fixed";
    slider.style.zIndex = "9999999";
    slider.style.top = "0%";
    slider.style.right = "0%";
    slider.style.height = "100%";
    slider.style.backgroundColor = backgroundColor;
    slider.style.color = textColor;
    slider.style.padding = "20px";
    slider.style.borderRadius = "10px";
    slider.style.width = "90%";
    slider.style.maxWidth = "400px";
    
    const addStyles = () => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `
          .prodio-feedback-form-heading {
            font-size: 27px;
            margin: 0;
          }
      
          @media screen and (max-width: 700px) {
            .prodio-feedback-form-heading {
              font-size: 20px;
            }
          }
      
          .prodio-feedback-form-description {
            font-size: 14px;
          }
      
          @media screen and (max-width: 700px) {
            .prodio-feedback-form-description {
              font-size: 12px;
            }
          }
        `;
        document.head.appendChild(styleElement);
    };

    const removeStyles = () => {
        const styles = document.head.getElementsByTagName("style");
        for (let i = 0; i < styles.length; i++) {
          if (styles[i].innerHTML.includes(".prodio-feedback")) {
            styles[i].remove();
            break;
          }
        }
      };
    
    slider.innerHTML = `
    <h2 class="prodio-feedback-form-heading">${title}</h2>
    <span class="prodio-feedback-form-description">${description}</span>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="slider-type" style="display: block; text-align: left; color: ${labelColor};font-size:12px;">Type *</label>
      <select id="slider-type" style="padding: 6px 8px;font-size:14px; border-radius: 5px; border:  1px solid ${borderColor}; background: ${backgroundColor}; color: ${textColor};">
        <option value="feature">Feature</option>
        <option value="bug">Bug</option>
        <option value="improvement">Improvement</option>
        <option value="task">Task</option>
        <option value="question">Question</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="slider-title" style="display: block; text-align: left; color:${labelColor};font-size:12px;">Title *</label>
      <input 
        type="text" 
        id="slider-title" 
        placeholder="Enter title"
        autocomplete="off" 
        style="padding: 6px 8px;font-size:14px; border-radius: 5px; border:  1px solid ${borderColor}; background: ${backgroundColor}; color: ${textColor};"
      />
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
      <label for="slider-description" style="display: block; text-align: left; color:${labelColor};font-size:12px;">Description *</label>
      <textarea 
        id="slider-description" 
        placeholder="Enter description" 
        autocomplete="off" 
        rows="5"
        style="padding: 6px 8px;font-size:14px; border-radius: 5px; border:  1px solid ${borderColor}; background: ${backgroundColor}; color: ${textColor}; resize: none;"
      ></textarea>
    </div>

    <span id="slider-error" style="color: red; display: none; font-size:12px;">All fields are required</span>
    <div style="display: flex;justify-content: start;gap: 12px;">
      <button id="slider-submit" style="padding: 5px 20px; background-color: ${primaryColor}; border: none; border-radius: 5px; color: #fff; font-size: 14px; cursor: pointer;">
        Submit
      </button>
    </div>
    ${whiteLabel()}
    ${renderFeedbacks()}
  `;
    
  addStyles();  // Add styles before showing slider
  document.body.appendChild(overlay);
  document.body.appendChild(slider);
        
  document.body.style.overflow = "hidden";

  const errorSpan = document.getElementById("slider-error") as HTMLSpanElement;

  const inputs = [
    document.getElementById("slider-type") as HTMLSelectElement,
    document.getElementById("slider-title") as HTMLInputElement,
    document.getElementById("slider-description") as HTMLTextAreaElement
    ];
    
    inputs.forEach(input => {
        input.addEventListener("input", () => {
          input.style.border = `1px solid ${borderColor}`;
          errorSpan.style.display = "none";
        });
      });
  
      document.getElementById("slider-submit")!.addEventListener("click", () => {
        const type = (document.getElementById("slider-type") as HTMLSelectElement).value;
        const title = (document.getElementById("slider-title") as HTMLInputElement).value;
        const description = (document.getElementById("slider-description") as HTMLTextAreaElement).value;
  
        let hasError = false;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.style.border = "1px solid red";
            hasError = true;
          }
        });
  
        if (hasError) {
          errorSpan.style.display = "block";
          return;
        }
  
  
  
        
        const dataToSend = {
          type,
          title,
          description,
          user_id: orgData?.userData?.id,
          feedback_id:""
        }
  
  
        submitPublicFeedback(dataToSend).then((res:any) => {
          if (res.error) {
            // sho red error
            errorSpan.textContent = res.error;
            errorSpan.style.display = "block";
          } else {
            slider.innerHTML = `
              <h2 class="prodio-feedback-form-heading" style="text-align:center;">Thank you for you feedback</h2>
                ${renderFeedbacks()}
              `
            document.getElementById("done-button")!.addEventListener("click", () => {
            //   overlay.remove();
            //   slider.remove();
            //   document.body.style.overflow = "";
            //   removeStyles();
            });

          }
        });
      });
  
      // Close button click handler
      document.getElementById("slider-close")!.addEventListener("click", () => {
        overlay.remove();
        slider.remove();
        document.body.style.overflow = ""; // Re-enable scrolling
        removeStyles(); // Remove styles after closing slider
      });

}

const renderFeedbacks = () => {
    return `All Feedbacks will appear here`
}
