import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise Network Security Audit",
      description: "Comprehensive security assessment and hardening for a 500+ employee company",
      category: "Cybersecurity",
      icon: Shield,
      tools: ["Nmap", "Wireshark", "Metasploit", "Burp Suite"],
      features: [
        "Network vulnerability assessment",
        "Penetration testing report",
        "Security policy recommendations",
        "Employee training materials",
      ],
      demoType: "Case Study",
    },
    {
      title: "GoHighLevel CRM Automation",
      description: "Complete lead nurturing and sales pipeline automation for real estate agency",
      category: "CRM Automation",
      icon: Zap,
      tools: ["GoHighLevel", "Zapier", "Twilio", "Google Sheets"],
      features: [
        "Automated lead routing",
        "SMS & email sequences",
        "Appointment booking system",
        "Performance dashboard",
      ],
      demoType: "Live Demo",
    },
    {
      title: "Meta Ads Campaign Optimization",
      description: "Facebook and Instagram ad campaigns generating 4.5x ROAS for e-commerce client",
      category: "Marketing",
      icon: Target,
      tools: ["Facebook Ads Manager", "Google Analytics", "Hotjar", "Canva"],
      features: [
        "Audience research & targeting",
        "Creative testing & optimization",
        "Conversion tracking setup",
        "Performance reporting",
      ],
      demoType: "Results Video",
    },
    {
      title: "HubSpot Integration & Automation",
      description: "Multi-platform integration connecting HubSpot with Shopify and customer support tools",
      category: "CRM Automation",
      icon: Zap,
      tools: ["HubSpot", "Shopify", "Zendesk", "Make.com"],
      features: [
        "E-commerce data sync",
        "Customer journey mapping",
        "Support ticket automation",
        "Revenue attribution",
      ],
      demoType: "Walkthrough",
    },
    {
      title: "Linux Server Hardening",
      description: "Security configuration and monitoring setup for cloud-based application servers",
      category: "Cybersecurity",
      icon: Shield,
      tools: ["Ubuntu Server", "UFW", "Fail2ban", "Nginx"],
      features: ["SSH key authentication", "Firewall configuration", "Intrusion detection", "Automated backups"],
      demoType: "Technical Demo",
    },
    {
      title: "Lead Generation Funnel",
      description: "High-converting landing page and email sequence generating 200+ leads/month",
      category: "Marketing",
      icon: Target,
      tools: ["WordPress", "Elementor", "Mailchimp", "Google Ads"],
      features: ["Landing page optimization", "Lead magnet creation", "Email automation", "A/B testing results"],
      demoType: "Performance Report",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return "bg-red-600/20 text-red-400 border-red-600/30"
      case "CRM Automation":
        return "bg-blue-600/20 text-blue-400 border-blue-600/30"
      case "Marketing":
        return "bg-green-600/20 text-green-400 border-green-600/30"
      default:
        return "bg-slate-600/20 text-slate-400 border-slate-600/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Featured Projects</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Project Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore real-world projects showcasing cybersecurity implementations, CRM automations, and marketing
              campaigns that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <project.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                  </div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-slate-400">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      {project.demoType}
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Categories</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Diverse expertise across cybersecurity, automation, and digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <Shield className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cybersecurity Projects</h3>
                <p className="text-slate-400 mb-4">Network security, penetration testing, and security audits</p>
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30">2 Projects</Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">CRM Automation</h3>
                <p className="text-slate-400 mb-4">Workflow automation and CRM integrations</p>
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">2 Projects</Badge>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <Target className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Marketing Campaigns</h3>
                <p className="text-slate-400 mb-4">Ad campaigns and lead generation funnels</p>
                <Badge className="bg-green-600/20 text-green-400 border-green-600/30">2 Projects</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to See More Details?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            These projects represent just a sample of my work. Let's discuss how I can create similar results for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Discuss Your Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/testimonials">Read Client Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
