<template>
  <section class="bg-white py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Stay on top of customer support
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Never miss a call or booking opportunity. Our AI-powered system handles every customer interaction, ensuring your business is always available and responsive.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        <!-- 24/7 Call Answering Card -->
        <div class="text-left">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: #4F39F6;">
            <PhoneIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            24/7 Call Answering
          </h3>
          <p class="text-base sm:text-lg text-gray-600 mb-4">
            Never miss another call. Our AI answers every incoming call 24/7, handles customer inquiries, and books appointments—even after hours or during peak demand. Always available when your customers need you.
          </p>
          <router-link to="/automated-call-answering" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
            Learn more about automated call answering
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Appointment Booking Card -->
        <div class="text-left">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: #4F39F6;">
            <UserGroupIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Appointment Booking
          </h3>
          <p class="text-base sm:text-lg text-gray-600 mb-4">
            Automated scheduling that works around the clock. Our AI understands your availability, books appointments in real-time during customer calls, and handles rescheduling requests automatically.
          </p>
          <router-link to="/ai-appointment-scheduling" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
            Learn more about AI appointment scheduling
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Emergency Escalation Card -->
        <div class="text-left">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: #4F39F6;">
            <TrashIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Intelligent Escalations
          </h3>
          <p class="text-base sm:text-lg text-gray-600 mb-4">
            Never miss an emergency. Our intelligent routing system automatically detects urgent calls and escalates them to your team with human-in-the-loop verification, ensuring critical situations are handled immediately.
          </p>
          <router-link to="/emergency-call-routing" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
            Learn more about emergency call routing
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { EnvelopeIcon, UserGroupIcon, TrashIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>
