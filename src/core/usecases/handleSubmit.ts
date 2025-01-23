interface FormInput {
    type: string;
    title: string;
    description: string;
  }
  
  /**
   * Handles form submission by validating and processing the input data.
   * @param input FormInput
   */
  export const handleSubmit = async (data: FormInput): Promise<any> => {
 
  const res = await  fetch("https://webhook.site/9717a3d2-270d-4c87-a6c3-7d0b3b81702e", {
      method: "POST",
      mode:"no-cors",
      headers: {
        'Content-Type':"application/json"
      },
      body:JSON.stringify(data)
    })
    const result = await res.json()
    return result
    // Further processing such as API call can be added here
};
  

// {
//  error: "Failed to save data",
// }
// {
//   message:"Feedback submitted successfully"
// }