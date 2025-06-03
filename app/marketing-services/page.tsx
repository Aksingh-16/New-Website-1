import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Users, BarChart3, Eye, CheckCircle, ArrowRight, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function MarketingServicesPage() {
  const services = [
    {
      icon: Target,
      title: "Meta Ads (Facebook + Instagram)",
      description: "Complete campaign setup, targeting optimization, and performance management for maximum ROI.",
      features: [
        "Campaign setup & optimization",
        "Advanced audience targeting",
        "Creative testing & optimization",
        "Performance monitoring & reporting",
      ],
    },
    {
      icon: TrendingUp,
      title: "Lead Funnel Design + Integration",
      description: "Design high-converting funnels that capture leads and guide them through your sales process.",
      features: ["Landing page optimization", "Lead magnet creation", "Funnel flow design", "CRM integration"],
    },
    {
      icon: Eye,
      title: "Custom Thank You Pages & Tracking",
      description: "Create engaging post-conversion experiences with proper tracking and analytics setup.",
      features: [
        "Thank you page design",
        "Conversion tracking setup",
        "Google Analytics integration",
        "Custom event tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "A/B Testing for Ads",
      description: "Systematic testing of ad creatives, copy, and targeting to improve campaign performance.",
      features: ["Creative split testing", "Audience testing", "Copy optimization", "Performance analysis"],
    },
    {
      icon: Users,
      title: "Retargeting Pixel Setup",
      description: "Implement advanced retargeting strategies to re-engage website visitors and previous customers.",
      features: [
        "Facebook Pixel setup",
        "Custom audience creation",
        "Retargeting campaign setup",
        "Lookalike audience development",
      ],
    },
  ]

  const results = [
    {
      metric: "Average ROAS",
      value: "4.2x",
      description: "Return on ad spend across client campaigns",
    },
    {
      metric: "Lead Cost Reduction",
      value: "35%",
      description: "Average decrease in cost per lead",
    },
    {
      metric: "Conversion Rate",
      value: "12.8%",
      description: "Average funnel conversion rate",
    },
    {
      metric: "Client Retention",
      value: "95%",
      description: "Clients who continue working with me",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Digital Marketing Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart, Data-Backed{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Ad Campaigns
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Run smart, data-backed ad campaigns with automated lead capture and follow-up systems. Experience running
              real client campaigns with conversion-focused results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Marketing Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real metrics from actual client campaigns showing consistent performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{result.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{result.metric}</div>
                  <div className="text-sm text-slate-400">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Platform Expertise</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specialized knowledge in the most effective advertising platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Facebook className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Facebook Ads</CardTitle>
                    <CardDescription className="text-slate-400">Advanced targeting and optimization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Custom audience creation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Lookalike audience optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Campaign budget optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Advanced retargeting strategies</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Instagram Ads</CardTitle>
                    <CardDescription className="text-slate-400">Visual storytelling and engagement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Story and feed ad optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Reels advertising strategies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Shopping ads integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">Influencer collaboration campaigns</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Process</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A systematic approach to creating and optimizing successful ad campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <CardTitle className="text-white">Strategy & Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Analyze your target audience, competitors, and market to develop a data-driven advertising strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <CardTitle className="text-white">Campaign Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Create optimized campaigns with proper targeting, compelling creatives, and conversion tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <CardTitle className="text-white">Optimize & Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Continuously test and optimize campaigns, then scale successful elements for maximum ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your Marketing?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create data-driven ad campaigns that generate qualified leads and drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/projects">View Campaign Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
