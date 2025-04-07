import { SessionStorageName } from "../..";
import { getFromSessionStorage } from "../../core/repositories/Storage";
import { deleteIdeasComment } from "../../core/usecases/deleteIdeasComment";
import { updatedSelectedCardComments } from "../feedbackDetails";
import { renderCloseIcon } from "./closeIcon";
import { generateRandomColors } from "./generateRandomColors";

export const renderCommentBox = (comment: any, primaryColor?: string) => {

    const {
        id,
        issue_id,
        content,
        created_at,
        updated_at,
        user_name,
        user_id
    } = comment


    const { userData } = getFromSessionStorage(SessionStorageName);


    return `
    <div 
        style="padding:10px 20px;display:flex;gap:8px; position:relative;" 
        class="prodio-feedback-card-animate prodio-idea-comment-container" 
        data-comment-id="${id}"
    >
        ${userData?.id === user_id ? `
            <span class="prodio-idea-comment-delete-icon" 
                  style="cursor:pointer;position:absolute;top:2px;right:20px;">
                ${renderCloseIcon({ stroke: primaryColor, size: "20" })}
            </span>
        ` : ``}
        <span style="aspect-ratio:1;display:flex;justify-content:center;align-items:center;
            width:30px;height:30px;background-color:${generateRandomColors({ string: user_name })};
            color:white;font-size:14px;border-radius:50px;">
            ${user_name ? user_name[0] : "A"}
        </span>
        <div style="display:flex;flex-direction:column;">
            <span style="color:#474747;font-size:15px;"> ${user_name}</span>
            <span style="color:#8CA2B5;font-size:12px;padding:3px 0 8px 0;"> ${updated_at}</span>
            <span style="color:#474747;font-size:13px;line-height: 1.6;"> ${content}</span>
        </div>
    </div>
`;

}


export const handleDeleteIdeasComment = (selectedCard: any, primaryColor: string) => {
    document.addEventListener("click", (event: any) => {
        const target = event.target.closest(".prodio-idea-comment-delete-icon");
        if (target) {
            const commentBox = target.closest(".prodio-idea-comment-container");
            if (commentBox) {
                commentBox.remove(); // Remove the comment from the UI
                const commentId = commentBox.getAttribute("data-comment-id"); // Optional: If you have an ID
                deleteIdeasComment({ commentId, issueId: selectedCard?.id })

                updatedSelectedCardComments(selectedCard, "", primaryColor)
                // console.log(`Comment with ID ${commentId} removed.`);
                // TODO: Call API to delete the comment from the backend if needed
            }
        }
    });
};
