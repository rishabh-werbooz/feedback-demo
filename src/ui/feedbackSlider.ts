import { renderCloseIcon } from "../components/reuseables/closeIcon";
import { onFeedbackCardClick, renderFeedbackDetails } from "../components/feedbackDetails";
import { ideasContainer, manageSubmitANewIdeaButton, renderFeedbacks, submitIdea } from "../components/ideas";
import { configData, formMetaData } from "../core/lib/config";
import { renderAnnouncementsIcon } from "../components/reuseables/announcementsIcon";
import { whiteLabelRender } from "./whiteLabel";
import { renderIdeasIcon } from "../components/reuseables/ideasIcon";
import { announcementContainer } from "../components/announcement";
import { addMDXStyles } from "../components/reuseables/mdxStyles";
import { roadMapContainer } from "../components/roadMap";
import { renderRoadMapIcon } from "../components/reuseables/roadMapIcon";

/**
 * Fetches feedbacks from the server.
 */

let selectedCard: any = null


/**
 * Displays a feedback slider with form fields.
 */
export async function openFeedbackSlider(data: any): Promise<void> {
  if (document.getElementById("custom-slider-overlay")) return; // Avoid duplicate sliders

  const { orgData, config } = data;
  const { primaryColor = configData?.primaryColor, heading = configData.heading } = config ?? {}
  const { ideas = configData.heading.ideas, announcement = configData.heading.announcement,roadMap=configData.heading.roadMap } = heading ?? {}
  const accountId = orgData?.organizationId;
console.log(announcement)

  const backgroundColor = "#fff";
  const textColor = "#000";

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
  slider.id = "prodio-slider";
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
  slider.style.padding = "70px 15px 100px 15px";
  slider.style.borderRadius = "0px";
  slider.style.width = "90%";
  slider.style.maxWidth = "400px";
  slider.style.fontFamily = "'Inter', sans-serif";
  slider.style.animation = "slideIn 0.5s ease-in-out forwards"; // Apply animation



  const renderHeader = (heading: string) => {
    return `
    <div style="color:white;position:fixed;top:0;width:400px;background-color:${primaryColor};display:flex;justify-content:space-between;align-items:center;padding:10px 20px; margin: 0px -15px;z-index:10;">
    <h3 class="prodio-feedback-form-heading" style="margin: 0; padding: 0px; color:white;font-size:22px;">
      ${heading}
    </h3> 
    <span id="slider-close-button" style="cursor: pointer;z-index: 25; width: max-content;">
  ${renderCloseIcon({ stroke: "white" })}

    </span>
</div>
    `
  }

  const addStyles = () => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `

    ${addMDXStyles()}


    /* Loader Container */
.prodio-spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width:100%;
      height: -webkit-fill-available;
}

/* Spinner Animation */
.prodio-spinner {
  width: 30px;
  height: 30px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: ${primaryColor}; /* Blue spinner */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* No Data Found Message */
.prodio-no-data {
  text-align: center;
  font-size: 16px;
  color: #999;
  font-weight: bold;
  padding: 20px;
      height: -webkit-fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
}



     @keyframes slideIn {
    from {
      transform: translateX(100%); /* Start off-screen */
    }
    to {
      transform: translateX(0); /* Move into view */
    }
  }

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%); /* Move off-screen */
  }
}

.prodioHideSlider {
  animation: slideOut 0.5s ease-in-out forwards !important;
}


    .prodio-feedback-hidden-scrollbar {
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer & Edge */
}

/* Hide scrollbar for WebKit (Chrome, Safari) */
.prodio-feedback-hidden-scrollbar::-webkit-scrollbar {
  display: none;
}


.prodio-ideas-card-comment-text{
opacity:0;
}

.prodio-feedback-card-animate:hover .prodio-ideas-card-comment-text{
    opacity:1;
}

.prodio-feedback-card-animate:hover .prodio-feedback-card-title {
  text-decoration: underline;
   text-underline-offset: 4px;
}

.prodio-feedback-card-description{
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limits text to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
  margin:0;
}


  .prodio-feedback-card-detail-title{
    text-decoration:none;
  font-size:17px;
  color:#424242;
  }

.prodio-feedback-card-title {
  max-width: 280px; /* Adjust width based on your layout */
  font-size:17px;
  color:#347151;
}

.prodio-idea-comment-container:hover .prodio-idea-comment-delete-icon{
    display:block
}

.prodio-idea-comment-delete-icon{
    display:none
}


      .prodio-feedback-form-container{
        background-color: #ececec!important;
        padding:15px;
        border-radius:5px;
        margin-bottom:15px;
      }

      .prodio-feedback-form-heading {
        font-size: 22px;
        margin: 0;
      }
  
      @media screen and (max-width: 700px) {
        .prodio-feedback-form-heading {
          font-size: 20px;
        }
      }
  
      .prodio-feedback-form-description {
        font-size: 16px;
      }
  
      @media screen and (max-width: 700px) {
        .prodio-feedback-form-description {
          font-size: 12px;
        }
      }

      /* Animation classes for card transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.prodio-feedback-card-animate {
  animation: fadeIn 0.4s ease-out forwards;
}


.prodio-tab-btn{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    font-size:10px;
    cursor:pointer;
    font-weight:500;
    padding:5px;
    border-radius:5px;
}

.prodio-tab-btn:hover {
background-color:rgba(236,236,236,0.5)
}

.prodio-disabled-btn {
  cursor: not-allowed !important; /* Show disabled cursor */
  opacity: 0.6;
  pointer-events: none; /* Prevent clicks */
  border-radius:5px;
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

  const tabs: any = {
    announcement: {
      value: "announcement",
      icon: (stroke?: string) => renderAnnouncementsIcon({ stroke }),
      label: "Announcements",
      content: () => announcementContainer(data),
      heading: announcement
    },
    ideas: {
      value: "ideas",
      icon: (stroke?: string) => renderIdeasIcon({ stroke }),
      label: "Ideas",
      content: () => ideasContainer(data, selectedCard),
      heading: ideas,
    },
    roadMap: {
      value: "roadMap",
      icon: (stroke?: string) => renderRoadMapIcon({ stroke }),
      label: "Roadmap",
      content: () => roadMapContainer(data, selectedCard),
      heading: roadMap,
    }
  };

  const tabsArray = Object.keys(tabs).map((item: any) => ({ ...tabs[item] }));

  let selectedTab = "ideas";


  function renderTabs() {
    slider.innerHTML = selectedCard ? renderFeedbackDetails(selectedCard, data) : `
        ${renderHeader(tabs[selectedTab]?.heading)}
        <div id="prodio-tab-content">
        </div>
        <div style="position: fixed; bottom: 0px; background:white;padding:10px 10px 0 10px;margin:0 0 0 -15px;box-shadow: 0 0 4px rgb(38 44 49 / 26%); max-width: 400px;width:100%;">
            <div id="tab-container" style="display:grid;grid-template-columns:repeat(${tabsArray.length},1fr);gap:5px;">
                ${tabsArray.map((tab) => `
                    <div class="prodio-tab-btn" data-tab="${tab.value}" 
                        style="color:${selectedTab === tab.value ? primaryColor : "#1c1E21"}; cursor: pointer;">
               <span> ${tab?.icon(selectedTab === tab.value ? primaryColor : "#1c1E21")}</span>
                        <span>${tab.label}</span>
                    </div>
                `).join("")}
            </div>
            <div style="display:flex; justify-content:center;width:100% padding :8px 0;">
                ${whiteLabelRender({ fontSize: "12px", color: primaryColor })}
            </div>
        </div>
    `;
  }

  // Attach a single event listener to the parent container
  document.addEventListener('click', async (event: any) => {
    const tabBtn = event.target.closest('.prodio-tab-btn');
    if (tabBtn) {
      selectedTab = tabBtn.getAttribute('data-tab');
      renderTabs(); // Re-render UI with new tab
      tabs[selectedTab]?.content()
      // if (tabs[selectedTab]?.afterRender) {
      //   await tabs[selectedTab]?.afterRender()
      // }
      // await announcementContainer(data)
    }
  });

  setTimeout(() => {
    renderTabs()
    tabs[selectedTab]?.content()
  }, 100);



  addStyles();
  // slider.appendChild(closeButton);
  document.body.appendChild(overlay);
  document.body.appendChild(slider);
  document.body.style.overflow = "hidden";







  // Function to close the slider
  const closeSlider = () => {
    slider.classList.add("prodioHideSlider"); // Add the hide animation class

    // Wait for animation to complete before removing
    setTimeout(() => {
      slider.remove();
      overlay.remove();
      selectedCard = null; // Reset selectedCard when closing the slider
      removeStyles();
      document.body.removeEventListener("click", handleOutsideClick);
    }, 500); // Adjust the timeout to match the animation duration
  };



  setTimeout(() => {
    const closeButton = document.getElementById("slider-close-button")
    // Add click event to close button
    if (closeButton) {
      closeButton.addEventListener("click", (event) => {
        closeSlider();
        event.stopPropagation(); // Prevent event from bubbling up
      });

    }
  }, 100);
  // Function to close the slider when clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    if (!slider.contains(event.target as Node)) {
      closeSlider();
    }
  };

  setTimeout(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, 100); // Small delay to prevent immediate closing when opening the slider





}
