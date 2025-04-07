import { FeedbackTypesArray } from "../../core/lib/enum"
import { marked } from "marked";  

export const announcementCard = (feed: any, primaryColor: string) => {
    const { name, updated_at, is_new, description, id } = feed
    const htmlDescription = marked(description);
    return `
    <div
        style="
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            padding:10px;
            display:flex;
            flex-direction:column;
            gap:10px;
            border-radius: 2px;
        "
        data-id="${feed.id}" 
        class="announcement-card"
    >
        <div style="display:flex;gap:10px;align-items:center;">
            ${is_new ? `<span style="background-color:#FF5A80;width:max-content;padding:6px 6px 3px 6px ;border-radius:10px;;color:#fff;font-size:10px;">NEW</span>` : ""} 
            <span style="color:#8DA2B5;font-size:14px;">${updated_at}</span>
        </div>
    <h3  style="color:#474747;font-size:18px;font-weight:700; line-height: 1.4;">${name}</h3>
    <span id="prodio-announcement-description">${htmlDescription}</span>
    
   <div style="display:flex;flex-direction:column;gap:10px;background-color:#9C9C9C1A;margin:0 -10px -10px -10px; padding:20px 10px;">

      <select placeholder="select" class="prodio-announcement-comment-type" style="padding: 6.5px 7px;font-size:14px; border-radius: 5px; outline:none; border:none; background: white; color:#474747;" >
            ${FeedbackTypesArray.map((option: any) => (
        `<option value="${option?.value}">${option?.label}</option>`
    ))}
          </select>
    <input type="text" class="prodio-announcement-comment-title" placeholder="Add a comment..." style="padding: 4px 10px;font-size:14px; border-radius: 5px; outline:none; border:none; background: white; color:#474747;"/>
    <div>
        <button 
        class="prodio-announcement-comment-submit"
        style="padding: 5px 20px;border: none; width:max-content; background-color: ${primaryColor}; border-radius: 5px; color: #fff; font-size: 14px; cursor: pointer;"
        >
        Submit
        </button>
        </div>

   </div>
    </div>
    `
}