<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Intelligent Escalations for Emergency Calls
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss an emergency. Our intelligent routing system automatically detects urgent calls and escalates them to your team with human-in-the-loop verification, ensuring critical situations are handled immediately.
        </p>
      </div>

      <!-- Features Section -->
      <section class="py-12 sm:py-16 lg:py-20 mb-12 sm:mb-16 lg:mb-20">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <!-- Left Column -->
          <div class="lg:col-span-4 mb-10 lg:mb-0">
            <p class="text-base font-semibold text-blue-600">Intelligent routing</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Emergency Escalation</h2>
            <p class="mt-4 text-base sm:text-lg text-gray-600">
              Advanced AI detects emergency situations in real-time and routes critical calls to your on-call team immediately—with human verification to prevent false alarms.
            </p>
          </div>

          <!-- Right Column - Features Grid -->
          <div class="lg:col-span-8">
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Automatic Detection</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  AI recognizes urgent keywords and context to identify emergencies instantly.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Human-in-the-Loop</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Intelligent verification prevents false escalations while catching true emergencies.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Instant Alerts</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  On-call team receives immediate notifications for verified emergencies.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Custom Rules</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Configure your own emergency keywords and routing preferences.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Rapid Response</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Critical situations are handled within minutes, not hours.
                </dd>
              </div>

              <div class="relative">
                <dt class="flex items-start gap-x-3">
                  <CheckIcon class="h-5 w-5 flex-none text-blue-600 mt-1" />
                  <span class="text-base font-semibold text-gray-900">Call Forwarding</span>
                </dt>
                <dd class="mt-2 text-sm sm:text-base text-gray-600 ml-8">
                  Emergency calls are instantly forwarded to available team members.
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
            Smart Emergency Detection and Escalation
          </h2>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Callwell's intelligent escalation system uses advanced AI to detect emergency situations in real-time. When a customer mentions urgent keywords like "water leak," "no heat," or "emergency," our system immediately routes the call to your on-call team.
          </p>
          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Our human-in-the-loop verification ensures that only genuine emergencies are escalated, reducing false alarms while guaranteeing that true emergencies receive immediate attention.
          </p>
          <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Automatic Emergency Detection</h3>
                <p class="text-sm sm:text-base text-gray-600">AI recognizes urgent keywords and context to identify emergencies instantly</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Human-in-the-Loop Verification</h3>
                <p class="text-sm sm:text-base text-gray-600">Intelligent routing with verification prevents false escalations</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Instant Team Notification</h3>
                <p class="text-sm sm:text-base text-gray-600">On-call team members receive immediate alerts for verified emergencies</p>
              </div>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 class="text-sm sm:text-base font-semibold text-gray-900 mb-1">Custom Escalation Rules</h3>
                <p class="text-sm sm:text-base text-gray-600">Configure your own emergency keywords and routing preferences</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-gray-50 rounded-lg p-6 sm:p-8 mt-8 lg:mt-0">
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">How Emergency Escalation Works</h3>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex items-start">
              <PhoneIcon class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Emergency Call Detected</h4>
                <p class="text-xs sm:text-sm text-gray-600">AI identifies urgent keywords and context in real-time</p>
              </div>
            </div>
            <div class="flex items-start">
              <ExclamationTriangleIcon class="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Human Verification</h4>
                <p class="text-xs sm:text-sm text-gray-600">System verifies emergency status with human oversight</p>
              </div>
            </div>
            <div class="flex items-start">
              <BellIcon class="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Team Alerted</h4>
                <p class="text-xs sm:text-sm text-gray-600">On-call team receives immediate notification</p>
              </div>
            </div>
            <div class="flex items-start">
              <CheckIcon class="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-3 sm:mr-4 flex-shrink-0" />
              <div>
                <h4 class="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">Call Routed</h4>
                <p class="text-xs sm:text-sm text-gray-600">Emergency call is instantly forwarded to available team member</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <section class="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Why Emergency Escalation Matters
        </h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div class="text-center">
            <ShieldExclamationIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Protect Your Reputation</h3>
            <p class="text-sm sm:text-base text-gray-600">Rapid response to emergencies builds customer trust and prevents negative reviews.</p>
          </div>
          <div class="text-center">
            <ClockIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Respond in Minutes</h3>
            <p class="text-sm sm:text-base text-gray-600">Critical situations are handled within minutes, not hours or days.</p>
          </div>
          <div class="flex items-center justify-center flex-col">
            <ExclamationTriangleIcon class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Prevent False Alarms</h3>
            <p class="text-sm sm:text-base text-gray-600">Intelligent verification reduces unnecessary escalations while catching true emergencies.</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Handle Emergencies Intelligently?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          See how intelligent emergency escalation can protect your business reputation and ensure critical calls are never missed.
        </p>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Emergency Call Routing Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
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
import { CheckIcon, PhoneIcon, CalendarIcon, ExclamationTriangleIcon, BellIcon, ShieldExclamationIcon, ClockIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
