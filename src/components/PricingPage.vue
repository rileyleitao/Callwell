<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />
    
    <!-- Pricing Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Simple no-tricks pricing
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Get a custom AI receptionist fully trained on your business guidelines and workflows. Callwell answers calls, routes emergencies, and books appointments 24/7.
        </p>
      </div>

      <!-- Inspiration-Style Split Pricing Box -->
      <div class="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white shadow-sm lg:flex lg:items-stretch">
        <!-- Left Side: Content & Features -->
        <div class="p-8 sm:p-10 lg:flex-1">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Automated Office Platform</h3>
          <p class="text-base text-gray-600 mb-6">
            Everything you need to automate your front desk, book appointments automatically, and handle priority inquiries 24/7. Fully trained on your terminology and guidelines.
          </p>
          <div class="flex items-center gap-x-4 mb-6">
            <h4 class="flex-none text-sm font-semibold leading-6 text-blue-600">What's included</h4>
            <div class="h-px flex-auto bg-gray-200"></div>
          </div>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>24/7 natural-sounding AI call answering</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Automated booking & rescheduling</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Live calendar synchronisation</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Waitlist & cancellation automation</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Custom brand voice & terms training</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Software & CRM integrations</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Priority emergency call routing</span>
            </li>
            <li class="flex gap-x-3">
              <CheckIcon class="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
              <span>Advanced dashboard & call analytics</span>
            </li>
          </ul>
        </div>

        <!-- Right Side: CTA box (gray bg) -->
        <div class="p-2 lg:w-96 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-stretch">
          <div class="h-full rounded-2xl bg-gray-50/70 border border-gray-100/50 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div class="mx-auto max-w-xs px-8">
              <p class="text-sm font-semibold text-gray-600">Tailored to your volume</p>
              <p class="mt-4 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-extrabold tracking-tight text-gray-900">Custom</span>
              </p>
              <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Pricing Page - Inspiration')" class="mt-8 block w-full rounded-md bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors cursor-pointer">
                Contact Sales
              </a>
              <p class="mt-6 text-xs leading-5 text-gray-500">
                Get set up with custom booking rules in 24-48 hours
              </p>
            </div>
          </div>
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
    answer: 'Yes! We provide custom AI training to match your business voice, brand, and clinic terminology. You can set booking rules, availability, and customize how the AI interacts with your customers or patients.'
  },
  {
    question: 'How does call volume pricing work?',
    answer: 'Our tailored plan is modeled around your actual business needs. We will work with you to analyze your typical volume and design custom pricing so you only pay for what you actually use.'
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
    answer: 'We provide comprehensive, dedicated support and hands-on setup setup assistance. We will walk you through setting up call routes, training the AI, connecting your existing calendars, and offer priority ongoing support.'
  }
]
</script>
