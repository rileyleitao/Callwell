<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          AI Answering Service for Dental Clinics
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss a patient call. Our AI phone answering service for dental practices handles calls 24/7, books appointments, handles cancellations, and keeps your chairs full.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Built for dental practices</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Dental Call Answering</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Your AI receptionist understands dental appointments—cleanings, exams, emergencies, and specialist referrals. It books into your schedule, handles reschedules and cancellations, and captures every patient call.
            </p>
          </div>
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Appointment Booking</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  AI books new patients, cleanings, fillings, and follow-ups directly into your calendar.
                </dd>
              </div>
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">24/7 Availability</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Answer patient calls after hours, on weekends, and during lunch—never lose a booking.
                </dd>
              </div>
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Cancellation & Reschedule</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Handles cancellations and reschedule requests so your front desk can focus on patients in the office.
                </dd>
              </div>
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Dental Emergency Triage</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Recognizes urgent dental issues and offers same-day or next-available slots when appropriate.
                </dd>
              </div>
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Patient Information Capture</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Collects name, contact details, reason for visit, and insurance information.
                </dd>
              </div>
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Appointment Reminders</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Reduces no-shows with automated confirmations so your schedule stays full.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Why Dental Clinics Choose Callwell
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="text-center">
            <PhoneIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Fill More Chairs</h3>
            <p class="text-sm sm:text-base text-gray-600">Capture every patient call and fill last-minute cancellations faster.</p>
          </div>
          <div class="text-center">
            <ClockIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Always Available</h3>
            <p class="text-sm sm:text-base text-gray-600">Your AI receptionist works 24/7 so you never miss a new patient.</p>
          </div>
          <div class="text-center">
            <CurrencyDollarIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Protect Revenue</h3>
            <p class="text-sm sm:text-base text-gray-600">Stop losing patients to practices that answer when you're busy.</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Never Miss a Patient Call?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how Callwell can help your dental practice capture more appointments and reduce no-shows.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Dental Clinics Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
