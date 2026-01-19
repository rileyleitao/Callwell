<template>
  <section class="bg-gray-900 text-white py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Missed Calls = <span class="text-red-500">Lost Revenue</span>
          </h2>
          <p class="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
            For  service businesses, every missed call is a customer booking with someone else.
          </p>
          <a href="https://calendly.com/riley-callwell/callwell-demo" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Problem Section')" class="bg-white text-gray-900 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors mt-4 sm:mt-6 inline-block">
            Protect Revenue
          </a>
        </div>
        <div class="space-y-3 sm:space-y-4 mt-8 lg:mt-0">
          <div class="flex items-start">
            <PhoneIcon class="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
            <p class="text-base sm:text-lg text-gray-300">Calls come in after hours when no one's available</p>
          </div>
          <div class="flex items-start">
            <PhoneIcon class="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
            <p class="text-base sm:text-lg text-gray-300">Phones ring during peak jobs when staff can't answer</p>
          </div>
          <div class="flex items-start">
            <PhoneIcon class="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
            <p class="text-base sm:text-lg text-gray-300">Limited front-desk capacity means calls go unanswered</p>
          </div>
          <div class="flex items-start">
            <CurrencyDollarIcon class="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
            <p class="text-base sm:text-lg text-gray-300">Voicemails don't convert—customers call competitors instead</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhoneIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
