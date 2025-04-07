import { FeedbackStatus, FeedbackTypes } from "../../core/lib/enum";
import { renderCommentIcn } from "./commentIcon";

export const FeatureCards = (feedback: any, delay: number, usage: string, primaryColor: string, variant: number = 1): string => {
  const { title, description, type, votes, status, comments } = feedback;


  return `
    <div
      class="prodio-feedback-card-animate prodio-feedback-card"
      data-feedback='${JSON.stringify(feedback)}'
      style=" 
        border-bottom: 1px solid #f1f1f1;
        padding: 15px;
        opacity: 0;
        animation-delay: ${delay * 0.1}s;
        animation-fill-mode: forwards;
        cursor: ${usage === "card" ? "pointer" : "default"};
      "
    >
      <div style="display: flex; align-items: flex-start; gap: 16px;">
       
        ${variant === 1 ?
      `
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
              <div style="display:flex;justify-content:space-between;gap:10px;align-items:start;">
                <h3 class=${usage === "card" ? "prodio-feedback-card-title" : "prodio-feedback-card-detail-title"} style="font-weight: 600; color: #374151; margin: 0; ">
                  ${title}
                </h3>
                ${usage === "card" ?
        `
                    <div style="display:flex;gap:4px;align-items:center;color:#474747;">
                      ${comments} ${renderCommentIcn({ stroke: "#474747" })}
                    </div>
                  `
        :
        ``}
              </div>
              <span style="background-color:${FeedbackTypes[type]?.color}; color: ${FeedbackTypes[type]?.text}; font-size: 10px; font-weight: 500; padding:3px 10px 2px 10px; border-radius: 16px; text-transform: uppercase; letter-spacing: 0.05em; width:max-content;">
                ${type}
              </span>
              <div style="display: flex; align-items: center; gap: 4px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background-color:${FeedbackStatus[status]?.color}; display: inline-block;"></span>
                <span style="font-size: 12px; color: #474747; font-weight: 500;">
                  ${FeedbackStatus[status]?.label}
                </span>
              </div>
              <span ${usage === "card" ? 'class="prodio-feedback-card-description"' : ''} style="font-size: 15px; color: #474747 !important;line-height: 1.5;">
                ${description}
              </span>
              ${usage === "card" ?
        `
                  <span class="prodio-ideas-card-comment-text" style="color:${primaryColor};display:flex;gap:5px;align-items:center;font-size:14px; font-weight:300;">
                    ${renderCommentIcn({ stroke: primaryColor })} Add a comment
                  </span>` : ``}
          
            </div>
          `
      :
      `
        <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
            <h3 class=${usage === "card" ? "prodio-feedback-card-title" : "prodio-feedback-card-detail-title"} style="font-weight: 600; color: #374151; margin: 0; ">
              ${title}
            </h3>
     <span style="background-color:${FeedbackTypes[type]?.color}; color: ${FeedbackTypes[type]?.text}; font-size: 10px; font-weight: 500; padding:3px 10px 2px 10px; border-radius: 16px; text-transform: uppercase; letter-spacing: 0.05em; width:max-content;">
                ${type}
              </span>
            ${usage === "card" ?
        `
                  <span class="prodio-ideas-card-comment-text" style="color:${primaryColor};display:flex;gap:5px;align-items:center;font-size:14px; font-weight:300;">
                    ${renderCommentIcn({ stroke: primaryColor })} Add a comment
                  </span>` : ``}
          
              `
    }
      </div>
    </div>
  `;
};


// <div style="width: 49px; height: 49px; border: 1px solid #e5e7eb; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: white;">
// <button style="background: none; border: none; cursor: pointer; color: #9ca3af; display: flex; justify-content: center; width: 24px; height: 24px;">
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="m18 15-6-6-6 6"/>
//   </svg>
// </button>
// <span style="font-size: 18px; font-weight: 600; color: #4b5563; line-height: 1.5;">
//   ${votes}
// </span>
// </div>