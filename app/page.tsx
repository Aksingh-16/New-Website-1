import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Users,
  TrendingUp,
  Lock,
  Bot,
  BarChart3,
  Globe,
  Workflow,
  Brain,
  Eye,
  Server,
  Mail,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const whyWorkWithMe = [
    {
      title: "Unique Blend of Expertise",
      description:
        "Combining automation, cybersecurity, and marketing to build systems that scale securely and efficiently.",
    },
    {
      title: "Hands-On Experience",
      description:
        "Real-world experience with GoHighLevel, HubSpot, WordPress, Meta Ads, and enterprise security tools.",
    },
    {
      title: "Continuous Learning",
      description:
        "Currently completing a 100-Day Cybersecurity Challenge to stay ahead of evolving threats and technologies.",
    },
  ]

  const tools = [
    { name: "GoHighLevel", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Meta Ads", category: "Marketing" },
    { name: "Zapier", category: "Automation" },
    { name: "WordPress", category: "Development" },
    { name: "UiPath", category: "Automation" },
    { name: "Nmap", category: "Security" },
    { name: "Metasploit", category: "Security" },
    { name: "Notion", category: "Productivity" },
    { name: "Make.com", category: "Automation" },
    { name: "Wireshark", category: "Security" },
    { name: "Burp Suite", category: "Security" },
  ]

  const clientOutcomes = [
    {
      metric: "15+ Hours",
      description: "Saved per week through automation for a client team",
      icon: Zap,
    },
    {
      metric: "Critical Vulnerabilities",
      description: "Exposed in cybersecurity audit that prevented potential breaches",
      icon: Shield,
    },
    {
      metric: "3.5x ROI",
      description: "Achieved on Meta campaigns for e-commerce test project",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                  Automation & Cybersecurity Expert
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  I automate workflows and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    secure digital ecosystems
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  With 1+ years of experience, I help businesses implement smart automations, secure systems, and run
                  effective digital campaigns that drive real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/contact">
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  asChild
                >
                  <Link href="https://linkedin.com/in/akash-singh3" target="_blank">
                    View My Cybersecurity Challenge
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-600/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">100-Day Cybersecurity Challenge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">CRM Automation Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-slate-300">Digital Marketing Expert</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Work With Me</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  I bring a unique combination of technical expertise and business understanding to every project,
                  ensuring your systems are not just functional, but strategically aligned with your goals.
                </p>
              </div>

              <div className="space-y-6">
                {whyWorkWithMe.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-600/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Workflow className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Automation</h4>
                    <p className="text-slate-400 text-sm">Streamlined workflows</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Security</h4>
                    <p className="text-slate-400 text-sm">Protected systems</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Marketing</h4>
                    <p className="text-slate-400 text-sm">Targeted campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Strategy</h4>
                    <p className="text-slate-400 text-sm">Data-driven decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Service Offerings</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end solutions across cybersecurity, automation, and digital marketing
            </p>
          </div>

          <div className="space-y-12">
            {/* Cybersecurity */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-600/10 to-red-400/10 border-b border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Cybersecurity</CardTitle>
                    <CardDescription className="text-slate-400">
                      Comprehensive security solutions to protect your digital assets
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-red-400" />
                      <h4 className="text-white font-semibold">Network Hardening</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Linux server security</li>
                      <li>• Cloud infrastructure (AWS, GCP)</li>
                      <li>• Local network protection</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-red-400" />
                      <h4 className="text-white font-semibold">Security Training</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Employee awareness programs</li>
                      <li>• Phishing simulation</li>
                      <li>• Security best practices</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Eye className="h-5 w-5 text-red-400" />
                      <h4 className="text-white font-semibold">Ethical Hacking</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• OWASP vulnerability testing</li>
                      <li>• Network scanning (Nmap)</li>
                      <li>• Traffic analysis (Wireshark)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CRM Automation */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600/10 to-blue-400/10 border-b border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">CRM Automation</CardTitle>
                    <CardDescription className="text-slate-400">
                      Intelligent workflow automation across all major CRM platforms
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Workflow className="h-5 w-5 text-blue-400" />
                      <h4 className="text-white font-semibold">Platform Expertise</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• GoHighLevel workflow design</li>
                      <li>• Zoho CRM customization</li>
                      <li>• HubSpot automation setup</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-400" />
                      <h4 className="text-white font-semibold">Integration Services</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Zapier + Make.com connections</li>
                      <li>• API integrations</li>
                      <li>• Data synchronization</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 text-blue-400" />
                      <h4 className="text-white font-semibold">AI Assistance</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Chatbot setup & maintenance</li>
                      <li>• Lead handling automation</li>
                      <li>• Follow-up sequences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Services */}
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600/10 to-green-400/10 border-b border-slate-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Marketing Services</CardTitle>
                    <CardDescription className="text-slate-400">
                      Data-driven campaigns that generate qualified leads and drive growth
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-green-400" />
                      <h4 className="text-white font-semibold">Meta Ad Management</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Facebook & Instagram campaigns</li>
                      <li>• Advanced audience targeting</li>
                      <li>• Campaign optimization</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <h4 className="text-white font-semibold">Funnel & Pixel Setup</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• Lead funnel design</li>
                      <li>• Conversion tracking</li>
                      <li>• Retargeting pixel setup</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-green-400" />
                      <h4 className="text-white font-semibold">Optimization</h4>
                    </div>
                    <ul className="space-y-2 text-slate-400">
                      <li>• A/B testing for conversions</li>
                      <li>• Performance analytics</li>
                      <li>• ROI optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools I Work With</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Industry-leading platforms and technologies for maximum efficiency and results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Server className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                  <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                    {tool.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Outcomes */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results That Speak</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real outcomes from recent projects that demonstrate measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientOutcomes.map((outcome, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <outcome.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{outcome.metric}</div>
                  <p className="text-slate-300 leading-relaxed">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Strip */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-y border-blue-600/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your workflows and protect your data?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's build your digital advantage together with smart automation, robust security, and effective marketing
            strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Book a Discovery Call
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
