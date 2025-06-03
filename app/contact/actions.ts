"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Here you would typically send an email or save to a database
  // For now, we'll just log the form data
  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
    recipient: "akashsingh000054@gmail.com",
  })

  // In a real application, you would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - Or a form service like Formspree

  // For demonstration, we'll redirect with a success message
  redirect("/contact?success=true")
}
