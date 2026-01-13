<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Features</h2>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <PhoneIcon class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
          <p class="text-gray-600">Never miss a call—answer customers after hours, weekends, and holidays.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <CurrencyDollarIcon class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Protect Revenue</h3>
          <p class="text-gray-600">Convert missed calls into booked jobs—every call answered is revenue protected.</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <UserGroupIcon class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Reduce Staff Load</h3>
          <p class="text-gray-600">Free up your team from repetitive scheduling—focus on what matters most.</p>
        </div>
      </div>
      <div class="text-center mt-8 sm:mt-12">
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Features Grid Section')" class="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
          Contact Sales
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhoneIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'
</script>
