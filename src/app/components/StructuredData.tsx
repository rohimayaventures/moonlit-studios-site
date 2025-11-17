/**
 * JSON-LD Structured Data for SEO
 * Helps search engines understand business information
 */

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'ProfessionalService' | 'Service';
  data?: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Moonlit Studios',
          alternateName: 'The Nurse Who Codes',
          url: 'https://www.moonlitstudios.com',
          logo: 'https://www.moonlitstudios.com/square-logo.png',
          description:
            'Award-winning full-stack development, AI innovation, and healthcare tech solutions. 15+ years healthcare ops turned tech mastery.',
          founder: {
            '@type': 'Person',
            name: 'Kai',
            jobTitle: 'Founder & Lead Developer',
            description: 'The Nurse Who Codes - Full-stack developer with 15+ years healthcare operations experience',
          },
          sameAs: [
            'https://github.com/rohimayaventures',
            'https://linkedin.com/company/moonlit-studios',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: 'hello@moonlitstudios.com',
            availableLanguage: 'English',
          },
          areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
          },
          ...data,
        };

      case 'LocalBusiness':
      case 'ProfessionalService':
        return {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': 'https://www.moonlitstudios.com/#business',
          name: 'Moonlit Studios',
          alternateName: 'The Nurse Who Codes',
          image: 'https://www.moonlitstudios.com/square-logo.png',
          url: 'https://www.moonlitstudios.com',
          telephone: '',
          email: 'hello@moonlitstudios.com',
          priceRange: '$$$',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '',
            longitude: '',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
          sameAs: [
            'https://github.com/rohimayaventures',
            'https://linkedin.com/company/moonlit-studios',
          ],
          description:
            'Full-stack development, AI innovation, and healthcare technology solutions. Custom web applications, AI chatbots, voice AI, healthcare UX, and creative design services.',
          slogan: 'Where Dreams Surface and Ideas Flow',
          knowsAbout: [
            'Full-Stack Web Development',
            'AI Development',
            'Healthcare Technology',
            'React & Next.js',
            'TypeScript',
            'RAG Chatbots',
            'Voice AI',
            'HIPAA Compliance',
            'Clinical Workflow Design',
            'Brand Design',
            'Ghostwriting',
          ],
          serviceArea: {
            '@type': 'Place',
            name: 'Worldwide',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '3',
          },
          ...data,
        };

      case 'Service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Web Development and AI Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Moonlit Studios',
          },
          areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Small Business Websites',
                  description: 'Beautiful, responsive websites for small businesses starting at $1,500',
                  category: 'Web Development',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Creative Design & Development',
                  description: 'Branding, UI/UX design, and custom web applications',
                  category: 'Design & Development',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Healthcare Technology Development',
                  description: 'HIPAA-compliant healthcare platforms and clinical workflow tools',
                  category: 'Healthcare Tech',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Innovation',
                  description: 'RAG chatbots, voice AI, computer vision, and custom AI systems',
                  category: 'Artificial Intelligence',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Consulting',
                  description: 'Technical consulting, product strategy, and development guidance',
                  category: 'Consulting',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Ghostwriting & Author Services',
                  description: 'Book writing, cookbook development, and author platforms',
                  category: 'Writing Services',
                },
              },
            ],
          },
          ...data,
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
