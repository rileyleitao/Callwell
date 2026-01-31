<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
    <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div>
        <!-- Beta Badge -->
        <div class="flex items-center gap-3 mb-6">
          <span class="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200">
            In Beta
          </span>
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" class="text-gray-600 text-sm font-medium hover:text-gray-900 inline-flex items-center gap-1">
            Try for a limited time
            <ArrowRightIcon class="w-4 h-4" />
          </a>
        </div>
        
        <h1 class="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
          Never Miss Another Booking
        </h1>
        <p class="text-xl sm:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Hero Section')" class="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors inline-block">
            Contact Sales
          </a>
          <!-- <button
            type="button"
            @click="openDemo"
            class="bg-white text-indigo-600 px-6 py-3 rounded-md text-sm font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Try Demo
          </button> -->
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
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { trackContactSales, trackTryDemoClick } from '../composables/useAnalytics'

const emit = defineEmits(['openDemo'])
const openDemo = () => {
  trackTryDemoClick('hero_section')
  emit('openDemo')
}
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
