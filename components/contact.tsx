'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const emptyForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback({ type: null, text: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to send your message right now.')
      }

      setFormData(emptyForm)
      setFeedback({ type: 'success', text: 'Thank you for your inquiry. We will contact you shortly.' })
    } catch (error) {
      setFeedback({
        type: 'error',
        text: error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Address</h4>
                <p className="text-foreground/70 leading-relaxed">
                  S-Rahaman Plaza<br />
                  11/2, Haybathnagar Dayan<br />
                  Shabe Lane<br />
                  Babu Bazar<br />
                  Dhaka-1100<br />
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Phone</h4>
                <a href="tel:01711980987" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                  01711-980987
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Email</h4>
                <a href="mailto:info@westernpharma.net" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
                  info@westernpharma.net
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                <p className="text-foreground/70">
                  Saturday to Thursday<br />
                  9:00 AM to 6:00 PM<br />
                  <span className="text-muted-foreground">Friday Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border-2 border-gray-300 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-secondary px-4 py-2 font-semibold text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {feedback.text ? (
                <p className={`text-sm ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary mb-6">Find Us On The Map</h3>
          <div className="w-full h-96 rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d228.31349248208357!2d90.40360175999251!3d23.711126957831357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ss%20rahaman%20plaza!5e0!3m2!1sen!2sbd!4v1782965601970!5m2!1sen!2sbd"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
