<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Products Built for Modern Businesses & Clinics
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Complete AI-powered solutions to handle calls, book appointments, and grow your business—all automatically.
        </p>
      </div>

      <!-- Available Products -->
      <div class="mb-16 sm:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Available Now</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
          <!-- Call Answering -->
          <div class="bg-white border-2 border-blue-500 rounded-lg p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <PhoneIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Call Answering</h3>
                  <span class="text-xs sm:text-sm text-green-600 font-semibold">Available Now</span>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Never miss another call. Our AI answers every incoming call 24/7, handles customer inquiries, and books appointments—even after hours or during peak demand.
              </p>
              <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">24/7 coverage (weekends, holidays)</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Handles peak volume without drops</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Natural brand-aligned voice</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Works with existing phone lines</span>
                </li>
              </ul>
            </div>
            <router-link to="/automated-call-answering" class="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors inline-block text-center mt-auto">
              Learn More
            </router-link>
          </div>

          <!-- Appointment Booking -->
          <div class="bg-white border-2 border-blue-500 rounded-lg p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CalendarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Appointment Booking</h3>
                  <span class="text-xs sm:text-sm text-green-600 font-semibold">Available Now</span>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Automated scheduling that books, reschedules, and cancels appointments. Manages waitlists and fills cancellations automatically—all without human intervention.
              </p>
              <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Real-time scheduling during calls</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Automated reschedule & cancel workflows</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Smart waitlist and auto-fill queues</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Seamless Google/Outlook calendar sync</span>
                </li>
              </ul>
            </div>
            <router-link to="/ai-appointment-scheduling" class="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors inline-block text-center mt-auto">
              Learn More
            </router-link>
          </div>

          <!-- Text Messaging -->
          <div class="bg-white border-2 border-blue-500 rounded-lg p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center mb-4 sm:mb-6">
                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <ChatBubbleLeftRightIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Text Messaging</h3>
                  <span class="text-xs sm:text-sm text-green-600 font-semibold">Available Now</span>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Set text or email reminders for upcoming appointments, notify of open slots automatically, or create active messaging campaigns to drive booking volumes.
              </p>
              <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Text or email reminders for bookings</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Immediate open-slot list alerts</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Proactive client reactivation campaigns</span>
                </li>
                <li class="flex items-start">
                  <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span class="text-sm text-gray-700">Two-way integrated SMS threads</span>
                </li>
              </ul>
            </div>
            <router-link to="/text-messaging" class="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors inline-block text-center mt-auto">
              Learn More
            </router-link>
          </div>
        </div>
      </div>

      <!-- Coming Soon Products -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Coming Soon</h2>
        
        <div class="max-w-xl mx-auto">
          <!-- Review Generation -->
          <div class="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 sm:p-8 opacity-75">
            <div class="flex items-center mb-4 sm:mb-6">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <StarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
              </div>
              <div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Review Generation</h3>
                <span class="text-xs sm:text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-semibold">Coming Soon</span>
              </div>
            </div>
            <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Automatically request reviews after appointments via text or email. Gather more positive reviews by following up with every customer.
            </p>
            <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li class="flex items-start">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span class="text-gray-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-600">Automatic review requests after appointments</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span class="text-gray-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-600">Review requests via text or email</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span class="text-gray-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-600">Follow up with everyone in conversation</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300 mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                  <span class="text-gray-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-600">Track review generation metrics</span>
              </li>
            </ul>
            <button disabled class="bg-gray-300 text-gray-500 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold cursor-not-allowed inline-block w-full text-center">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <!-- Additional Features -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Additional Features</h2>
        <div class="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div class="flex items-start">
            <AdjustmentsHorizontalIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
            <div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Tone Adjustments</h3>
              <p class="text-sm sm:text-base text-gray-600">Customize AI tone and style to match your brand voice</p>
            </div>
          </div>
          <div class="flex items-start">
            <DocumentTextIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
            <div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Script Tuning</h3>
              <p class="text-sm sm:text-base text-gray-600">Fine-tune conversation scripts for optimal results</p>
            </div>
          </div>
          <div class="flex items-start">
            <ChartBarIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
            <div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p class="text-sm sm:text-base text-gray-600">Track bookings, revenue, and performance metrics</p>
            </div>
          </div>
          <div class="flex items-start">
            <Cog6ToothIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
            <div>
              <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Easy Integration</h3>
              <p class="text-sm sm:text-base text-gray-600">Works with your existing phone system and calendar</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Get Started?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how our products can transform your business or clinic and protect your revenue.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Products Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
import { CheckIcon, AdjustmentsHorizontalIcon, DocumentTextIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { PhoneIcon, CalendarIcon, ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/vue/24/outline'
import { trackContactSales } from '../composables/useAnalytics'
</script>
