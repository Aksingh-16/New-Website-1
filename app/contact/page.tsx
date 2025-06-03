import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, CheckCircle, Linkedin, Github, Globe, AlertCircle } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "./actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ContactForm } from "./ContactForm"

export default async function ContactPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const success = searchParams?.success === "true"
  const error = searchParams?.error === "true"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {success && (
            <Alert className="mb-6 bg-green-600/20 border-green-600/30">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <AlertTitle className="text-green-400">Thank you for reaching out!</AlertTitle>
              <AlertDescription className="text-green-300">
                We appreciate your message and will connect with you soon. Please check your email for confirmation.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-6 bg-red-600/20 border-red-600/30">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <AlertTitle className="text-red-400">Error</AlertTitle>
              <AlertDescription className="text-red-300">
                There was an error sending your message. Please try again later or contact us directly via email.
              </AlertDescription>
            </Alert>
          )}
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Together</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to automate your workflows, secure your systems, or scale your marketing? Let's discuss how I can
              help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send Me a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and I'll get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-slate-400">
                    Multiple ways to reach me for your convenience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-slate-400">akashsingh000054@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Response Time</p>
                      <p className="text-slate-400">24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-slate-400">Available for remote work worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Connect on Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link
                      href="https://linkedin.com/in/akash-singh3"
                      className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6 text-blue-400" />
                    </Link>
                    <Link
                      href="https://github.com/akashsingh"
                      className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6 text-blue-400" />
                    </Link>
                    <Link
                      href="https://akashsingh.me"
                      className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-6 w-6 text-blue-400" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Quick Response</p>
                      <p className="text-slate-400 text-sm">I'll respond to your message within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Free Consultation</p>
                      <p className="text-slate-400 text-sm">Initial discussion about your project is always free</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Custom Solutions</p>
                      <p className="text-slate-400 text-sm">Tailored approach based on your specific needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the service that best fits your needs, or contact me for a custom solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity Audit</h3>
                <p className="text-slate-400 mb-6">Comprehensive security assessment and recommendations</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/cybersecurity">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-white mb-4">CRM Automation</h3>
                <p className="text-slate-400 mb-6">Streamline your business processes with smart automation</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/crm-automation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Marketing Campaigns</h3>
                <p className="text-slate-400 mb-6">Data-driven ad campaigns that generate real results</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/marketing-services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
