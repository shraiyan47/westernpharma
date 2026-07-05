export default function Head() {
  return (
    <>
      <link rel="canonical" href="https://www.westernpharma.com" />
      <meta name="theme-color" content="#ffffff" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Western Pharma',
            url: 'https://www.westernpharma.com',
            logo: 'https://www.westernpharma.com/icon.svg',
            description:
              'Western Pharma is a trusted pharmaceutical distributor and commission agent in Bangladesh, serving wholesalers, retailers, and healthcare businesses with reliable medicine supply and ethical logistics.',
            sameAs: [
              'https://www.facebook.com/westernpharma',
              'https://www.linkedin.com/company/westernpharma',
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availability: 'Mon-Fri 09:00-18:00',
                areaServed: 'BD',
              },
            ],
          }),
        }}
      />
    </>
  )
}
