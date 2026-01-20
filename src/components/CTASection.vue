<template>
  <section class="bg-indigo-100 py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to protect your revenue?<br />
            Start your free trial today.
          </h2>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:flex-shrink-0">
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('CTA Section')" class="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors inline-block">
            Get started
          </a>
          <router-link to="/how-it-works" class="text-gray-900 text-sm font-medium hover:text-gray-700 inline-flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { trackContactSales } from '../composables/useAnalytics'
// CTA Section Component
</script>
