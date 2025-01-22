interface FormInput {
    name: string;
    email: string;
  }
  
  /**
   * Handles form submission by validating and processing the input data.
   * @param input FormInput
   */
  export const handleSubmit = (input: FormInput): void => {
    if (!input.name || !input.email) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(input.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Hitting API")

    fetch("https://webhook.site/9717a3d2-270d-4c87-a6c3-7d0b3b81702e", {
      method:"POST",
      headers: {
        'Content-Type':"application/json"
      },
      body:JSON.stringify(input)
    }).then(res => {
      console.log("Form submitted successfully!", input);
      alert("Thank you for your submission!");
    })
  
    // Further processing such as API call can be added here
  };
  