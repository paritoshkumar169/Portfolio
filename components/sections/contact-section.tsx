import { Mail, Phone, MapPin, Github } from "lucide-react"
import { forwardRef } from 'react'

export const ContactSection = forwardRef<HTMLHeadingElement>((props, ref) => {
  return (
    <div className="space-y-4">
      <h2 ref={ref} className="text-xl font-bold text-primary">Contact</h2>

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:paritoshkumar169@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            paritoshkumar169@gmail.com
          </a>
          <a href="tel:+918851177211" className="flex items-center text-sm hover:text-primary transition-colors">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            +91 8851177211
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Manipal, Karnataka
          </div>
          <a
            href="https://github.com/paritoshkumar169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/paritoshkumar169
          </a>
        </div>
      </div>
    </div>
  )
})
