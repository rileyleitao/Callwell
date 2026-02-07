<template>
  <section ref="sectionRef" :class="['bg-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden reveal', { 'is-visible': sectionVisible }]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-semibold text-indigo-600 mb-2">How it works</p>
      <h2 class="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-12 sm:mb-16">
        Call comes in → AI answers → Appointments booked
      </h2>

      <!-- Animation: text path + waveform + appointments. On mobile: text flows into waveform (same row), then appointments below -->
      <div class="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-4 min-h-0">
        <!-- Wrapper: on mobile keeps text + waveform in one row so text flows into pill; on lg:contents so layout stays 3-column -->
        <div class="flex flex-row items-center justify-end gap-1 sm:gap-2 w-full min-w-0 lg:contents">
          <!-- Questions flowing along path into waveform -->
          <div class="flex-1 min-w-0 flex justify-end lg:w-[45%] lg:flex-none" aria-hidden="true">
            <svg
              class="w-full max-w-[280px] sm:max-w-md h-20 sm:h-24 lg:h-28 text-gray-400 flex-shrink-0 ml-0 mr-0 lg:mr-0"
              viewBox="0 0 400 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="text-curve"
                  d="M 20 55 Q 120 20 200 50 T 380 55"
                  fill="none"
                />
              </defs>
              <text
                v-for="q in flowingQuestionsForTemplate"
                :key="q.id"
                class="text-2xl sm:text-3xl font-medium"
                style="fill: currentColor;"
              >
                <textPath href="#text-curve" :startOffset="`${q.offset}%`">
                  {{ q.text }}
                </textPath>
              </text>
            </svg>
          </div>
          <!-- Noise signal / waveform pill (text path curves into this) -->
          <div class="flex-shrink-0 waveform-pill">
            <div class="flex items-center justify-center gap-0.5 sm:gap-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-800 bg-white shadow-sm">
              <div
                v-for="i in 12"
                :key="i"
                class="w-1 sm:w-1.5 bg-indigo-600 rounded-full waveform-bar"
                :style="{ animationDelay: `${(i - 1) * 0.08}s` }"
              />
            </div>
          </div>
        </div>

        <!-- Appointments list — new ones added continually with pop-in -->
        <div class="w-full lg:w-[40%] flex flex-col gap-2 sm:gap-3 lg:gap-4 h-[232px] sm:h-[260px] lg:h-[272px] overflow-hidden">
          <div
            v-for="apt in displayAppointments"
            :key="apt.id"
            class="appointment-card flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white border border-gray-200 shadow-sm flex-shrink-0 min-h-0"
            :style="{ animationDelay: apt.animationDelay }"
          >
            <span class="text-sm sm:text-base font-medium text-gray-700 truncate">{{ apt.label }}</span>
            <span class="flex-shrink-0 text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              Booked
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { target: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 })

// —— Flowing questions (multiple on path at once) ——
const pathTime = ref(0) // 100 units = one full path; advances 100 every TEXT_DURATION ms
const flowingQuestions = ref([])
let questionIdNext = 0
let questionPoolIndex = 0

const QUESTIONS_SHORT = [
  'Book an oil change Friday?',
  'Opening on Thursday?',
  'Book an appointment?',
  'Need a plumber soon.',
  'Available this week?',
  'Quote for a visit?',
  'Available tomorrow?',
  'Schedule a callback?',
  'Slot this afternoon?'
]

const currentQuestions = computed(() => QUESTIONS_SHORT)

const TEXT_DURATION = 5000 // ms for one question to travel full path (slower)
const PATH_SPEED = 100 / TEXT_DURATION
const MIN_QUESTION_SPACING = 100 // one question at a time — next only after previous has left

// —— Appointments added continually ——
const displayAppointments = ref([])
let appointmentIdNext = 0
let appointmentPoolIndex = 0

const APPOINTMENT_POOL = [
  'Oil change — Fri 9:00 AM',
  'Consultation — Mon 2:30 PM',
  'Service call — Wed 10:00 AM',
  'Plumbing — Thu 11:00 AM',
  'Estimate — Tue 3:00 PM',
  'Repair — Sat 9:30 AM',
  'HVAC tune-up — Mon 10:00 AM',
  'Installation — Fri 2:00 PM',
  'Inspection — Wed 1:00 PM',
  'Dental cleaning — Thu 4:00 PM',
  'Check-up — Tue 9:00 AM',
  'Follow-up — Mon 11:30 AM',
  'Consultation — Wed 2:30 PM',
  'Service — Fri 8:00 AM',
  'Callback — Thu 3:00 PM'
]

const MAX_APPOINTMENTS = 4
const POP_DELAY = '0.2s'

const flowingQuestionsForTemplate = computed(() => {
  const t = pathTime.value
  return flowingQuestions.value
    .filter((q) => {
      const age = t - q.startPathTime
      return age >= 0 && age < 100
    })
    .map((q) => ({
      ...q,
      offset: ((t - q.startPathTime) % 100 + 100) % 100
    }))
})

let rafId = null
let lastFrameTime = null
let lastAddedPathTime = -MIN_QUESTION_SPACING

function tick(now) {
  if (lastFrameTime == null) lastFrameTime = now
  const dt = now - lastFrameTime
  lastFrameTime = now

  pathTime.value += dt * PATH_SPEED
  const t = pathTime.value

  // Only add a new question when the previous one has moved at least MIN_QUESTION_SPACING along the path
  if (t - lastAddedPathTime >= MIN_QUESTION_SPACING) {
    lastAddedPathTime = t
    const questions = currentQuestions.value
    const text = questions[questionPoolIndex % questions.length]
    questionPoolIndex += 1
    flowingQuestions.value.push({
      id: `q-${++questionIdNext}`,
      text,
      startPathTime: t
    })
    addAppointment() // one appointment per question
  }

  flowingQuestions.value = flowingQuestions.value.filter(
    (q) => pathTime.value - q.startPathTime < 100
  )

  rafId = requestAnimationFrame(tick)
}

function addAppointment() {
  const label = APPOINTMENT_POOL[appointmentPoolIndex % APPOINTMENT_POOL.length]
  appointmentPoolIndex += 1
  const id = `apt-${++appointmentIdNext}`
  const list = displayAppointments.value
  list.push({ id, label, animationDelay: POP_DELAY })
  if (list.length > MAX_APPOINTMENTS) list.shift()
}

onMounted(() => {
  lastFrameTime = null
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.waveform-bar {
  height: 10px;
  transform-origin: center;
  animation: waveform-pulse 0.8s ease-in-out infinite;
}

@keyframes waveform-pulse {
  0%, 100% {
    transform: scaleY(0.4);
  }
  50% {
    transform: scaleY(1);
  }
}

.appointment-card {
  opacity: 0;
  transform: scale(0.7);
  animation: bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  60% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
