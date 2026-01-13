<template>
  <section class="bg-blue-600 text-white py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Ready to protect your revenue?
      </h2>
      <p class="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
        Join service businesses that never miss a booking. Reduce staff workload and deliver a consistently professional experience—automatically.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('CTA Section')" class="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
          Contact Sales
        </a>
        <router-link to="/how-it-works" class="text-white text-base sm:text-lg font-medium hover:underline">
          See how it works
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { trackContactSales } from '../composables/useAnalytics'
// CTA Section Component
</script>
