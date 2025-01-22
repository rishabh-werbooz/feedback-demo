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
  
    console.log("Form submitted successfully!", input);
    alert("Thank you for your submission!");
  
    // Further processing such as API call can be added here
  };
  