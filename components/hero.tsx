import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/Western Pharma coverphoto.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trusted Pharmaceutical Distribution Across Bangladesh
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Western Pharma is a trusted medicine wholesaler and commission agent supplying pharmaceutical products to retailers, distributors and healthcare businesses with reliability, integrity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="#contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20 px-8 font-semibold">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
