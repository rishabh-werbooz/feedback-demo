import { frequencyTypes } from "../..";
import { Organization } from "../entities/Organization";
import { serverUrl } from "../lib/config";
import { fetchOrganizationData } from "./fetchOrganizationData";

export const fetchAnnouncements = async ({websiteId, organizationId, page }: {websiteId:string, organizationId: string, page?: number }) => {

    // if (page === 3) {
    //     return {
    //         success: true,
    //         data: []
    //     }
    // }

    const data = await fetchOrganizationData({organizationId,source:"announcement",page,websiteId})

    // const data = {
    //     "success": true,
    //     data: [
    //         {
    //             id: "1",
    //             name: "Beamer 2024: The Year in Review ✨",
    //             description: "2024 was a successful year for Beamer, filled with powerful new features and enhancements to help you engage better with your audience and get the most out of your releases. In case you missed what we’ve been up to, here’s a roundup of all the amazing updates we rolled out this year:",
    //             updated_at: "December 24, 2024",
    //             is_new: true
    //         },
    //         {
    //             id: "2",
    //             name: "Send email notifications & NPS from your custom domain",
    //             description: "Your users' inbox is a busy place, so to help your brand show up consistently for the launches and asks that matter most, we're excited to share that you can now send changelog post email notifications and NPS email surveys from your own custom domain and email!",
    //             updated_at: "September 07, 2024",
    //             is_new: true
    //         },
    //         {
    //             id: "3",
    //             name: "Power up your customer communications toolkit with Userflow! 🧰",
    //             description: "With our new SSO (Single-Sign-On) feature, you can now seamlessly sign up to Userflow with your existing Beamer account and fast-track your users to the aha moment!",
    //             updated_at: "June 28, 2024",
    //             is_new: false
    //         },
    //         {
    //             id: "4",
    //             name: "A small step for our post editor a giant leap for... 🚀",
    //             description: "With our new SSO (Single-Sign-On) feature, you can now seamlessly sign up to Userflow with your existing Beamer account and fast-track your users to the aha moment!",
    //             updated_at: "June 14, 2023",
    //             is_new: false
    //         },
    //         {
    //             id: "5",
    //             name: "Beamer 2024: The Year in Review ✨",
    //             description: "With our new SSO (Single-Sign-On) feature, you can now seamlessly sign up to Userflow with your existing Beamer account and fast-track your users to the aha moment!",
    //             updated_at: "December 24, 2024",
    //             is_new: false
    //         },

    //     ]
    // }

    return data
   
}