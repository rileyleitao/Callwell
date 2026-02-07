<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          AI Answering Service for Contractors
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss a construction lead again. Our AI phone answering service for general contractors and construction companies handles calls 24/7, books consultations, and captures project inquiries while you're on the job site.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Built for contractors</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Construction Call Answering</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Your AI receptionist handles project inquiries, books consultations, and captures leads while you're managing job sites. From remodels to new construction, never miss an opportunity.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Project Inquiry Handling</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Capture details about remodels, additions, new builds, and commercial projects.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">24/7 Consultation Booking</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Book estimate appointments and site visits around the clock.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Job Site Flexibility</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Handle calls while you're managing crews and meeting deadlines.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Multi-Trade Support</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Understands general contracting, remodeling, additions, and specialty trades.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Lead Qualification</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Collects project scope, budget range, and timeline expectations.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Appointment Confirmations</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Automated reminders ensure clients are ready for your consultation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Why Contractors Choose Callwell
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="text-center">
            <PhoneIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Capture Every Lead</h3>
            <p class="text-sm sm:text-base text-gray-600">Don't lose projects to voicemail while you're on the job site.</p>
          </div>
          <div class="text-center">
            <ClockIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Always Available</h3>
            <p class="text-sm sm:text-base text-gray-600">Your AI receptionist works 24/7, including weekends and holidays.</p>
          </div>
          <div class="text-center">
            <CurrencyDollarIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Win More Projects</h3>
            <p class="text-sm sm:text-base text-gray-600">First response wins—be there when clients call.</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Never Miss a Construction Lead?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how Callwell can help your contracting business capture more leads and book more consultations.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Construction Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
          Contact Sales
        </a>
      </section>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { CheckIcon, PhoneIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
