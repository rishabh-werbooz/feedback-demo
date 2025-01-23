interface FormInput {
    type: string;
    title: string;
    description: string;
  }
  
  /**
   * Handles form submission by validating and processing the input data.
   * @param input FormInput
   */
  export const handleSubmit = (data: FormInput): void => {
    if (!data.type || !data.title || data.description) {
      alert("Please fill out all fields.");
      return;
    }
 
    console.log("Hitting API")

    fetch("https://webhook.site/9717a3d2-270d-4c87-a6c3-7d0b3b81702e", {
      method: "POST",
      mode:"no-cors",
      headers: {
        'Content-Type':"application/json"
      },
      body:JSON.stringify(data)
    }).then(res => {
      console.log("Form submitted successfully!", data);
      alert("Thank you for your submission!");
    })
  
    // Further processing such as API call can be added here
  };
  