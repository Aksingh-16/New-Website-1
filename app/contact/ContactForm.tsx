"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { submitContactForm } from "./actions"
import { useState } from "react"

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        router.push("/contact?success=true")
      } else {
        router.push("/contact?error=true")
      }
    } catch (error) {
      router.push("/contact?error=true")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-300">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-300">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-slate-300">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          placeholder="What can I help you with?"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-300">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          placeholder="Tell me about your project, goals, and how I can help..."
        />
      </div>
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Mail className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
} 