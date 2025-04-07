import { frequencyTypes } from "../..";
import { Organization } from "../entities/Organization";
import { serverUrl } from "../lib/config";

export const fetchIdeasComments = async ({ feedbackId, page }: { feedbackId: string, page?: number }) => {
    // if (page === 3) {
    //     return {
    //         success: true,
    //         data: []
    //     }
    // }

    // const data = {
    //     "success": true,
    //     data: [
    //         {
    //             "id": "1",
    //             "issue_id": "a",
    //             "content": "Very good idea, bro! This approach seems well thought out and has a lot of potential. If we refine it further, it could be a game-changer. Looking forward to seeing how we can implement this and make it even better. Great work, keep it up!",
    //             "created_at": "September 23, 2025",
    //             "updated_at": "September 23, 2025",
    //             "user_name": "Rishabh Gupta",
    //             "user_id": "A1"
    //         },
    //         {
    //             "id": "2",
    //             "issue_id": "b",
    //             "content": "This is a good start, but I think it needs some improvement. We might need to optimize a few things and ensure scalability. Maybe we should consider user feedback and test some edge cases before finalizing. Overall, it's promising, just needs a few refinements.",
    //             "created_at": "September 24, 2025",
    //             "updated_at": "September 24, 2025",
    //             "user_name": "Nakul Sharma",
    //             "user_id": "A2"
    //         },
    //         {
    //             "id": "3",
    //             "issue_id": "c",
    //             "content": "Great work! The implementation looks solid, and I appreciate the attention to detail. Everything seems well-structured and efficient. We should now focus on edge cases and performance optimization to make sure it's ready for production. Keep up the great effort, looking forward to the final version!",
    //             "created_at": "September 25, 2025",
    //             "updated_at": "September 25, 2025",
    //             "user_name": "Ankit Verma",
    //             "user_id": "A3"
    //         },
    //         {
    //             "id": "4",
    //             "issue_id": "d",
    //             "content": "I think we should change the approach slightly to make it more efficient. The current solution is good but has some potential drawbacks. Maybe we can brainstorm alternatives that improve performance and scalability. Overall, a great effort, but let's explore possible optimizations before moving forward.",
    //             "created_at": "September 26, 2025",
    //             "updated_at": "September 26, 2025",
    //             "user_name": "Priya Singh",
    //             "user_id": "A4"
    //         },
    //         {
    //             "id": "5",
    //             "issue_id": "e",
    //             "content": "This is a game-changer! The solution you've proposed has the potential to significantly improve efficiency and streamline the process. If we refine it a little more and ensure robustness, it could be a major breakthrough. Let's test it further and push it to the next level!",
    //             "created_at": "September 27, 2025",
    //             "updated_at": "September 27, 2025",
    //             "user_name": "Rajkumar Mehta",
    //             "user_id": "A5"
    //         },
    //         // {
    //         //     "id": "6",
    //         //     "issue_id": "f",
    //         //     "content": "Can we add more details?",
    //         //     "created_at": "September 28, 2025",
    //         //     "updated_at": "September 28, 2025",
    //         //     "user_name": "Simran Kaur",
    //         //     "user_id": "A6"
    //         // },
    //         // {
    //         //     "id": "7",
    //         //     "issue_id": "g",
    //         //     "content": "I agree with this",
    //         //     "created_at": "September 29, 2025",
    //         //     "updated_at": "September 29, 2025",
    //         //     "user_name": "Vikas Yadav",
    //         //     "user_id": "A7"
    //         // },
    //         // {
    //         //     "id": "8",
    //         //     "issue_id": "h",
    //         //     "content": "Looks good to me",
    //         //     "created_at": "September 30, 2025",
    //         //     "updated_at": "September 30, 2025",
    //         //     "user_name": "Neha Kapoor",
    //         //     "user_id": "A8"
    //         // },
    //         // {
    //         //     "id": "9",
    //         //     "issue_id": "i",
    //         //     "content": "Let's finalize this",
    //         //     "created_at": "October 1, 2025",
    //         //     "updated_at": "October 1, 2025",
    //         //     "user_name": "Amit Mishra",
    //         //     "user_id": "A9"
    //         // },
    //         // {
    //         //     "id": "10",
    //         //     "issue_id": "j",
    //         //     "content": "Please check the last update",
    //         //     "created_at": "October 2, 2025",
    //         //     "updated_at": "October 2, 2025",
    //         //     "user_name": "Kritika Jain",
    //         //     "user_id": "A10"
    //         // }
    //     ]
        
    // }

    // return data
      const url = serverUrl + `/feedback/issues/comments?id=${feedbackId}&page=${page}` 
      const res = await fetch(url)

      const result = await res.json()
        return result
}