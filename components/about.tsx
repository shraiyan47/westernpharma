import { Package } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Western Pharma</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border-2 border-accent">
              <img 
                src="/Western Pharma Services.png" 
                alt="Pharmaceutical warehouse and distribution center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Serving Bangladesh Since 1980</h3>
              <p className="text-foreground/80 leading-relaxed">
                Western Pharma has been serving Bangladesh&apos;s pharmaceutical distribution sector for over four decades. The company specializes in wholesale medicine supply and acts as a commission agent for various pharmaceutical manufacturers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is to ensure reliable, efficient and ethical medicine distribution while building long-term business relationships with our partners. We are committed to maintaining the highest standards of quality, integrity, and customer service.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <p className="text-foreground font-semibold">
                ✓ Trusted by 100+ business partners
              </p>
              <p className="text-foreground font-semibold mt-2">
                ✓ 40+ years of pharmaceutical expertise
              </p>
              <p className="text-foreground font-semibold mt-2">
                ✓ Reliable supply chain management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
