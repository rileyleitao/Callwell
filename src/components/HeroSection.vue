<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
    <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Never Miss Another Booking
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.
        </p>
        <div class="mb-6 sm:mb-8">
          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <input 
              type="email" 
              placeholder="Work email" 
              class="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Hero Section')" class="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap inline-block text-center relative overflow-hidden shimmer-button">
              <span class="relative z-10">Contact Sales</span>
            </a>
          </div>
          <div class="flex items-center my-4">
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <img 
          src="/PlumbingHeroimage.png" 
          alt="Callwell appointment booking interface showing video call and appointment confirmation" 
          class="max-w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { trackContactSales } from '../composables/useAnalytics'
// Hero Section Component
</script>

<style scoped>
.shimmer-button {
  position: relative;
}

.shimmer-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 2s ease-in-out;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
