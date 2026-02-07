<template>
  <section class="bg-white py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div ref="headingRef" :class="['text-center mb-12 sm:mb-16 reveal', { 'is-visible': headingVisible }]">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Built for service businesses like yours
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Join service businesses that never miss a booking opportunity and deliver a consistently professional experience.
        </p>
      </div>
      
      <!-- Stats Grid -->
      <div ref="statsRef" :class="['bg-gray-50 rounded-2xl py-8 sm:py-12 reveal', { 'is-visible': statsVisible }]">
        <div class="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          <div class="text-center py-6 lg:py-0 px-4">
            <div class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div class="text-sm sm:text-base text-gray-600">Call coverage</div>
          </div>
          <div class="text-center py-6 lg:py-0 px-4">
            <div class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{{ answeredDisplay }}</div>
            <div class="text-sm sm:text-base text-gray-600">Calls answered</div>
          </div>
          <div class="text-center py-6 lg:py-0 px-4">
            <div class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{{ uptimeDisplay }}</div>
            <div class="text-sm sm:text-base text-gray-600">Uptime guarantee</div>
          </div>
          <div class="text-center py-6 lg:py-0 px-4">
            <div class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">&lt;{{ answerTimeDisplay }}</div>
            <div class="text-sm sm:text-base text-gray-600">Average answer time</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { watch } from 'vue'
import { useScrollReveal, useCounter } from '../composables/useScrollReveal'

const { target: headingRef, isVisible: headingVisible } = useScrollReveal()
const { target: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 })

const { display: answeredDisplay, start: startAnswered } = useCounter(100, 1500, '%')
const { display: uptimeDisplay, start: startUptime } = useCounter(99.9, 1500, '%')
const { display: answerTimeDisplay, start: startAnswerTime } = useCounter(2, 800, 's')

// Start counters when stats section becomes visible
watch(statsVisible, (visible) => {
  if (visible) {
    startAnswered()
    startUptime()
    startAnswerTime()
  }
})
</script>
