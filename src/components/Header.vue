<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white border-b border-gray-200 shadow-sm'
        : 'bg-white/10 backdrop-blur-md border-b border-white/15'
    ]"
  >
    <nav class="w-full">
      <div class="flex items-center h-16">
        <!-- Logo on the left with spacing -->
        <div class="flex-shrink-0 flex items-center pl-4 sm:pl-6 lg:pl-8">
          <router-link to="/" aria-label="Callwell homepage">
            <Logo v-if="scrolled" class="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32" />
            <LogoWhite v-else class="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32" />
          </router-link>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="['md:hidden ml-auto mr-4 p-2 focus:outline-none', scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80']"
          aria-label="Toggle menu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
        
        <!-- Navigation Links with Dropdowns - Centered -->
        <div class="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <!-- Products Dropdown -->
            <div class="relative group">
              <span :class="[scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80', 'px-3 py-2 text-sm font-medium flex items-center cursor-pointer']">
                Products
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div :class="['absolute top-full left-0 mt-2 w-[90vw] max-w-[500px] rounded-2xl shadow-2xl p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200', scrolled ? 'bg-white border border-gray-200' : 'bg-gray-900/95 backdrop-blur-xl border border-white/20']">
                <div class="space-y-4">
                  <router-link to="/automated-call-answering" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div :class="['w-8 h-8 rounded flex items-center justify-center flex-shrink-0', scrolled ? 'bg-blue-100' : 'bg-white/15']">
                        <PhoneIcon :class="['w-5 h-5', scrolled ? 'text-blue-600' : 'text-white']" />
                      </div>
                      <div>
                        <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Call Answering</p>
                        <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">24/7 AI-powered call answering for service businesses</p>
                      </div>
                    </div>
                  </router-link>
                  <router-link to="/ai-appointment-scheduling" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div :class="['w-8 h-8 rounded flex items-center justify-center flex-shrink-0', scrolled ? 'bg-blue-100' : 'bg-white/15']">
                        <CalendarIcon :class="['w-5 h-5', scrolled ? 'text-blue-600' : 'text-white']" />
                      </div>
                      <div>
                        <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Appointment Booking</p>
                        <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Automated scheduling, rescheduling, and cancellations</p>
                      </div>
                    </div>
                  </router-link>
                  <router-link to="/emergency-call-routing" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div :class="['w-8 h-8 rounded flex items-center justify-center flex-shrink-0', scrolled ? 'bg-blue-100' : 'bg-white/15']">
                        <ExclamationTriangleIcon :class="['w-5 h-5', scrolled ? 'text-blue-600' : 'text-white']" />
                      </div>
                      <div>
                        <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Emergency Call Routing</p>
                        <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Intelligent escalations with human-in-the-loop verification</p>
                      </div>
                    </div>
                  </router-link>
                  <div class="block group/item opacity-50">
                    <div class="flex items-start space-x-3">
                      <div :class="['w-8 h-8 rounded flex items-center justify-center flex-shrink-0', scrolled ? 'bg-gray-100' : 'bg-white/10']">
                        <ChatBubbleLeftRightIcon :class="['w-5 h-5', scrolled ? 'text-gray-500' : 'text-white/60']" />
                      </div>
                      <div>
                        <div class="flex items-center space-x-2">
                          <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900' : 'text-white']">Text Messaging</p>
                          <span :class="['text-xs px-2 py-0.5 rounded-full', scrolled ? 'bg-gray-200 text-gray-600' : 'bg-white/15 text-white/70']">Coming Soon</span>
                        </div>
                        <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Automated SMS confirmations and follow-ups</p>
                      </div>
                    </div>
                  </div>
                  <div class="block group/item opacity-50">
                    <div class="flex items-start space-x-3">
                      <div :class="['w-8 h-8 rounded flex items-center justify-center flex-shrink-0', scrolled ? 'bg-gray-100' : 'bg-white/10']">
                        <SparklesIcon :class="['w-5 h-5', scrolled ? 'text-gray-500' : 'text-white/60']" />
                      </div>
                      <div>
                        <div class="flex items-center space-x-2">
                          <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900' : 'text-white']">Review Generation</p>
                          <span :class="['text-xs px-2 py-0.5 rounded-full', scrolled ? 'bg-gray-200 text-gray-600' : 'bg-white/15 text-white/70']">Coming Soon</span>
                        </div>
                        <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Automatically request reviews after appointments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Industries Dropdown -->
            <div class="relative group">
              <span :class="[scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80', 'px-3 py-2 text-sm font-medium flex items-center cursor-pointer']">
                Industries
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div :class="['absolute top-full left-0 mt-2 w-[90vw] max-w-[400px] rounded-2xl shadow-2xl p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200', scrolled ? 'bg-white border border-gray-200' : 'bg-gray-900/95 backdrop-blur-xl border border-white/20']">
                <div class="space-y-4">
                  <router-link to="/industries/plumbing-hvac" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Plumbing & HVAC</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for plumbers and heating & cooling companies</p>
                  </router-link>
                  <router-link to="/industries/electrician" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Electrician</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for electrical contractors</p>
                  </router-link>
                  <router-link to="/industries/window-door" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Window & Door Installation</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for window and door companies</p>
                  </router-link>
                  <router-link to="/industries/construction" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Construction & Contracting</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for general contractors</p>
                  </router-link>
                  <router-link to="/industries/dental-clinics" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Dental Clinics</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for dental practices</p>
                  </router-link>
                  <router-link to="/industries/medical-clinics" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Medical Clinics</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for medical practices</p>
                  </router-link>
                  <router-link to="/industries/physiotherapy-massage" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Physiotherapy & Massage</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">AI answering for PT and massage clinics</p>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Resources Dropdown -->
            <div class="relative group">
              <span :class="[scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80', 'px-3 py-2 text-sm font-medium flex items-center cursor-pointer']">
                Resources
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div :class="['absolute top-full left-0 mt-2 w-[90vw] max-w-[400px] rounded-2xl shadow-2xl p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200', scrolled ? 'bg-white border border-gray-200' : 'bg-gray-900/95 backdrop-blur-xl border border-white/20']">
                <div class="space-y-4">
                  <router-link to="/how-it-works" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">How It Works</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Learn about our automated office assistant</p>
                  </router-link>
                  <router-link to="/resources#faq" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">FAQ</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Answers to common questions about Callwell</p>
                  </router-link>
                  <router-link to="/blog" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Blog</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Tips and insights for service businesses</p>
                  </router-link>
                  <router-link to="/terms" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Terms of Service</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">Our terms and conditions</p>
                  </router-link>
                  <router-link to="/privacy" class="block group/item">
                    <p :class="['text-sm font-semibold', scrolled ? 'text-gray-900 group-hover/item:text-blue-600' : 'text-white group-hover/item:text-white/80']">Privacy Policy</p>
                    <p :class="['text-xs mt-1', scrolled ? 'text-gray-600' : 'text-white/70']">How we protect your data</p>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Pricing (no dropdown) -->
            <router-link to="/pricing" :class="[scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80', 'px-3 py-2 text-sm font-medium']">
              Pricing
            </router-link>
          </div>
        
        <!-- Right side: Language, Log in, Contact sales -->
        <div class="hidden md:flex items-center space-x-6 pr-4 sm:pr-6 lg:pr-8">
          <!-- Language selector -->
          <div :class="['flex items-center space-x-1 cursor-pointer', scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80']">
            <GlobeAltIcon class="w-5 h-5" />
            <span class="text-sm font-medium">EN</span>
            <ChevronDownIcon class="w-4 h-4" />
          </div>
          
          <!-- Log in -->
          <router-link to="/login" :class="['text-sm font-medium', scrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80']">
            Log in
          </router-link>
          
          <!-- Contact sales button -->
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Header Desktop')" :class="['px-4 py-2 rounded-full text-sm font-medium transition-colors inline-block', scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/15 text-white hover:bg-white/25 border border-white/20']">
            Contact sales
          </a>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" :class="['md:hidden', scrolled ? 'border-t border-gray-200 bg-white' : 'border-t border-white/15 bg-white/10 backdrop-blur-xl']">
        <div class="px-4 pt-2 pb-4 space-y-1">
          <div class="space-y-1">
            <router-link to="/products" :class="['block px-3 py-2 rounded-md text-base font-medium', scrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10']" @click="mobileMenuOpen = false">
              Products
            </router-link>
            <router-link to="/industries" :class="['block px-3 py-2 rounded-md text-base font-medium', scrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10']" @click="mobileMenuOpen = false">
              Industries
            </router-link>
            <router-link to="/resources" :class="['block px-3 py-2 rounded-md text-base font-medium', scrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10']" @click="mobileMenuOpen = false">
              Resources
            </router-link>
            <router-link to="/pricing" :class="['block px-3 py-2 rounded-md text-base font-medium', scrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10']" @click="mobileMenuOpen = false">
              Pricing
            </router-link>
          </div>
          <div :class="['pt-4 space-y-2', scrolled ? 'border-t border-gray-200' : 'border-t border-white/15']">
            <router-link to="/login" :class="['block px-3 py-2 rounded-md text-base font-medium', scrolled ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-white/10']">
              Log in
            </router-link>
            <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Header Mobile')" :class="['block w-full px-4 py-2 rounded-full text-sm font-medium transition-colors text-center', scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white/15 text-white hover:bg-white/25 border border-white/20']">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import LogoWhite from './LogoWhite.vue'
import { ChevronDownIcon, GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ChatBubbleLeftRightIcon, SparklesIcon, PhoneIcon, CalendarIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { trackContactSales } from '../composables/useAnalytics'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrollY = ref(0)

function onScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

// Only use Glass UI on the home page when at the top; solid white everywhere else
const isHomePage = computed(() => route.path === '/')
const scrolled = computed(() => !isHomePage.value || scrollY.value > 50)
</script>
