<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Pricing Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Pricing
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
          Choose the perfect plan for your service business. All plans include 24/7 AI call answering and automated appointment booking.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
        <!-- Standard Plan -->
        <div class="border-2 border-blue-500 rounded-lg p-6 sm:p-8 relative shadow-lg">
          <div class="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">Most Popular</span>
          </div>
          <div class="mb-4 sm:mb-6">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Standard</h3>
            <p class="text-gray-600 text-sm mb-3 sm:mb-4">Perfect for service businesses</p>
            <div class="flex items-baseline">
              <span class="text-3xl sm:text-4xl font-bold text-gray-900">$350</span>
              <span class="text-gray-600 ml-2 text-sm sm:text-base">/month</span>
            </div>
            <p class="text-xs sm:text-sm text-gray-500 mt-2">CAD</p>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors mb-4 sm:mb-6">
            Get started
          </button>
          <ul class="space-y-2 sm:space-y-3">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">24/7 AI call answering</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Automated appointment booking</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Waitlist management</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Priority support</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Advanced analytics</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Custom integrations</span>
            </li>
          </ul>
        </div>

        <!-- Enterprise Plan -->
        <div class="border-2 border-gray-200 rounded-lg p-6 sm:p-8 hover:border-blue-500 transition-colors">
          <div class="mb-4 sm:mb-6">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p class="text-gray-600 text-sm mb-3 sm:mb-4">For large service businesses</p>
            <div class="flex items-baseline">
              <span class="text-3xl sm:text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <p class="text-xs sm:text-sm text-gray-500 mt-2">Contact us for pricing</p>
          </div>
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" class="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors mb-4 sm:mb-6 inline-block text-center">
            Contact sales
          </a>
          <ul class="space-y-2 sm:space-y-3">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Unlimited calls</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Everything in Pro</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Dedicated account manager</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">Custom AI training</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">SLA guarantee</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">On-premise deployment option</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Frequently asked questions</h2>
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

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'

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
</script>
