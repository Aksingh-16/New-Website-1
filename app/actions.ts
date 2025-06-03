"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Here you would typically send an email or save to a database
  // For now, we'll just log the form data
  console.log("Contact form submission:", {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  })

  // In a real application, you would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - Or a form service like Formspree

  // For demonstration, we'll redirect to a thank you page
  // You could also show a success message on the same page
  redirect("/?success=true")
}
