import Link from "next/link"
import { Linkedin, Github, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Akash Kumar Singh</h3>
            <p className="text-slate-400 mb-4 text-lg font-medium">Automate Smart. Secure Smarter.</p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/akash-singh3"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/akashsingh"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://akashsingh.me"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="/cybersecurity" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Cybersecurity
              </Link>
              <Link href="/crm-automation" className="block text-slate-400 hover:text-blue-400 transition-colors">
                CRM Automation
              </Link>
              <Link href="/marketing-services" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Marketing Services
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/projects" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="/testimonials" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="block text-slate-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Akash Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
