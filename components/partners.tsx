const partners = [
  { name: 'Partner 1', image: '/partner1.png' },
  { name: 'Partner 2', image: '/partner2.png' },
  { name: 'Partner 3', image: '/partner3.png' },
  { name: 'Partner 4', image: '/partner4.png' },
]

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted Pharmaceutical Partners</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Working with leading pharmaceutical manufacturers and distributors across the region
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg p-6 border-2 border-gray-300 flex items-center justify-center min-h-36 hover:border-accent hover:shadow-lg transition-all duration-300 group grayscale hover:grayscale-0"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-20 w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg border-2 border-accent shadow-sm">
          <p className="text-center text-foreground">
            We collaborate with 100+ pharmaceutical companies and business partners. Ready to become a partner?{' '}
            <a href="#contact" className="text-primary font-semibold hover:text-secondary transition-colors">
              Contact us today
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
