"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "3103cc4f-41e4-432f-b415-c9be720a6c7d",
        name,
        email,
        subject,
        message,
        from_name: "Portfolio Contact Form",
      }),
    })

    const result = await response.json()
    if (!response.ok) {
      throw new Error(result.message || "Something went wrong!")
    }

    // Instead of using redirect, return a success status
    return { success: true }
  } catch (error) {
    console.error("Error submitting form:", error)
    // Return error status instead of redirecting
    return { success: false, error: "Failed to send message" }
  }
}
