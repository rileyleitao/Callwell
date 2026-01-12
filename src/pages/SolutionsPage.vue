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
      <section class="mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Use Cases</h2>
        
        <div class="grid md:grid-cols-2 gap-6 sm:gap-8">
          <!-- Use Case 1 -->
          <div class="bg-blue-50 rounded-lg p-6 sm:p-8 border border-blue-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                1
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">After-Hours Call Handling</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              Answer the phones after business hours and book appointments, change appointments & cancel—all automatically.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">24/7 availability for after-hours calls</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Book new appointments automatically</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Handle rescheduling and cancellations</span>
              </li>
            </ul>
          </div>

          <!-- Use Case 2 -->
          <div class="bg-green-50 rounded-lg p-6 sm:p-8 border border-green-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                2
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Peak Demand Support</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              Answer the phones while other phones are busy, book & update appointments & cancel—never lose a call during your busiest times.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Handle multiple calls simultaneously</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">No dropped calls during peak hours</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Maintain professional service under pressure</span>
              </li>
            </ul>
          </div>

          <!-- Use Case 3 -->
          <div class="bg-purple-50 rounded-lg p-6 sm:p-8 border border-purple-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                3
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Review Generation</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              After appointment, request a review via text or email. Gather more positive reviews by following up with everyone in conversation.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-purple-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-purple-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Coming Soon: Automated review requests</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-purple-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-purple-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Text and email follow-ups</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-purple-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-purple-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Track review generation success</span>
              </li>
            </ul>
          </div>

          <!-- Use Case 4 -->
          <div class="bg-orange-50 rounded-lg p-6 sm:p-8 border border-orange-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                4
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Customer Re-engagement</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              Send follow up messages to re-book. Keep customers engaged and coming back with automated re-booking campaigns.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-orange-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-orange-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Coming Soon: Automated re-booking messages</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-orange-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-orange-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Follow-up with past customers</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-orange-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-orange-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Increase repeat bookings</span>
              </li>
            </ul>
          </div>

          <!-- Use Case 5 -->
          <div class="bg-indigo-50 rounded-lg p-6 sm:p-8 border border-indigo-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                5
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Appointment Confirmations</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              Appointment confirmation texts/emails keep customers informed and reduce no-shows automatically.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-indigo-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-indigo-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Coming Soon: Automated confirmations</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-indigo-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-indigo-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Text and email confirmations</span>
              </li>
              <li class="flex items-start">
                <div class="w-5 h-5 rounded-full bg-indigo-300 mr-2 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <span class="text-indigo-600 text-xs">✓</span>
                </div>
                <span class="text-sm sm:text-base text-gray-700">Reduce no-show rates</span>
              </li>
            </ul>
          </div>

          <!-- Use Case 6 -->
          <div class="bg-teal-50 rounded-lg p-6 sm:p-8 border border-teal-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-4">
                6
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Waitlist Auto-Fill</h3>
            </div>
            <p class="text-base sm:text-lg text-gray-700 mb-4">
              Automatically fill last-minute cancellations from your waitlist. Never leave a time slot empty when someone is waiting.
            </p>
            <ul class="space-y-2 sm:space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Automatic waitlist management</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Instant notification when slots open</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-gray-700">Maximize booking efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Analytics Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Analytics & Insights</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Track your performance with comprehensive analytics that show exactly how Callwell is protecting your revenue and improving operations.
        </p>
        
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <ChartBarIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Bookings Handled by AI vs Staff</h3>
            <p class="text-sm sm:text-base text-gray-600">See exactly how many bookings your AI assistant handles compared to your team</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <UserMinusIcon class="w-8 h-8 sm:w-10 sm:h-10 text-red-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No-Show Rate Change</h3>
            <p class="text-sm sm:text-base text-gray-600">Track how automated confirmations reduce no-show rates over time</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <CurrencyDollarIcon class="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Revenue Protected</h3>
            <p class="text-sm sm:text-base text-gray-600">Measure the revenue saved by never missing a call or booking opportunity</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <ClockIcon class="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Peak Call Hours</h3>
            <p class="text-sm sm:text-base text-gray-600">Identify your busiest call times and optimize staffing accordingly</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <ArrowPathIcon class="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Missed Call Recovery Rate</h3>
            <p class="text-sm sm:text-base text-gray-600">See how many missed calls are converted into bookings after follow-up</p>
          </div>
          
          <div class="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
            <ArrowTrendingUpIcon class="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Conversion Rate: Missed Call → Booking</h3>
            <p class="text-sm sm:text-base text-gray-600">Track the percentage of missed calls that convert to actual bookings</p>
          </div>
        </div>
      </section>

      <!-- Customization Section -->
      <section class="mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Customization & Tuning</h2>
        <div class="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div class="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <AdjustmentsHorizontalIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
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
            <DocumentTextIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
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
            <WrenchScrewdriverIcon class="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Plumbing & HVAC</h3>
            <p class="text-sm sm:text-base text-gray-600">Perfect for emergency service calls</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Electrical</h3>
            <p class="text-sm sm:text-base text-gray-600">Handle urgent electrical service requests</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Contracting</h3>
            <p class="text-sm sm:text-base text-gray-600">Manage complex project bookings</p>
          </div>
          <div class="text-center">
            <WrenchScrewdriverIcon class="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-3 sm:mb-4" />
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
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
import { CheckIcon, ChartBarIcon, UserMinusIcon, CurrencyDollarIcon, ClockIcon, ArrowPathIcon, ArrowTrendingUpIcon, AdjustmentsHorizontalIcon, DocumentTextIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/solid'
</script>
