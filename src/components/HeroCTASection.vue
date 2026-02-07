<template>
  <section ref="sectionRef" :class="['mx-auto reveal', { 'is-visible': sectionVisible }]" style="width: 98vw;">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-100 via-pink-200 to-purple-300">
      <!-- Animated shimmer overlay -->
      <div class="shimmer-overlay absolute inset-0 pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Capture every call.
          </h2>
          <p class="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Callwell helps you grow your business by ensuring every customer call is answered and every appointment is booked.
          </p>
          <a
            href="https://calendly.com/rileyleitao/30min"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackContactSales('Hero CTA Section')"
            class="inline-block bg-gray-900 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { trackContactSales } from '../composables/useAnalytics'
import { useScrollReveal } from '../composables/useScrollReveal'

const { target: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.15 })
</script>

<style scoped>
.shimmer-overlay {
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.4) 45%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.4) 55%,
    transparent 60%
  );
  background-size: 200% 100%;
  animation: shimmer 4s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
