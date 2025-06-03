import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Operations Manager",
      company: "TechCorp Solutions",
      rating: 5,
      text: "Akash transformed our workflow automation completely. Our team saves 15+ hours per week now. His attention to security details is exceptional, and the GoHighLevel setup he created has increased our lead conversion by 40%.",
      service: "CRM Automation",
      result: "40% increase in lead conversion",
    },
    {
      name: "Mike Chen",
      title: "Founder",
      company: "StartupXYZ",
      rating: 5,
      text: "Professional, reliable, and incredibly knowledgeable. Akash delivered our WordPress site ahead of schedule with amazing performance optimization. The security audit he performed revealed vulnerabilities we never knew existed.",
      service: "Cybersecurity",
      result: "100% security compliance achieved",
    },
    {
      name: "Lisa Rodriguez",
      title: "IT Director",
      company: "SecureFinance",
      rating: 5,
      text: "His cybersecurity audit revealed vulnerabilities we never knew existed. The security training for our team was comprehensive and practical. Our security posture improved dramatically, and we haven't had a single incident since.",
      service: "Security Training",
      result: "Zero security incidents post-implementation",
    },
    {
      name: "David Thompson",
      title: "Marketing Director",
      company: "GrowthAgency",
      rating: 5,
      text: "The Meta ads campaigns Akash set up for us generated a 4.2x ROAS in the first month. His funnel optimization and retargeting strategies are top-notch. We've scaled our ad spend 3x with confidence.",
      service: "Meta Ads",
      result: "4.2x ROAS achieved",
    },
    {
      name: "Jennifer Walsh",
      title: "CEO",
      company: "E-commerce Plus",
      rating: 5,
      text: "Akash integrated our Shopify store with HubSpot seamlessly. The automated customer journey he created increased our repeat purchase rate by 35%. The abandoned cart recovery alone pays for his services.",
      service: "E-commerce Automation",
      result: "35% increase in repeat purchases",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-4">Client Testimonials</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Clients Say
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real feedback from businesses that have transformed their operations with my cybersecurity, automation,
              and marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-slate-400 text-sm">{testimonial.title}</p>
                        <p className="text-slate-400 text-sm">{testimonial.company}</p>
                      </div>
                      <Badge variant="outline" className="border-blue-600/30 text-blue-400 text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-sm font-semibold">Result:</p>
                      <p className="text-slate-300 text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Metrics</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Measurable results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-lg font-semibold text-white mb-2">Client Satisfaction</div>
                <div className="text-sm text-slate-400">Based on project completion surveys</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-green-400 mb-2">4.2x</div>
                <div className="text-lg font-semibold text-white mb-2">Average ROAS</div>
                <div className="text-sm text-slate-400">Return on ad spend for marketing campaigns</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-lg font-semibold text-white mb-2">Hours Saved</div>
                <div className="text-sm text-slate-400">Average weekly time savings per client</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-red-400 mb-2">0</div>
                <div className="text-lg font-semibold text-white mb-2">Security Incidents</div>
                <div className="text-sm text-slate-400">Post-implementation for secured clients</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Be My Next Success Story?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that have transformed their operations with my expertise in
            cybersecurity, automation, and digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/contact">
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
