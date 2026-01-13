<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Handle Your Calls. Protect Your Revenue.
          </h2>
          <p class="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
            Callwell handles booking, rescheduling, and cancellations automatically. Manage waitlists and answer inbound calls around the clock.
          </p>
          <ul class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span class="text-sm sm:text-base text-gray-700">Answer inbound calls automatically—never miss a booking, even after hours or during peak demand.</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span class="text-sm sm:text-base text-gray-700">Book, reschedule, or cancel appointments—Callwell handles scheduling just like a trained office assistant.</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span class="text-sm sm:text-base text-gray-700">Manage waitlists automatically—fill last-minute cancellations without staff intervention.</span>
            </li>
            <li class="flex items-start">
              <CheckIcon class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span class="text-sm sm:text-base text-gray-700">Sound professional every time—consistent, polite, and on-brand conversations with every caller.</span>
            </li>
          </ul>
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Features Section')" class="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
            Contact Sales
          </a>
        </div>
        <div class="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0">
          <div class="mb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Calls</h3>
            <div class="flex gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">✓ Incoming calls</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">✓ After hours</span>
            </div>
            <div class="flex gap-2 text-sm text-gray-600 mb-4">
              <button class="px-3 py-1 hover:bg-gray-100 rounded">Yesterday</button>
              <button class="px-3 py-1 hover:bg-gray-100 rounded">Week</button>
              <button class="px-3 py-1 bg-gray-200 rounded font-medium">Month</button>
              <button class="px-3 py-1 hover:bg-gray-100 rounded">Year</button>
              <button class="px-3 py-1 hover:bg-gray-100 rounded">Cust</button>
            </div>
            <p class="text-sm text-gray-600 mb-4">201 calls handled</p>
            <div class="border-t border-gray-200 pt-4">
              <label class="flex items-center text-sm text-gray-700">
                <input type="checkbox" class="mr-2" checked />
                Summary
              </label>
            </div>
            <div class="border-t border-gray-200 pt-4 mt-4">
              <p class="text-sm text-gray-600">Customer called after hours requesting emergency plumbing service. Callwell booked appointment for next available slot...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
