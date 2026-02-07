<template>
  <section class="relative w-full overflow-hidden h-screen bg-gray-900">
    <!-- Background video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover object-[20%_center] sm:object-center"
      poster=""
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Film grain overlay -->
    <div class="grain-overlay absolute inset-0 z-[1] pointer-events-none opacity-40 mix-blend-overlay"></div>

    <!-- SVG noise filter (hidden) -->
    <svg class="hidden">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </svg>

    <!-- Content — push text toward top so chat doesn't overlap -->
    <div class="relative z-[2] flex flex-col items-center justify-start h-full px-4 sm:px-6 lg:px-8 text-center pt-44 sm:pt-32 lg:pt-36">
      <!-- Beta Badge -->
      <div class="flex items-center gap-3 mb-6">
        <span class="bg-white/15 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/25">
          In Beta
        </span>
        <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" class="text-white/80 text-sm font-medium hover:text-white inline-flex items-center gap-1 transition-colors">
          Try for a limited time
          <ArrowRightIcon class="w-4 h-4" />
        </a>
      </div>

      <!-- Heading (static text, no typewriter) -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
        Never Miss Another Booking
      </h1>

      <!-- CTA -->
      <div class="mt-8 sm:mt-10">
        <a
          href="https://calendly.com/rileyleitao/30min"
          target="_blank"
          rel="noopener noreferrer"
          @click="trackContactSales('Hero Section')"
          class="bg-white text-gray-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
        >
          Contact Sales
        </a>
      </div>
    </div>

    <!-- Chat-style booking popup -->
    <!-- Mobile: bottom-center, nearly full width. Desktop: bottom-right, fixed width -->
    <div class="absolute left-3 right-3 sm:left-auto sm:bottom-10 sm:right-10 z-[3] sm:w-80" style="bottom: max(5rem, calc(env(safe-area-inset-bottom, 0px) + 2.5rem))">
      <div class="chat-stack flex flex-col justify-end gap-2.5 sm:gap-3" :class="{ 'is-fading': isFadingOut }">
        <!-- Step 1: Callwell greeting (left-aligned) -->
        <div
          v-show="step1Visible"
          class="flex justify-start chat-msg"
          :class="{ 'chat-msg-in': showStep1, 'chat-msg-out': !showStep1 && step1Visible }"
          @transitionend="onStep1TransitionEnd"
        >
          <div class="bg-white/10 backdrop-blur-md rounded-2xl rounded-bl-sm border border-white/20 p-3 sm:p-3.5 shadow-2xl w-[80%] sm:max-w-[85%] sm:w-auto">
            <div class="flex items-center gap-2 mb-1.5">
              <img src="/CallwellCircleLogo.png" alt="Callwell" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0 object-cover" />
              <span class="text-white/70 text-xs font-medium">Callwell</span>
            </div>
            <p class="text-white text-sm leading-relaxed">
              Hi there! How can I help you today?
            </p>
          </div>
        </div>

        <!-- Step 2: Customer question (right-aligned) -->
        <div
          v-show="step2Visible"
          class="flex justify-end chat-msg"
          :class="{ 'chat-msg-in': showStep2, 'chat-msg-out': !showStep2 && step2Visible }"
          @transitionend="onStep2TransitionEnd"
        >
          <div class="bg-white/20 backdrop-blur-md rounded-2xl rounded-br-sm border border-white/25 p-3 sm:p-3.5 shadow-2xl w-[80%] sm:max-w-[85%] sm:w-auto">
            <div class="flex items-center gap-2 mb-1.5 justify-end">
              <span class="text-white/70 text-xs font-medium">Jason</span>
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                <PhoneIcon class="w-3 h-3 text-white" />
              </div>
            </div>
            <p class="text-white text-sm leading-relaxed text-right">
              I need to book a furnace inspection.
            </p>
          </div>
        </div>

        <!-- Step 3: Agent response (left-aligned) -->
        <div
          v-show="step3Visible"
          class="flex justify-start chat-msg"
          :class="{ 'chat-msg-in': showStep3, 'chat-msg-out': !showStep3 && step3Visible }"
          @transitionend="onStep3TransitionEnd"
        >
          <div class="bg-white/10 backdrop-blur-md rounded-2xl rounded-bl-sm border border-white/20 p-3 sm:p-3.5 shadow-2xl w-[80%] sm:max-w-[85%] sm:w-auto">
            <div class="flex items-center gap-2 mb-1.5">
              <img src="/CallwellCircleLogo.png" alt="Callwell" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0 object-cover" />
              <span class="text-white/70 text-xs font-medium">Callwell</span>
            </div>
            <p class="text-white text-sm leading-relaxed">
              I have Tuesday at 9 AM — I'll book you in for then!
            </p>
          </div>
        </div>

        <!-- Step 4: Booked confirmation -->
        <div
          v-show="step4Visible"
          class="chat-msg"
          :class="{ 'chat-msg-in': showStep4, 'chat-msg-out': !showStep4 && step4Visible }"
          @transitionend="onStep4TransitionEnd"
        >
          <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-3 sm:p-3.5 shadow-2xl">
            <div class="flex items-center gap-2 mb-2.5">
              <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <CheckIcon class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <span class="text-green-300 text-xs font-semibold">Appointment Booked</span>
            </div>
            <div class="space-y-1.5 text-sm">
              <div class="flex justify-between">
                <span class="text-white/60">Service</span>
                <span class="text-white font-medium">Furnace Inspection</span>
              </div>
              <div class="flex justify-between">
                <span class="text-white/60">Date</span>
                <span class="text-white font-medium">Tue, Jan 20</span>
              </div>
              <div class="flex justify-between">
                <span class="text-white/60">Time</span>
                <span class="text-white font-medium">9:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { PhoneIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { trackContactSales } from '../composables/useAnalytics'

// Each step has two flags:
// - showStepN: drives the enter/exit animation (true = visible state, false = fading out)
// - stepNVisible: controls v-show, only set to false AFTER the exit transition finishes
const showStep1 = ref(false)
const showStep2 = ref(false)
const showStep3 = ref(false)
const showStep4 = ref(false)

const step1Visible = ref(false)
const step2Visible = ref(false)
const step3Visible = ref(false)
const step4Visible = ref(false)

const isFadingOut = ref(false)

function showMsg(step) {
  if (step === 1) { step1Visible.value = true; requestAnimationFrame(() => { showStep1.value = true }) }
  if (step === 2) { step2Visible.value = true; requestAnimationFrame(() => { showStep2.value = true }) }
  if (step === 3) { step3Visible.value = true; requestAnimationFrame(() => { showStep3.value = true }) }
  if (step === 4) { step4Visible.value = true; requestAnimationFrame(() => { showStep4.value = true }) }
}

function hideMsg(step) {
  if (step === 1) showStep1.value = false
  if (step === 2) showStep2.value = false
  if (step === 3) showStep3.value = false
  if (step === 4) showStep4.value = false
}

// After leave transition ends, fully remove from layout
function onStep1TransitionEnd() { if (!showStep1.value) step1Visible.value = false }
function onStep2TransitionEnd() { if (!showStep2.value) step2Visible.value = false }
function onStep3TransitionEnd() { if (!showStep3.value) step3Visible.value = false }
function onStep4TransitionEnd() { if (!showStep4.value) step4Visible.value = false }

function resetAll() {
  showStep1.value = false; step1Visible.value = false
  showStep2.value = false; step2Visible.value = false
  showStep3.value = false; step3Visible.value = false
  showStep4.value = false; step4Visible.value = false
  isFadingOut.value = false
}

function runBookingCycle() {
  resetAll()

  // Step 1: Callwell greeting
  setTimeout(() => showMsg(1), 1000)
  // Step 2: Customer asks for service
  setTimeout(() => showMsg(2), 2800)
  // Step 3: Callwell response — fade out step 1 first, then show step 3
  setTimeout(() => {
    hideMsg(1)
    setTimeout(() => showMsg(3), 450)
  }, 4800)
  // Step 4: Booked confirmation — fade out step 2 first, then show step 4
  setTimeout(() => {
    hideMsg(2)
    setTimeout(() => showMsg(4), 450)
  }, 6800)
  // Fade out remaining cards
  setTimeout(() => { isFadingOut.value = true }, 9500)
  // Clear and restart cycle
  setTimeout(() => {
    resetAll()
    setTimeout(runBookingCycle, 1500)
  }, 10300)
}

onMounted(() => {
  runBookingCycle()
})

const emit = defineEmits(['openDemo'])
</script>

<style scoped>
/* Film grain noise */
.grain-overlay {
  filter: url(#grain);
  width: 100%;
  height: 100%;
}

/* Stack container: fades out all cards together */
.chat-stack {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.chat-stack.is-fading {
  opacity: 0;
  transform: translateY(-16px);
}

/* iMessage-style slide up for new messages */
.chat-msg {
  opacity: 0;
  transform: translateY(80px);
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
  transition: transform 3s cubic-bezier(0.05, 0.7, 0.1, 1),
              opacity 1.6s cubic-bezier(0.05, 0.7, 0.1, 1) 0.2s,
              max-height 2.5s cubic-bezier(0.05, 0.7, 0.1, 1);
}
.chat-msg.chat-msg-in {
  opacity: 1;
  transform: translateY(0);
  max-height: 250px;
}
.chat-msg.chat-msg-out {
  opacity: 0;
  transform: translateY(-12px);
  max-height: 0;
  transition: opacity 0.5s ease-out,
              transform 0.7s ease-out,
              max-height 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}
</style>
