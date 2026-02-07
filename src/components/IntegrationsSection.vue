<template>
  <section class="bg-gray-50 py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="cardRef" :class="['rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8 lg:p-10 reveal', { 'is-visible': cardVisible }]">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          <!-- Left: Title + description -->
          <div class="flex-shrink-0 lg:max-w-sm">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">
              Works with your tools
            </h2>
            <p class="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
              Book appointments automatically with your existing tools.
            </p>
          </div>

          <!-- Right: Integration pills (rows aligned) -->
          <div class="flex-1 min-w-0 flex flex-col gap-3">
            <!-- Row 1: Live integrations (mock buttons) -->
            <div ref="pillsRef" :class="['flex flex-wrap items-center gap-3 reveal-stagger', { 'is-visible': pillsVisible }]">
              <button
                v-for="item in topIntegrations"
                :key="item.name"
                type="button"
                class="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:border-gray-300 hover:bg-gray-50 hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <img
                  :src="item.logo"
                  :alt="item.name"
                  class="h-5 w-5 min-w-[1.25rem] max-w-5 flex-shrink-0 rounded object-contain"
                  loading="lazy"
                  @error="(e) => (e.target.style.display = 'none')"
                />
                <span>{{ item.name }}</span>
              </button>
            </div>

            <!-- Row 2: Coming Soon (aligned with row 1, label to the left) -->
            <div ref="comingSoonRef" :class="['flex flex-wrap items-center gap-3 reveal-stagger', { 'is-visible': comingSoonVisible }]">
              <span class="text-xs font-medium uppercase tracking-wider text-gray-400 flex-shrink-0">Coming Soon</span>
              <template v-for="item in comingSoon" :key="item.name">
                <span
                  class="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-600"
                >
                  <img
                    v-if="item.logo"
                    :src="item.logo"
                    :alt="item.name"
                    class="h-5 w-5 flex-shrink-0 rounded-full object-contain"
                    loading="lazy"
                    @error="(e) => (e.target.style.display = 'none')"
                  />
                  <span v-else class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-500">
                    {{ item.fallback }}
                  </span>
                  <span>{{ item.name }}</span>
                </span>
              </template>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Request Another</span>
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const simpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}`
const favicon = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

const { target: cardRef, isVisible: cardVisible } = useScrollReveal()
const { target: pillsRef, isVisible: pillsVisible } = useScrollReveal({ threshold: 0.2 })
const { target: comingSoonRef, isVisible: comingSoonVisible } = useScrollReveal({ threshold: 0.2 })

const topIntegrations = [
  { name: 'Google Calendar', logo: favicon('calendar.google.com') },
  { name: 'Outlook', logo: favicon('outlook.com') },
  { name: 'Calendly', logo: simpleIcon('calendly') },
  { name: 'Jobber', logo: favicon('jobber.com') },
  { name: 'Housecall Pro', logo: favicon('housecallpro.com') },
  { name: 'Service Titan', logo: favicon('servicetitan.com') },
]

const comingSoon = [
  { name: 'Curve Dental', logo: favicon('curvedental.com'), fallback: 'C' },
  { name: 'Clinko', logo: favicon('cliniko.com'), fallback: 'C' },
  { name: 'Oscar EMR', logo: favicon('oscar-health.com'), fallback: 'O' },
]
</script>
