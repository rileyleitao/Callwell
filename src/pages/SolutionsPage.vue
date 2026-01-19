<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Solutions for Every Service Business Challenge
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          From after-hours calls to peak demand periods, Callwell handles every scenario so you never miss a booking opportunity.
        </p>
      </div>

      <!-- Use Cases -->
      <section class="py-12 sm:py-16 lg:py-36 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Everything you need</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">All-in-one platform</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Handle every customer interaction automatically. From after-hours calls to appointment confirmations, Callwell manages it all so you can focus on your work.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <!-- Feature 1 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">After-Hours Call Handling</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Answer calls 24/7 and book, reschedule, or cancel appointments automatically—even when you're closed.
                </dd>
              </div>

              <!-- Feature 2 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Peak Demand Support</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Handle multiple calls simultaneously during your busiest times. Never lose a customer to a busy signal.
                </dd>
              </div>

              <!-- Feature 3 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Waitlist Auto-Fill</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Automatically fill last-minute cancellations from your waitlist. Never leave a time slot empty.
                </dd>
              </div>

              <!-- Feature 4 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Appointment Confirmations</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Automated text and email confirmations keep customers informed and reduce no-shows.
                </dd>
              </div>

              <!-- Feature 5 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Review Generation</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Request reviews via text or email after appointments. Grow your reputation automatically.
                </dd>
              </div>

              <!-- Feature 6 -->
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Customer Re-engagement</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Send follow-up messages to re-book past customers and keep them coming back.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>


      <!-- Customization Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Customization & Tuning</h2>
        <div class="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div class="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <AdjustmentsHorizontalIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Tone Adjustments</h3>
            <p class="text-base sm:text-lg text-gray-600 mb-4">
              Customize your AI's tone and style to match your brand voice. Whether you need a professional, friendly, or technical tone, we'll tune it to your preferences.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Brand voice customization</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Industry-specific language</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Ongoing tone refinement</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <DocumentTextIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
            <h3 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Script Tuning</h3>
            <p class="text-base sm:text-lg text-gray-600 mb-4">
              Fine-tune conversation scripts for optimal results. Work with our team to perfect how your AI handles different scenarios and customer types.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Custom conversation flows</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Scenario-specific responses</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Continuous optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Industries Section -->
      <section class="bg-blue-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Built for Service Businesses</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Callwell is designed specifically for service businesses that need reliable call handling and appointment management.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Plumbing & HVAC</h3>
            <p class="text-sm sm:text-base text-gray-600">Perfect for emergency service calls</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Electrical</h3>
            <p class="text-sm sm:text-base text-gray-600">Handle urgent electrical service requests</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Contracting</h3>
            <p class="text-sm sm:text-base text-gray-600">Manage complex project bookings</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Home Services</h3>
            <p class="text-sm sm:text-base text-gray-600">All service business types</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Solve Your Call Handling Challenges?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how Callwell can handle your specific use cases and protect your revenue.
        </p>
        <a href="https://calendly.com/riley-callwell/callwell-demo" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Solutions Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
import { CheckIcon, ChartBarIcon, UserMinusIcon, CurrencyDollarIcon, ClockIcon, ArrowPathIcon, ArrowTrendingUpIcon } from '@heroicons/vue/24/solid'
import { WrenchScrewdriverIcon, AdjustmentsHorizontalIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import { trackContactSales } from '../composables/useAnalytics'
</script>
