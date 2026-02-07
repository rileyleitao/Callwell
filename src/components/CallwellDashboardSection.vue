<template>
  <section class="callwell-dashboard-section overflow-x-hidden py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-5xl min-w-0 px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div ref="headingRef" :class="['reveal', { 'is-visible': headingVisible }]">
        <h2 class="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Turn conversations into revenue
        </h2>
        <p class="text-center text-gray-600 text-sm sm:text-base mb-10">
          24/7
        </p>
      </div>

      <!-- Central card -->
      <div ref="cardRef" :class="['relative min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg reveal', { 'is-visible': cardVisible }]">
        <!-- Mobile: top bar with hamburger (top right) -->
        <div class="flex sm:hidden items-center justify-between border-b border-gray-100 px-4 py-3">
          <div class="min-w-0 max-w-[120px] [&_svg]:h-5 [&_svg]:max-w-full [&_svg]:w-auto">
            <Logo />
          </div>
          <button
            type="button"
            @click="mobileNavOpen = !mobileNavOpen"
            class="flex-shrink-0 p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            <Bars3Icon v-if="!mobileNavOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
        <div class="relative flex flex-col sm:flex-row min-h-[420px] min-w-0">
          <!-- Backdrop when mobile nav open (scoped to card) -->
          <div
            v-show="mobileNavOpen"
            class="absolute inset-0 z-10 bg-black/20 sm:hidden"
            aria-hidden="true"
            @click="mobileNavOpen = false"
          />
          <!-- Left: Sidebar (on mobile: overlay when open; on sm+: always visible) -->
          <aside
            :class="[
              'flex-shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 py-5 px-4 min-w-0 z-20',
              mobileNavOpen
                ? 'absolute left-0 top-0 bottom-0 w-56 bg-white shadow-xl sm:relative sm:top-auto sm:bottom-auto sm:left-auto sm:w-52 sm:bg-gray-50/50 sm:shadow-none'
                : 'hidden sm:block w-full sm:w-52 bg-gray-50/50'
            ]"
          >
            <div class="flex items-center gap-2 mb-8 min-w-0 max-w-[140px] [&_svg]:h-6 [&_svg]:max-w-full [&_svg]:w-auto [&_svg]:flex-shrink-0">
              <Logo />
            </div>
            <nav class="space-y-5">
              <div>
                <p class="text-xs font-medium uppercase tracking-wider text-gray-400 mb-2">Review</p>
                <ul class="space-y-0.5">
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-900 bg-gray-200/80 hover:bg-gray-300/80 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <CalendarDaysIcon class="h-5 w-5 text-gray-600" />
                      Appointments
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <ChartBarIcon class="h-5 w-5 text-gray-500" />
                      Analytics
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <PlayCircleIcon class="h-5 w-5 text-gray-500" />
                      Playback
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <p class="text-xs font-medium uppercase tracking-wider text-gray-400 mb-2">Customize</p>
                <ul class="space-y-0.5">
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <Cog6ToothIcon class="h-5 w-5 text-gray-500" />
                      Agent Setup
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <BookOpenIcon class="h-5 w-5 text-gray-500" />
                      Knowledge
                    </button>
                  </li>
                  <li>
                    <button type="button" class="dashboard-nav-btn w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition-colors transition-transform cursor-pointer">
                      <PuzzlePieceIcon class="h-5 w-5 text-gray-500" />
                      Integrations
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <!-- Right: Content -->
          <div class="flex-1 flex flex-col min-w-0 p-4 sm:p-6 sm:py-8 sm:px-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">This week in review</h3>
            <div ref="metricsRef" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div class="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                <p class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Total Appointments</p>
                <p class="text-2xl font-bold text-gray-900">{{ appointmentsDisplay }}</p>
                <p class="text-sm font-medium text-green-600 mt-1">+24%</p>
                <div class="mt-3 h-12 w-full">
                  <svg viewBox="0 0 100 40" class="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lineChartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="rgb(34 197 94)" stop-opacity="0.3" />
                        <stop offset="100%" stop-color="rgb(34 197 94)" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                    <path :d="lineChartAreaPath" fill="url(#lineChartFill)" class="chart-area" :class="{ 'chart-visible': metricsVisible }" />
                    <path :d="lineChartLinePath" fill="none" stroke="rgb(34 197 94)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="chart-line" :class="{ 'chart-visible': metricsVisible }" />
                  </svg>
                </div>
              </div>
              <div class="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment Types</p>
                  <span class="text-xs text-gray-400">This week</span>
                </div>
                <ul class="space-y-2">
                  <li v-for="(item, index) in appointmentTypes" :key="item.label" class="flex items-center justify-between text-sm">
                    <span class="text-gray-700 truncate pr-2">{{ item.label }}</span>
                    <div class="flex items-center gap-2 flex-shrink-0">
                      <div class="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          class="h-full bg-green-500 rounded-full transition-all duration-1000 ease-out"
                          :style="{ width: metricsVisible ? `${(item.rawValue / 84) * 100}%` : '0%', transitionDelay: `${index * 150}ms` }"
                        ></div>
                      </div>
                      <span class="font-medium text-green-600">{{ item.value }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Appointments: cards on mobile (no scroll), table on sm+ -->
            <div class="rounded-xl border border-gray-100 overflow-hidden">
              <!-- Mobile: card list -->
              <div class="sm:hidden divide-y divide-gray-100">
                <div
                  v-for="row in appointmentsTable"
                  :key="row.id"
                  class="flex flex-col gap-2 py-3 px-4 first:pt-4 last:pb-4"
                >
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-gray-900 font-medium text-sm">{{ row.type }}</span>
                    <span
                      class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium shrink-0"
                      :class="row.statusClass"
                    >
                      {{ row.status }}
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm">{{ row.details }}</p>
                  <p class="text-sm font-medium text-gray-900">{{ row.revenue }}</p>
                </div>
              </div>
              <!-- sm+: table -->
              <table class="hidden w-full sm:table text-sm">
                <thead>
                  <tr class="border-b border-gray-200 bg-gray-50/80">
                    <th class="text-left font-semibold text-gray-700 py-3 px-4">Appointment type</th>
                    <th class="text-left font-semibold text-gray-700 py-3 px-4">Details</th>
                    <th class="text-left font-semibold text-gray-700 py-3 px-4">Status</th>
                    <th class="text-right font-semibold text-gray-700 py-3 px-4">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in appointmentsTable" :key="row.id" class="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td class="py-3 px-4 text-gray-900 font-medium">{{ row.type }}</td>
                    <td class="py-3 px-4 text-gray-600">{{ row.details }}</td>
                    <td class="py-3 px-4">
                      <span
                        class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                        :class="row.statusClass"
                      >
                        {{ row.status }}
                      </span>
                    </td>
                    <td class="py-3 px-4 text-right font-medium text-gray-900">{{ row.revenue }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Logo from './Logo.vue'
import {
  CalendarDaysIcon,
  ChartBarIcon,
  PlayCircleIcon,
  Cog6ToothIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { useScrollReveal, useCounter } from '../composables/useScrollReveal'

const { target: headingRef, isVisible: headingVisible } = useScrollReveal()
const { target: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.1 })
const { target: metricsRef, isVisible: metricsVisible } = useScrollReveal({ threshold: 0.3 })

const { display: appointmentsDisplay, start: startAppointmentsCounter } = useCounter(251, 1200)

watch(metricsVisible, (visible) => {
  if (visible) {
    startAppointmentsCounter()
  }
})

const mobileNavOpen = ref(false)

const sparkData = [18, 32, 48, 62, 78, 90, 100]
const chartHeight = 40
const chartWidth = 100

const lineChartPoints = computed(() => {
  const n = sparkData.length
  return sparkData.map((value, i) => {
    const x = (i / (n - 1)) * chartWidth
    const y = chartHeight - (value / 100) * chartHeight
    return { x, y }
  })
})

const lineChartLinePath = computed(() => {
  const pts = lineChartPoints.value
  if (pts.length === 0) return ''
  return 'M ' + pts.map(p => `${p.x} ${p.y}`).join(' L ')
})

const lineChartAreaPath = computed(() => {
  const pts = lineChartPoints.value
  if (pts.length === 0) return ''
  const line = 'M ' + pts.map(p => `${p.x} ${p.y}`).join(' L ')
  return `${line} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`
})
const appointmentTypes = [
  { label: 'Service call', value: '84', rawValue: 84, positive: true },
  { label: 'Consultation', value: '62', rawValue: 62, positive: true },
  { label: 'Teeth cleaning', value: '48', rawValue: 48, positive: true },
  { label: 'Installation', value: '35', rawValue: 35, positive: true },
  { label: 'Inspection', value: '22', rawValue: 22, positive: true },
]

const appointmentsTable = [
  { id: 1, type: 'Service call', details: 'HVAC repair — Fri 9:00 AM', status: 'Complete', statusClass: 'bg-green-100 text-green-800', revenue: '$420' },
  { id: 2, type: 'Consultation', details: 'Plumbing quote — Thu 2:30 PM', status: 'Booked', statusClass: 'bg-blue-100 text-blue-800', revenue: '$85' },
  { id: 3, type: 'Teeth cleaning', details: 'Routine cleaning — Wed 10:00 AM', status: 'Complete', statusClass: 'bg-green-100 text-green-800', revenue: '$165' },
  { id: 4, type: 'Installation', details: 'Water heater — Tue 1:00 PM', status: 'Upcoming', statusClass: 'bg-amber-100 text-amber-800', revenue: '$1,280' },
  { id: 5, type: 'Inspection', details: 'Annual HVAC tune-up — Mon 11:00 AM', status: 'Complete', statusClass: 'bg-green-100 text-green-800', revenue: '$195' },
  { id: 6, type: 'Service call', details: 'Electrical repair — Sat 8:00 AM', status: 'Upcoming', statusClass: 'bg-amber-100 text-amber-800', revenue: '$340' },
]
</script>

<style scoped>
.callwell-dashboard-section {
  background-color: #f5f5f6;
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Chart line draw animation */
.chart-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  transition: stroke-dashoffset 1.5s ease-out;
}
.chart-line.chart-visible {
  stroke-dashoffset: 0;
}

/* Chart area fade in */
.chart-area {
  opacity: 0;
  transition: opacity 1s ease-out 0.8s;
}
.chart-area.chart-visible {
  opacity: 1;
}
</style>
