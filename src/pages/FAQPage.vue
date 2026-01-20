<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Frequently Asked Questions
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about Callwell and how it can help your service business.
        </p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 sm:space-y-6">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg p-4 sm:p-6">
            <button
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center text-left"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
              <ChevronDownIcon
                class="w-5 h-5 text-gray-500 transform transition-transform"
                :class="{ 'rotate-180': openFaqs[index] }"
              />
            </button>
            <div
              v-show="openFaqs[index]"
              class="mt-4 text-gray-600"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Still have questions?</h2>
      <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
        Our team is here to help. Schedule a call to learn more about how Callwell can work for your business.
      </p>
      <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('FAQ Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
        Contact Sales
      </a>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'

const openFaqs = ref({})

const toggleFaq = (index) => {
  openFaqs.value[index] = !openFaqs.value[index]
}

const faqs = [
  {
    question: 'How does Callwell handle calls?',
    answer: 'Callwell uses advanced AI to answer incoming calls 24/7. It speaks naturally with customers, understands their needs, and books appointments directly into your schedule. The AI can also reschedule or cancel appointments and manage waitlists automatically.'
  },
  {
    question: 'Can I customize the AI responses?',
    answer: 'Yes! Both Standard and Enterprise plans include custom AI training to match your business voice and brand. You can set booking rules, availability, and customize how the AI interacts with your customers.'
  },
  {
    question: 'What happens if I exceed my call limit?',
    answer: 'If you exceed your monthly call limit, we\'ll notify you and you can upgrade to Enterprise or purchase additional call credits. We never want you to miss a call, so we\'ll work with you to find the right solution.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most businesses are up and running within 24-48 hours. Simply connect your phone number, set your booking rules and availability, and you\'re ready to start answering calls automatically.'
  },
  {
    question: 'Do I need any special hardware?',
    answer: 'No! Callwell works with your existing phone number. No hardware, no call centers, and no disruption to your current workflow. Everything is cloud-based and easy to set up.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Standard plans include priority support with faster response times. Enterprise plans include a dedicated account manager and 24/7 phone support.'
  }
]

// Inject FAQ Schema for SEO
onMounted(() => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.id = 'faq-schema'
  script.textContent = JSON.stringify(faqSchema)
  document.head.appendChild(script)
})

onUnmounted(() => {
  const existingSchema = document.getElementById('faq-schema')
  if (existingSchema) {
    existingSchema.remove()
  }
})
</script>
