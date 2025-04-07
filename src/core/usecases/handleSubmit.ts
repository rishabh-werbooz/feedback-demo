import { serverUrl } from "../lib/config";


interface FormInput {
  title: string,
  description: string,
  type: string,    // How we will define its a type of feature, tasks, or bug, we can add more types here.
  feedback_id: string,
  source: {
    id: string,
    name: string,
    type: string,
  },
  user_name: string,
  user_email: string,
  created_at: any,
  updated_at: any,
  last_retrieved_message: boolean,
  account_id: string,
  meta_data: any,
  is_public: boolean
}

/**
 * Handles form submission by validating and processing the input data.
 * @param input FormInput
 */
export const handleSubmit = async (data: FormInput): Promise<any> => {

  // console.log(data)
  // return
  const url = serverUrl + "/feedback/issues"

  const res = await fetch(url, {
    method: "POST",
    // mode:"no-cors",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data)
  })

  // console.log(res)
  const result = await res.json()
  //     return {
  //   message:"Feedback submitted successfully"
  // }
  return result
  // Further processing such as API call can be added here
};


// {
//  error: "Failed to save data",
// }
// {
//   message:"Feedback submitted successfully"
// }