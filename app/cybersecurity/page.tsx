import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, Server, Cloud, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CybersecurityPage() {
  const services = [
    {
      icon: Lock,
      title: "Network Hardening & Firewall Setup",
      description: "Secure your network infrastructure with proper firewall configuration and access controls.",
    },
    {
      icon: Eye,
      title: "Ethical Hacking Basics & Risk Assessments",
      description: "Identify vulnerabilities before attackers do with comprehensive security assessments.",
    },
    {
      icon: Users,
      title: "Cybersecurity Awareness Training",
      description: "Train your employees to recognize and prevent common cyber threats and social engineering attacks.",
    },
    {
      icon: Server,
      title: "Linux Server Security & SSH Configuration",
      description: "Harden your Linux servers with secure SSH configurations and access management.",
    },
    {
      icon: Cloud,
      title: "Cloud Security Fundamentals",
      description: "Implement security best practices for AWS, GCP, and other cloud platforms.",
    },
  ]

  const tools = ["Wireshark", "Metasploit", "Nmap", "Burp Suite", "Kali Linux", "OWASP ZAP", "Nessus", "OpenVAS"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Cybersecurity Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Secure Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Helping businesses secure their digital presence with proactive, foundational cybersecurity strategies.
              Protect your assets, train your team, and stay ahead of evolving threats.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cybersecurity Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your business needs
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

      {/* Tools & Certifications */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools & Technologies</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry-standard tools and technologies I use to secure your systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Security Tools Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose My Services?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Proactive Approach</h4>
                    <p className="text-slate-400">Identify and fix vulnerabilities before they become problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Team Training</h4>
                    <p className="text-slate-400">Educate your team to be your first line of defense</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Practical Security</h4>
                    <p className="text-slate-400">Implement security measures that don't hinder productivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your cybersecurity needs and create a comprehensive security strategy for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Schedule a Security Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/projects">View Security Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
