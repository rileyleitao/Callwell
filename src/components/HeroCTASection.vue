<template>
  <section class="mx-auto" style="width: 98vw;">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-100 via-pink-200 to-purple-300">
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Capture every call.
          </h2>
          <p class="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Callwell helps you grow your business by ensuring every customer call is answered and every appointment is booked.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/rileyleitao/30min"
              target="_blank"
              rel="noopener noreferrer"
              @click="trackContactSales('Hero CTA Section')"
              class="bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors inline-block"
            >
              Get started
            </a>
            <button
              type="button"
              @click="openDemo"
              class="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Try Demo
            </button>
            <router-link
              to="/pricing"
              class="bg-white text-gray-900 px-6 py-3 rounded-md text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-colors inline-block"
            >
              See pricing
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { trackContactSales, trackTryDemoClick } from '../composables/useAnalytics'

const emit = defineEmits(['openDemo'])
const openDemo = () => {
  trackTryDemoClick('hero_cta')
  emit('openDemo')
}
</script>