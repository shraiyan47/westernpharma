import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: '40+ Years Experience',
    description: 'Decades of proven expertise in pharmaceutical distribution and supply chain management',
  },
  {
    title: 'Trusted Distribution Network',
    description: 'Established relationships with retailers, distributors, and healthcare businesses nationwide',
  },
  {
    title: 'Reliable Supply Chain',
    description: 'Consistent product availability and efficient logistics ensuring timely deliveries',
  },
  {
    title: 'Professional Partnerships',
    description: 'Strong collaborations with leading pharmaceutical manufacturers and industry partners',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Western Pharma</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Experience the difference of working with a trusted pharmaceutical partner
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-secondary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
