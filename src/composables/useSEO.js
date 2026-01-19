import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO() {
  const route = useRoute()

  const injectSchema = () => {
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"]')
    if (existingSchema) {
      existingSchema.remove()
    }

    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://callwell.io/#organization',
          name: 'Callwell',
          url: 'https://callwell.io',
          logo: 'https://callwell.io/logo.svg',
          description: 'AI office assistant that answers calls and books appointments 24/7 for service businesses',
          sameAs: []
        },
        {
          '@type': 'WebSite',
          '@id': 'https://callwell.io/#website',
          url: 'https://callwell.io',
          name: 'Callwell',
          description: 'AI office assistant that answers calls and books appointments 24/7',
          publisher: {
            '@id': 'https://callwell.io/#organization'
          }
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://callwell.io/#software',
          name: 'Callwell',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'AI-powered virtual receptionist that answers calls and books appointments automatically for service businesses',
          offers: {
            '@type': 'Offer',
            price: '350',
            priceCurrency: 'CAD',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            ratingCount: '1',
            bestRating: '5',
            worstRating: '1'
          },
          featureList: [
            '24/7 AI Call Answering',
            'Automated Appointment Booking',
            'Calendar Integration',
            'Emergency Call Routing',
            'Custom AI Training',
            'ServiceTitan Integration',
            'Jobber Integration'
          ],
          screenshot: 'https://callwell.io/PlumbingHeroimage.png',
          softwareVersion: '1.0',
          author: {
            '@id': 'https://callwell.io/#organization'
          }
        }
      ]
    }

    // Add Service schema for homepage
    if (route.path === '/') {
      baseSchema['@graph'].push({
        '@type': 'Service',
        '@id': 'https://callwell.io/#service',
        serviceType: 'AI Office Assistant',
        provider: {
          '@id': 'https://callwell.io/#organization'
        },
        areaServed: 'Worldwide',
        description: 'AI-powered office assistant that answers customer calls and enables 24/7 appointment booking for service businesses',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'CAD',
          price: '350',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'CAD',
            price: '350',
            unitText: 'MONTH'
          }
        }
      })
    }

    // Add WebPage schema for all pages
    baseSchema['@graph'].push({
      '@type': 'WebPage',
      '@id': `https://callwell.io${route.path}#webpage`,
      url: `https://callwell.io${route.path}`,
      name: route.meta?.title || 'Callwell - AI Office Assistant',
      description: route.meta?.description || 'Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.',
      isPartOf: {
        '@id': 'https://callwell.io/#website'
      },
      about: {
        '@id': 'https://callwell.io/#organization'
      }
    })

    // Inject schema into head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(baseSchema, null, 2)
    document.head.appendChild(script)
  }

  onMounted(() => {
    injectSchema()
  })

  watch(() => route.path, () => {
    injectSchema()
  })
}
