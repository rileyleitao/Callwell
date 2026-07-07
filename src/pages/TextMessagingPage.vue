<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Automated Text & SMS Messaging
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Keep your schedule full and eliminate no-shows. Automatically send reminders, announce open appointment slots, and run smart campaigns.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Complete SMS Automation</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Fill Slots Automatically</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Set automated appointment reminders, alert patient and client lists to newly open slots, and run proactive campaigns to generate repeat bookings.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Custom Text & Email Reminders</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Deliver timely reminders via email or text to reduce late cancellations and no-shows.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Immediate Slot Notifications</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Alert waitlisted clients immediately when new slots or cancellation times open up.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Smart Booking Campaigns</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Create customized text sequences to reactivate past clients and prompt new appointment requests.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Unified Thread Monitoring</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  All automated text replies integrate straight back into your main dashboard calendar queue.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Personalized Message Fields</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Dynamic variables insert customer details, appointment times, and unique booking links automatically.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Opt-Out & Compliance Built-In</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Built on secure, compliant SMS platforms with automated opt-out keywords (STOP/UNSUBSCRIBE) handled seamlessly.
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
            Intelligent Outreach for Clinics & Modern Businesses
          </h2>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Callwell SMS messaging isn't just about sending reminders. It's a proactive schedule-management system. Send text or email reminders to confirm appointments, alert waitlists to open slots, or create outbound booking campaigns to keep your business operating at max capacity.
          </p>
          <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            All messages are personalized, match your business policies, and sync live with your calendar so replies route straight to booking confirmations.
          </p>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex items-start">
              <ChatBubbleLeftRightIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Text & Email Reminders</h3>
                <p class="text-sm sm:text-base text-gray-600">Send automatic updates at custom times so customers never forget bookings</p>
              </div>
            </div>
            <div class="flex items-start">
              <EnvelopeIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Open Slot Alerts</h3>
                <p class="text-sm sm:text-base text-gray-600">Instantly notify clients of cancellations to fill gaps without lifting a finger</p>
              </div>
            </div>
            <div class="flex items-start">
              <MegaphoneIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Outreach Campaigns</h3>
                <p class="text-sm sm:text-base text-gray-600">Launch templates to prompt appointments during slow periods or holiday weeks</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 sm:p-8 mt-8 lg:mt-0">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Outreach & Reminder Features</h3>
          <ul class="space-y-3 sm:space-y-4">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">DND & Quiet Hours Support</h4>
                <p class="text-xs sm:text-sm text-gray-600">Messages will never go out during late night hours</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Two-Way Interaction</h4>
                <p class="text-xs sm:text-sm text-gray-600">AI can read customer replies and respond accordingly to schedule slots</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Campaign Performance</h4>
                <p class="text-xs sm:text-sm text-gray-600">Track click rates, response triggers, and total generated bookings</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Multi-Channel Delivery</h4>
                <p class="text-xs sm:text-sm text-gray-600">Send reminder threads seamlessly to both SMS text and email addresses</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Instant Confirmations</h4>
                <p class="text-xs sm:text-sm text-gray-600">Provide direct calendar links for single-tap confirmation</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Use Cases Section -->
      <section class="mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          How Text Automation Works
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">1</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Configure Rules</h3>
            <p class="text-sm sm:text-base text-gray-600">Set up standard text or email reminder delays (e.g. 24h before appointment)</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">2</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Monitor Calendar</h3>
            <p class="text-sm sm:text-base text-gray-600">Callwell tracks cancellations and instantly texts nearby waitlisted targets</p>
          </div>
          <div class="bg-blue-50 rounded-lg p-4 sm:p-6">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">3</div>
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Launch Campaigns</h3>
            <p class="text-sm sm:text-base text-gray-600">Run automated outbound campaign lists to secure fresh appointment bookings</p>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Benefits of SMS & Reminder Tools
        </h2>
        <div class="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Zero Empty Slots</h3>
              <p class="text-sm sm:text-base text-gray-600">Fill sudden cancellation openings within minutes by messaging hot waitlist leads</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Slash No-Show Rates</h3>
              <p class="text-sm sm:text-base text-gray-600">Polite, automated text reminders prompt timely scheduling confirmations and cancel alerts</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Proactive Calendar Growth</h3>
              <p class="text-sm sm:text-base text-gray-600">Construct tailored outreach campaign threads to convert old leads into fresh bookings</p>
            </div>
          </div>
          <div class="flex items-start">
            <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Multi-Channel Consistency</h3>
              <p class="text-sm sm:text-base text-gray-600">Deploy text notifications alongside email templates to reach users on their preferred channel</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Automate Your Messages?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how smart text reminders and custom booking campaigns can grow your patient and client schedules.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Text Messaging Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block text-center cursor-pointer">
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
import { CheckIcon, ChatBubbleLeftRightIcon, EnvelopeIcon, MegaphoneIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
