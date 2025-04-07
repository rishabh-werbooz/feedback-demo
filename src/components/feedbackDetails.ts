import { SessionStorageName } from ".."
import { configData } from "../core/lib/config"
import { getFromSessionStorage } from "../core/repositories/Storage"
import { fetchIdeasComments } from "../core/usecases/fetchIdeasComments"
import { submitIdeaComment } from "../core/usecases/submitIdeaComment"
import { renderCloseIcon } from "./reuseables/closeIcon"
import { handleDeleteIdeasComment, renderCommentBox } from "./reuseables/comentBox"
import { FeatureCards } from "./reuseables/featureCard"
import { generateRandomColors } from "./reuseables/generateRandomColors"

export const renderFeedbackDetails = (selectedCard: any, data: any) => {


  const { config, orgData } = data;
  const { primaryColor = configData?.primaryColor } = config ?? {}

  const { userData } = orgData



  const backgroundColor = "#fff";
  const textColor = "#474747";

  return `
     <div
     id="prodio-feedback-details-comment"
      class="prodio-feedback-card-animate prodio-feedback-hidden-scrollbar"
      style="position:fixed;top:0;right:0;height:100%;width:400px;z-index:12;background-color:white;overflow-y:auto;"
    >

  <span type="button" id="close-feedback-btn" 
        style="cursor: pointer; z-index: 25; width: max-content;position:absolute;right:10px;top:10px;">
    ${renderCloseIcon({})}
  </span>


     ${FeatureCards(selectedCard, 2, "detail", primaryColor,1)}
      <div style="display:flex;flex-direction:column;gap:10px;padding:10px 20px 20px 20px;">
        <h3 id="prodio-ideas-comment-count-${selectedCard.id}" style="font-weight:700;font-size:18px;color:#474747;margin:0;padding:0;margin-bottom:5px;">Comments (${selectedCard.comments})</h3>
        <div style="display:flex;gap:8px; width:100%;">
          <span style="aspect-ratio:1;display:flex;justify-content:center;align-items:center;width:30px;height:30px;background-color:${generateRandomColors({ string: userData?.name })};color:white;font-size:14px;border-radius:50px;"> ${userData?.name ? userData?.name[0] : "A"}</span>
          <div style="display:flex;flex-direction:column;gap:10px; width:100%;">
            <textarea type="text" id="prodio-ideas-comment"  placeholder="Add a comment..."  autocomplete="off" 
              style="padding: 2px 8px;font-size:14px; border-radius: 5px;border: 1px solid #eaeaea; outline: none; background: ${backgroundColor}; color: ${textColor};"
              rows="2"
              ></textarea>
            <button id="prodio-ideas-comment-submit" style="padding: 5px 20px;border: none; width:max-content; background-color: ${primaryColor}; border-radius: 5px; color: #fff; font-size: 14px; cursor: pointer;">
              Submit
            </button>
          </div>
        </div>
      </div>
     <div id="prodio-ideas-comment-list"></div>
    </div>
    `
}


// export const renderComments = async (resetData: boolean = false, selectedCard: any) => {

//   let currentPage = 1;
//   let isFetching = false;
//   let hasMoreData = true;

//   const container = document.getElementById("prodio-feedback-details-comment");
//   const commentsContainer = document.getElementById("prodio-ideas-comment-list")
//   if (!container || !commentsContainer) return;


//   if (resetData) {
//     currentPage = 1;
//     hasMoreData = true;
//     commentsContainer.innerHTML = ""; // Clear previous feedbacks
//   }

//   const loadMoreComments = async () => {
//     if (isFetching || !hasMoreData) return;
//     isFetching = true;
//     const res = await fetchIdeasComments({ feedbackId: selectedCard?.id, page: currentPage });
//     const comments = res?.data || [];

//     if (comments.length > 0) {
//       const fragment = document.createDocumentFragment();
//       comments.forEach((comment: any, index: number) => {
//         const card = document.createElement("div");
//         card.innerHTML = renderCommentBox(comment);
//         card.setAttribute("data-comment", JSON.stringify(comment)); // Store ID for delegation
//         fragment.appendChild(card);
//       });

//       commentsContainer.appendChild(fragment); // Append all at once
//       currentPage++; // Move to next page
//     } else {
//       hasMoreData = false; // Stop fetching if no more data
//     }

//     isFetching = false;
//   };


//   await loadMoreComments(); // Load initial feedbacks

//   const handleScroll = async () => {
//     const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
//     if (nearBottom) {
//       await loadMoreComments();
//     }
//   };

//   setTimeout(() => {
//     container.addEventListener("scroll", handleScroll);
//   }, 100);



// }

export const renderComments = async (
  resetData: boolean = false,
  selectedCard: any,
  primaryColor: string
) => {
  let currentPage = 1;
  let isFetching = false;
  let hasMoreData = true;

  const container = document.getElementById("prodio-feedback-details-comment");
  const commentsContainer = document.getElementById("prodio-ideas-comment-list");

  if (!container || !commentsContainer) return;

  // Remove existing comments if reset is requested
  if (resetData) {
    currentPage = 1;
    hasMoreData = true;
    commentsContainer.innerHTML = ""; // Clear previous feedbacks
  }

  // Add loading spinner only on first render
  let loadingIndicator = commentsContainer.querySelector(".prodio-spinner-container") as HTMLElement;
  if (!loadingIndicator) {
    loadingIndicator = document.createElement("div");
    loadingIndicator.classList.add("prodio-spinner-container");
    loadingIndicator.innerHTML = `<div class="prodio-spinner"></div>`;
    commentsContainer.appendChild(loadingIndicator);
  }

  const loadMoreComments = async () => {
    if (isFetching || !hasMoreData) return;
    isFetching = true;

    // Show loader only for the first render, hide it after data is fetched
    if (currentPage === 1) loadingIndicator.style.display = "flex";

    try {
      const res = await fetchIdeasComments({ feedbackId: selectedCard?.id, page: currentPage });
      const comments = res?.data || [];

      if (comments.length > 0) {
        const fragment = document.createDocumentFragment();
        comments.forEach((comment: any) => {
          const card = document.createElement("div");
          card.innerHTML = renderCommentBox(comment, primaryColor);
          card.setAttribute("data-comment", JSON.stringify(comment));
          fragment.appendChild(card);
        });

        commentsContainer.appendChild(fragment);
        currentPage++;
      } else {
        hasMoreData = false;

        // Show "No comments found" only if it's the first page
        if (currentPage === 1) {
          commentsContainer.innerHTML = "<div class='prodio-no-data'>No comments found.</div>";
        }
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      isFetching = false;
      loadingIndicator.style.display = "none"; // Hide loader after fetching first batch
    }
  };

  await loadMoreComments(); // Load initial comments

  const handleScroll = async () => {
    const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
    if (nearBottom) {
      await loadMoreComments();
    }
  };

  setTimeout(() => {
    container.addEventListener("scroll", handleScroll);
  }, 100);
};




export const onFeedbackCardClick = (selectedCard: any, data: any, primaryColor: string) => {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const feedbackDetails = document.getElementById("feedback-details");

    const card = target.closest(".prodio-feedback-card");
    const closeBtn = target.closest("#close-feedback-btn"); // Checks if span or any of its children is clicked

    if (card && feedbackDetails && !selectedCard) {
      const feedbackData = JSON.parse(card.getAttribute("data-feedback") || "{}");
      selectedCard = feedbackData;
      feedbackDetails.style.display = "block";
      feedbackDetails.innerHTML = renderFeedbackDetails(feedbackData, data);

      renderComments(false, selectedCard, primaryColor)
      commentSubmit(selectedCard, data, primaryColor)
      handleDeleteIdeasComment(selectedCard,primaryColor)
    }

    if (closeBtn && feedbackDetails) {
      feedbackDetails.style.display = "none";
      selectedCard = null;
    }
  });
}

export const commentSubmit = (selectedCard: any, data: any, primaryColor: string) => {
  document.getElementById("prodio-ideas-comment-submit")?.addEventListener("click", async () => {
    const submitButton = document.getElementById("prodio-ideas-comment-submit") as HTMLButtonElement;
    const contentInput = document.getElementById("prodio-ideas-comment") as HTMLTextAreaElement;
    const content = contentInput.value;

    if (content) {


      const { orgData } = data;

      const { userData } = orgData
      const { id, name } = userData

      submitButton.disabled = true;

      submitButton.classList.add("prodio-disabled-btn");

      const dataToSend = {
        issue_id: selectedCard?.id,
        content: content,
        user_id: id,
        user_name: name
      }

      submitIdeaComment(dataToSend).then((res: any) => {
        renderComments(true, selectedCard, primaryColor)
        contentInput.value = "";
        submitButton.disabled = false;
        submitButton.classList.remove("prodio-disabled-btn");

        updatedSelectedCardComments(selectedCard, "increment", primaryColor)


      })
    }

  })
}


export const updatedSelectedCardComments = (selectedCard: any, type: string, primaryColor: string) => {

  const updatedValue = type === "increment" ? selectedCard.comments + 1 : selectedCard.comments - 1

  const count = document.getElementById(`prodio-ideas-comment-count-${selectedCard.id}`)
  if (count) {
    count.innerHTML = `Comments (${updatedValue})` 
  }

  selectedCard.comments = updatedValue

    const cardToUpdate = document.querySelector(`[data-feedback-id="${selectedCard.id}"]`);
    const updatedFeedback = {
      ...selectedCard,
      comments: updatedValue
    }
    if (cardToUpdate) {
      cardToUpdate.innerHTML = FeatureCards(updatedFeedback, 0, "card", primaryColor,1);
      cardToUpdate.setAttribute("data-feedback", JSON.stringify(updatedFeedback));
    }
}