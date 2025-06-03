import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Mail, Bot, LinkIcon, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CRMAutomationPage() {
  const platforms = [
    {
      name: "GoHighLevel (GHL)",
      description: "Complete marketing automation platform with CRM, funnels, and communication tools",
      features: ["Lead capture & nurturing", "SMS & email campaigns", "Appointment booking", "Pipeline management"],
    },
    {
      name: "HubSpot",
      description: "Comprehensive CRM platform for sales, marketing, and customer service automation",
      features: ["Contact management", "Deal tracking", "Email sequences", "Reporting & analytics"],
    },
    {
      name: "Zoho CRM",
      description: "Affordable CRM solution with powerful automation and customization options",
      features: ["Workflow automation", "Lead scoring", "Custom fields", "Integration capabilities"],
    },
    {
      name: "WordPress CRM",
      description: "WordPress-based CRM plugins for seamless website integration",
      features: ["Contact forms", "Lead tracking", "Email marketing", "Customer database"],
    },
    {
      name: "Shopify Automation",
      description: "E-commerce customer automation for Shopify stores",
      features: ["Order automation", "Customer segmentation", "Abandoned cart recovery", "Review requests"],
    },
  ]

  const services = [
    {
      icon: Users,
      title: "Lead Routing & Nurturing Workflows",
      description: "Automatically route leads to the right team members and nurture them with personalized sequences.",
    },
    {
      icon: LinkIcon,
      title: "Form & Pipeline Integration",
      description: "Connect your forms to CRM pipelines and automate lead qualification and scoring.",
    },
    {
      icon: Mail,
      title: "Email + SMS Automation",
      description: "Set up multi-channel communication workflows that engage prospects at the right time.",
    },
    {
      icon: Bot,
      title: "AI Assistant Setup & Maintenance",
      description: "Implement AI chatbots and assistants to handle customer inquiries and lead qualification.",
    },
    {
      icon: Zap,
      title: "Zapier + Make (Integromat) Connections",
      description: "Connect your CRM with 1000+ apps to create powerful automation workflows.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">CRM Automation Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Automate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Business Operations
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Automate your business operations across top CRMs with custom workflows that save time and boost
              efficiency. Transform manual processes into intelligent automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">CRM Platforms I Work With</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Expert automation setup across all major CRM and business platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white">{platform.name}</CardTitle>
                  <CardDescription className="text-slate-400">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Automation Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive automation solutions to streamline your business processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-400">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how CRM automation transforms businesses across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">E-commerce Store</CardTitle>
                <CardDescription className="text-slate-400">
                  Automated customer journey from first visit to repeat purchase
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Abandoned cart recovery sequences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Post-purchase follow-up automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Customer segmentation & targeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Review request automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Service Business</CardTitle>
                <CardDescription className="text-slate-400">
                  Streamlined lead management and client communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Lead qualification workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Appointment booking automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Client onboarding sequences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Follow-up and retention campaigns</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your CRM?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your business processes and create custom automation workflows that save time and increase
            efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Start Your Automation Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/projects">View Automation Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
