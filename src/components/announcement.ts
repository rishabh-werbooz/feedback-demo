import { configData } from "../core/lib/config";
import { FeedbackTypes, SubmissionMode } from "../core/lib/enum";
import { fetchAnnouncements } from "../core/usecases/fetchAnnouncements"
import { handleSubmit } from "../core/usecases/handleSubmit";
import { announcementCard } from "./reuseables/announcementCard";

// export const announcementContainer = async (data: any) => {
//     const { orgData,config } = data;

//     const { primaryColor = configData?.primaryColor } = config ?? {}

//     const accountId = orgData?.organizationId;
//     let currentPage = 1;
//     let isFetching = false; // Prevent multiple requests
//     let hasMoreData = true; // Stop fetching when no more data

//     // Create a container div
//     const container = document.createElement("div");
//     container.className = "prodio-feedback-hidden-scrollbar";
//     // container.style.cssText = "display:flex;flex-direction:column;gap:15px;overflow-y:auto;padding:1px;height:500px";
//     container.style.overflowY = "auto"
//     container.style.display = "flex"
//     container.style.flexDirection = "column"
//     container.style.gap = "15px"
//     container.style.padding = "1px"
//     container.style.height = "calc(100vh - 170px)"

//     // Function to fetch and append new feeds
//     const loadMoreNewsfeeds = async () => {
//         if (isFetching || !hasMoreData) return;
//         isFetching = true;

//         const res = await fetchAnnouncements({ organizationId: accountId, page: currentPage });
//         const newsFeeds = res.data || [];

//         if (newsFeeds.length > 0) {
//             newsFeeds.forEach((feeds: any) => {
//                 const card = document.createElement("div");
//                 card.innerHTML = announcementCard(feeds,primaryColor);
//                 container.appendChild(card);
//             });
//             currentPage++; // Move to the next page
//         } else {
//             hasMoreData = false; // Stop fetching if no more data
//         }

//         isFetching = false;
//     };

//     // Load initial data
//     await loadMoreNewsfeeds();

//     // Ensure scroll event triggers correctly
//     const handleScroll = async () => {
//         const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
//         if (nearBottom) {
//             await loadMoreNewsfeeds();
//         }
//     };

//     // Attach event listener AFTER appending to DOM
//     setTimeout(() => {
//         container.addEventListener("scroll", handleScroll);
//     }, 100);
//     // Append container to body or a specific parent element
//     // document.body.appendChild(container);

//     const prodioTabContent = document.getElementById("prodio-tab-content")
//     prodioTabContent?.appendChild(container)

//     if (prodioTabContent) {

//         prodioTabContent.addEventListener("click", async (event: any) => {
//             if (event.target.classList.contains("prodio-announcement-comment-submit")) {
//                 const submitButton = event.target as HTMLButtonElement;
//                 const card = event.target.closest(".announcement-card");
//                 const type = card.querySelector(".prodio-announcement-comment-type") as HTMLSelectElement;
//                 const title = card.querySelector(".prodio-announcement-comment-title") as HTMLInputElement;
//                 const comment = title.value.trim();
//                 const typeValue = type.value.trim();
        
//                 if (comment && type) {
//                     console.log(`Submitting comment: "${comment}" for card ID: ${card.dataset.id}`);
        
//                     // Disable button and show loading state
//                     submitButton.disabled = true;
//                     submitButton.classList.add("prodio-disabled-btn");
        
//                     const website = window.location.hostname;
        
//                     const dataToSend = {
//                         title: comment,
//                         description: "",
//                         type: typeValue, // Feature, task, or bug
//                         feedback_id: card.dataset.id,
//                         source: {
//                             id: website,
//                             name: "slider",
//                             type: "Website",
//                         },
//                         user_id: orgData?.userData?.id,
//                         user_name: orgData?.userData?.name,
//                         user_email: orgData?.userData?.email,
//                         created_at: new Date(),
//                         updated_at: new Date(),
//                         last_retrieved_message: false,
//                         account_id: orgData?.organizationId,
//                         meta_data: null,
//                         is_public: false
//                     };
        
//                     await handleSubmit(dataToSend);
        
//                     // Reset form fields
//                     type.value = FeedbackTypes.feature.value;
//                     title.value = "";
        
//                     // Re-enable button and reset text
//                     submitButton.disabled = false;
//                     submitButton.classList.remove("prodio-disabled-btn");
//                 }
//             }
//         });
        
//     }

//     // return `<div>${container.outerHTML}</div>`; // Return the actual container element
// };

export const announcementContainer = async (data: any) => {
    const { orgData, config } = data;
    const { primaryColor = configData?.primaryColor } = config ?? {};
    const accountId = orgData?.organizationId;
    const websiteId = orgData?.websiteId;

    let currentPage = 1;
    let isFetching = false; // Prevent multiple requests
    let hasMoreData = true; // Stop fetching when no more data

    // Create a container div
    const container = document.createElement("div");
    container.className = "prodio-feedback-hidden-scrollbar";
    container.style.overflowY = "auto";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "15px";
    container.style.padding = "1px";
    container.style.height = "calc(100vh - 170px)";

    // Create loading indicator
    const loadingIndicator = document.createElement("div");
    loadingIndicator.className = "prodio-spinner-container";
    loadingIndicator.innerHTML = `<div class="prodio-spinner"></div>`;
    container.appendChild(loadingIndicator);

    // Function to fetch and append new feeds
    const loadMoreNewsfeeds = async () => {
        if (isFetching || !hasMoreData) return;
        isFetching = true;

        loadingIndicator.style.display = "flex"; // Show loading spinner

        const res = await fetchAnnouncements({ websiteId,organizationId: accountId, page: currentPage });
        const newsFeeds = res.data || [];

        loadingIndicator.style.display = "none"; // Hide loading spinner

        if (newsFeeds.length > 0) {
            newsFeeds.forEach((feeds: any) => {
                const card = document.createElement("div");
                card.innerHTML = announcementCard(feeds, primaryColor);
                container.appendChild(card);
            });
            currentPage++; // Move to the next page
        } else if (currentPage === 1) {
            // If no data and first page, show "No Feeds" message
            const noFeedsMessage = document.createElement("div");
            noFeedsMessage.className = "prodio-no-data";
            noFeedsMessage.textContent = "No feeds available.";
            container.appendChild(noFeedsMessage);
            hasMoreData = false;
        } else {
            hasMoreData = false;
        }

        isFetching = false;
    };

    // Load initial data
    loadMoreNewsfeeds();

    // Ensure scroll event triggers correctly
    const handleScroll = async () => {
        const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 20;
        if (nearBottom) {
            await loadMoreNewsfeeds();
        }
    };

    // Attach event listener AFTER appending to DOM
    setTimeout(() => {
        container.addEventListener("scroll", handleScroll);
    }, 100);

    // Append container to the specified tab content
    const prodioTabContent = document.getElementById("prodio-tab-content");
    prodioTabContent?.appendChild(container);

    if (prodioTabContent) {
        prodioTabContent.addEventListener("click", async (event: any) => {
            if (event.target.classList.contains("prodio-announcement-comment-submit")) {
                const submitButton = event.target as HTMLButtonElement;
                const card = event.target.closest(".announcement-card");
                const type = card.querySelector(".prodio-announcement-comment-type") as HTMLSelectElement;
                const title = card.querySelector(".prodio-announcement-comment-title") as HTMLInputElement;
                const comment = title.value.trim();
                const typeValue = type.value.trim();

                if (comment && type) {
                    console.log(`Submitting comment: "${comment}" for card ID: ${card.dataset.id}`);

                    // Disable button and show loading state
                    submitButton.disabled = true;
                    submitButton.classList.add("prodio-disabled-btn");

                    const website = window.location.hostname;

                    const dataToSend = {
                        title: comment,
                        description: "",
                        type: typeValue, // Feature, task, or bug
                        feedback_id: card.dataset.id,
                        source: {
                            id: website,
                            name: "slider",
                            type: "Website",
                        },
                        user_id: orgData?.userData?.id,
                        user_name: orgData?.userData?.name,
                        user_email: orgData?.userData?.email,
                        created_at: new Date(),
                        updated_at: new Date(),
                        last_retrieved_message: false,
                        account_id: orgData?.organizationId,
                        meta_data: null,
                        is_public: false,
                        website_id: orgData?.websiteId,
                        submission_mode:SubmissionMode.announcement 
                    };

                    await handleSubmit(dataToSend);

                    // Reset form fields
                    type.value = FeedbackTypes.feature.value;
                    title.value = "";

                    // Re-enable button and reset text
                    submitButton.disabled = false;
                    submitButton.classList.remove("prodio-disabled-btn");
                }
            }
        });
    }
};


