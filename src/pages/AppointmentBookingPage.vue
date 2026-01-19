<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          AI That Schedules Appointments Automatically
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          An automated booking system for service businesses that handles scheduling, cancellations, and waitlists—all without human intervention.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Fully automated</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Smart Scheduling</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Our AI understands your availability, booking rules, and service types—scheduling appointments in real-time during customer calls.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Real-Time Booking</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  AI schedules appointments while the customer is on the call.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">After-Hours Booking</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Customers can book appointments 24/7, even outside business hours.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Waitlist Management</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Automatically fills cancellations from your waitlist.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Easy Rescheduling</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Customers can reschedule or cancel appointments effortlessly.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Calendar Integration</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Syncs seamlessly with your existing calendar systems.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">No Double Bookings</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  AI checks availability in real-time to prevent scheduling conflicts.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Automated Booking System for Service Businesses
          </h2>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Callwell's AI that schedules appointments automatically understands your availability, booking rules, and service types. It books appointments in real-time during customer calls, handles rescheduling requests, and even manages waitlists for last-minute cancellations.
          </p>
          <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Our automated booking system integrates seamlessly with your existing calendar, ensuring every appointment is scheduled correctly and your team is notified immediately.
          </p>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex items-start">
              <CalendarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Real-Time Booking</h3>
                <p class="text-sm sm:text-base text-gray-600">AI schedules appointments while the customer is on the call</p>
              </div>
            </div>
            <div class="flex items-start">
              <CalendarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">After-Hours Booking</h3>
                <p class="text-sm sm:text-base text-gray-600">Customers can book appointments 24/7, even outside business hours</p>
              </div>
            </div>
            <div class="flex items-start">
              <CalendarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Cancellation Management</h3>
                <p class="text-sm sm:text-base text-gray-600">AI handles cancellations and automatically fills slots from waitlists</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 sm:p-8 mt-8 lg:mt-0">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Booking Features</h3>
          <ul class="space-y-3 sm:space-y-4">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Smart Scheduling</h4>
                <p class="text-xs sm:text-sm text-gray-600">AI understands your availability and service types</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Waitlist Management</h4>
                <p class="text-xs sm:text-sm text-gray-600">Automatically fills cancellations from waitlists</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Rescheduling</h4>
                <p class="text-xs sm:text-sm text-gray-600">Customers can reschedule appointments easily</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Calendar Integration</h4>
                <p class="text-xs sm:text-sm text-gray-600">Syncs with your existing calendar systems</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Instant Confirmations</h4>
                <p class="text-xs sm:text-sm text-gray-600">Customers receive confirmation immediately</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Use Cases Section -->
      <section class="mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          How AI Appointment Scheduling Works
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">1</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Customer Calls</h3>
            <p class="text-sm sm:text-base text-gray-600">Customer calls to book a service appointment</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">2</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">AI Understands</h3>
            <p class="text-sm sm:text-base text-gray-600">AI that schedules appointments automatically understands service type and preferred time</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">3</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Appointment Booked</h3>
            <p class="text-sm sm:text-base text-gray-600">Automated booking system schedules the appointment and sends confirmation</p>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Benefits of Automated Appointment Booking
        </h2>
        <div class="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">24/7 Availability</h3>
              <p class="text-sm sm:text-base text-gray-600">Customers can book appointments anytime, even after hours</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">No Double Bookings</h3>
              <p class="text-sm sm:text-base text-gray-600">AI checks availability in real-time to prevent conflicts</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Reduced No-Shows</h3>
              <p class="text-sm sm:text-base text-gray-600">Automatic reminders and confirmations reduce missed appointments</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Waitlist Automation</h3>
              <p class="text-sm sm:text-base text-gray-600">Automatically fills cancellations from your waitlist</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Automate Your Booking?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how AI that schedules appointments automatically can transform your service business.
        </p>
        <a href="https://calendly.com/riley-callwell/callwell-demo" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Appointment Booking Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
import { CheckIcon, CalendarIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
