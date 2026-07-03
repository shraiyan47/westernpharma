import { Package, Users, Truck, Handshake, BarChart3, Headphones } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Wholesale Medicine Supply',
    description: 'Reliable bulk medicine distribution across Bangladesh with consistent quality and competitive pricing.',
  },
  {
    icon: Users,
    title: 'Commission Agent',
    description: 'Connecting pharmaceutical manufacturers with distributors and retailers for mutually beneficial partnerships.',
  },
  {
    icon: Truck,
    title: 'Pharmaceutical Distribution',
    description: 'Efficient logistics and timely delivery support ensuring medicines reach their destinations safely.',
  },
  {
    icon: Handshake,
    title: 'Business Partnerships',
    description: 'Long-term partnerships with pharmaceutical companies and wholesalers built on trust and reliability.',
  },
  {
    icon: BarChart3,
    title: 'Inventory Management',
    description: 'Reliable product availability and coordinated supply chain management to meet all demands.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Responsive assistance and professional support for all wholesale clients and business partners.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Comprehensive pharmaceutical distribution solutions tailored to meet the needs of our partners
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-accent transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="text-secondary group-hover:text-secondary w-7 h-7 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
