import { Organization } from "../entities/Organization";
import { serverUrl } from "../lib/config";

export const fetchPublicFeedbacks = async ({ organizationId, page,websiteId }: {websiteId:string, organizationId: string, page?: number }) => {


  // if (page === 3) {
  //   return {
  //     success: true,
  //     data: []
  //   }
  // }

  // const data = {
  //   "success": true,
  //   "data": [
  //     {
  //       "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //       "title": "Roadmap and feature request",
  //       "description": "Discover what new features users want you to build",
  //       "status": "completed",
  //       "type": "bug",
  //       "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "votes": 1136,
  //       "is_public": true,
  //       "created_at": "2025-03-10T17:11:00.045+00:00",
  //       "updated_at": "2025-03-10T17:11:00.045+00:00",
  //       "feedback_id": null,
  //       "user_name": "Raj",
  //       "user_email": "rajjwl2002@gmail.com",
  //       "source": {
  //         "id": "localhost",
  //         "name": "slider",
  //         "type": "Website"
  //       },
  //       "last_retrieved_message": false,
  //       "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "meta_data": null
  //     },
  //     {
  //       "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //       "title": "Soc 2 full compliance",
  //       "description": "Ensures that Beamer has the proper infrastructure, tools, and processes to protect customer information from unauthorized access both from within and outside the firm",
  //       "status": "completed",
  //       "type": "improvement",
  //       "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "votes": 556,
  //       "is_public": true,
  //       "created_at": "2025-03-10T17:11:00.045+00:00",
  //       "updated_at": "2025-03-10T17:11:00.045+00:00",
  //       "feedback_id": null,
  //       "user_name": "Raj",
  //       "user_email": "rajjwl2002@gmail.com",
  //       "source": {
  //         "id": "localhost",
  //         "name": "slider",
  //         "type": "Website"
  //       },
  //       "last_retrieved_message": false,
  //       "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "meta_data": null
  //     },
  //     {
  //       "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //       "title": "Email notifications for product updates",
  //       "description": "Send email notifications for your product updates directly from Beamer",
  //       "status": "under_review",
  //       "type": "task",
  //       "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "votes": 455,
  //       "is_public": true,
  //       "created_at": "2025-03-10T17:11:00.045+00:00",
  //       "updated_at": "2025-03-10T17:11:00.045+00:00",
  //       "feedback_id": null,
  //       "user_name": "Raj",
  //       "user_email": "rajjwl2002@gmail.com",
  //       "source": {
  //         "id": "localhost",
  //         "name": "slider",
  //         "type": "Website"
  //       },
  //       "last_retrieved_message": false,
  //       "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "meta_data": null
  //     },
  //     {
  //       "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //       "title": "Roadmap and feature request",
  //       "description": "Discover what new features users want you to build",
  //       "status": "completed",
  //       "type": "bug",
  //       "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "votes": 1136,
  //       "is_public": true,
  //       "created_at": "2025-03-10T17:11:00.045+00:00",
  //       "updated_at": "2025-03-10T17:11:00.045+00:00",
  //       "feedback_id": null,
  //       "user_name": "Raj",
  //       "user_email": "rajjwl2002@gmail.com",
  //       "source": {
  //         "id": "localhost",
  //         "name": "slider",
  //         "type": "Website"
  //       },
  //       "last_retrieved_message": false,
  //       "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //       "meta_data": null
  //     },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Soc 2 full compliance",
  //     //   "description": "Ensures that Beamer has the proper infrastructure, tools, and processes to protect customer information from unauthorized access both from within and outside the firm",
  //     //   "status": "completed",
  //     //   "type": "improvement",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 556,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Email notifications for product updates",
  //     //   "description": "Send email notifications for your product updates directly from Beamer",
  //     //   "status": "under_review",
  //     //   "type": "task",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 455,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Roadmap and feature request",
  //     //   "description": "Discover what new features users want you to build",
  //     //   "status": "completed",
  //     //   "type": "bug",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 1136,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Soc 2 full compliance",
  //     //   "description": "Ensures that Beamer has the proper infrastructure, tools, and processes to protect customer information from unauthorized access both from within and outside the firm",
  //     //   "status": "completed",
  //     //   "type": "improvement",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 556,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Email notifications for product updates",
  //     //   "description": "Send email notifications for your product updates directly from Beamer",
  //     //   "status": "under_review",
  //     //   "type": "task",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 455,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Roadmap and feature request",
  //     //   "description": "Discover what new features users want you to build",
  //     //   "status": "completed",
  //     //   "type": "bug",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 1136,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Soc 2 full compliance",
  //     //   "description": "Ensures that Beamer has the proper infrastructure, tools, and processes to protect customer information from unauthorized access both from within and outside the firm",
  //     //   "status": "completed",
  //     //   "type": "improvement",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 556,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Email notifications for product updates",
  //     //   "description": "Send email notifications for your product updates directly from Beamer",
  //     //   "status": "under_review",
  //     //   "type": "task",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 455,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Roadmap and feature request",
  //     //   "description": "Discover what new features users want you to build",
  //     //   "status": "completed",
  //     //   "type": "bug",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 1136,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Soc 2 full compliance",
  //     //   "description": "Ensures that Beamer has the proper infrastructure, tools, and processes to protect customer information from unauthorized access both from within and outside the firm",
  //     //   "status": "completed",
  //     //   "type": "improvement",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 556,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //     // {
  //     //   "id": "e50da271-d0dc-403f-afd5-b4a6704683ec",
  //     //   "title": "Email notifications for product updates",
  //     //   "description": "Send email notifications for your product updates directly from Beamer",
  //     //   "status": "under_review",
  //     //   "type": "task",
  //     //   "user_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "votes": 455,
  //     //   "is_public": true,
  //     //   "created_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "updated_at": "2025-03-10T17:11:00.045+00:00",
  //     //   "feedback_id": null,
  //     //   "user_name": "Raj",
  //     //   "user_email": "rajjwl2002@gmail.com",
  //     //   "source": {
  //     //     "id": "localhost",
  //     //     "name": "slider",
  //     //     "type": "Website"
  //     //   },
  //     //   "last_retrieved_message": false,
  //     //   "account_id": "21008c54-e3bf-4a84-a89c-d1e681221d88",
  //     //   "meta_data": null
  //     // },
  //   ]
  // }

  // return data

    const url = serverUrl + `/feedback/issues/public?id=${organizationId}&page=${page}&websiteId=${websiteId}` 
    const res = await fetch(url)

    const result = await res.json()
      return result
}