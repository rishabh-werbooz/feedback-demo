interface FormInput {
  type: string;
  title: string;
  description: string;
  feedback_id: string;
  user_id: string;
  }
  
  /**
   * Handles form submission by validating and processing the input data.
   * @param input FormInput
   */
  export const handleSubmit = async (data: FormInput): Promise<any> => {
 
    const res = await  fetch("https://webhook.site/2bf6bd07-3d47-4ff7-9c17-d1c60184c9eb", {
      method: "POST",
      mode:"no-cors",
      headers: {
        'Content-Type':"application/json"
      },
      body:JSON.stringify(data)
    })
    
    // const result = await res.json()
    return {
  message:"Feedback submitted successfully"
}
    
    // Further processing such as API call can be added here
};
  

// {
//  error: "Failed to save data",
// }
// {
//   message:"Feedback submitted successfully"
// }