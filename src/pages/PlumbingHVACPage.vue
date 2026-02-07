<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          AI Answering Service for Plumbing & HVAC
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss an emergency plumbing or HVAC call. Our AI phone answering service for plumbing and heating & cooling companies handles calls 24/7, books service appointments, and dispatches your on-call team for urgent jobs.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Built for plumbers & HVAC</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Call Answering for Trades</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Your AI receptionist understands plumbing and HVAC emergencies—from burst pipes and water heater failures to broken AC in summer and furnace failures in winter. It books service calls, handles after-hours emergencies, and keeps your schedule full year-round.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Emergency Call Routing</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Burst pipes, no heat, no AC—urgent calls are instantly routed to your on-call technician.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">24/7 Dispatch & Scheduling</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Answer plumbing and HVAC calls and book appointments around the clock, every day.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Service Call Booking</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  AI books drain cleaning, water heater repairs, AC and furnace service, and seasonal maintenance.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Peak Season Support</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Handle high call volumes during summer AC rush and winter heating season.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Customer Information Capture</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Collects address, issue details, and preferred appointment times for every lead.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Appointment Confirmations</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Automated reminders reduce no-shows and keep your schedule efficient.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Why Plumbing & HVAC Companies Choose Callwell
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="text-center">
            <PhoneIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Capture Every Lead</h3>
            <p class="text-sm sm:text-base text-gray-600">Emergency calls don't wait—neither should your answering service.</p>
          </div>
          <div class="text-center">
            <ClockIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Always Available</h3>
            <p class="text-sm sm:text-base text-gray-600">Your AI receptionist works 24/7, including weekends and holidays.</p>
          </div>
          <div class="text-center">
            <CurrencyDollarIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Protect Revenue</h3>
            <p class="text-sm sm:text-base text-gray-600">Stop losing jobs to competitors who answer faster.</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Never Miss a Plumbing or HVAC Call?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how Callwell can help your business capture more leads and book more jobs.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Plumbing & HVAC Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
