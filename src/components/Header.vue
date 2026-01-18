<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <nav class="w-full">
      <div class="flex items-center h-16">
        <!-- Logo on the left with spacing -->
        <div class="flex-shrink-0 flex items-center pl-4 sm:pl-6 lg:pl-8">
          <router-link to="/">
            <Logo class="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gray-900" />
          </router-link>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden ml-auto mr-4 p-2 text-gray-900 hover:text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
        
        <!-- Navigation Links with Dropdowns - Centered -->
        <div class="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <!-- Products Dropdown -->
            <div class="relative group">
              <span class="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium flex items-center cursor-pointer">
                Products
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-[90vw] max-w-[500px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="space-y-4">
                  <router-link to="/automated-call-answering" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                        <PhoneIcon class="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Call Answering</h4>
                        <p class="text-xs text-gray-600 mt-1">24/7 AI-powered call answering for service businesses</p>
                      </div>
                    </div>
                  </router-link>
                  <router-link to="/ai-appointment-scheduling" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                        <CalendarIcon class="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Appointment Booking</h4>
                        <p class="text-xs text-gray-600 mt-1">Automated scheduling, rescheduling, and cancellations</p>
                      </div>
                    </div>
                  </router-link>
                  <router-link to="/emergency-call-routing" class="block group/item">
                    <div class="flex items-start space-x-3">
                      <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                        <ExclamationTriangleIcon class="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Emergency Call Routing</h4>
                        <p class="text-xs text-gray-600 mt-1">Intelligent escalations with human-in-the-loop verification</p>
                      </div>
                    </div>
                  </router-link>
                  <div class="block group/item opacity-60">
                    <div class="flex items-start space-x-3">
                      <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <ChatBubbleLeftRightIcon class="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <div class="flex items-center space-x-2">
                          <h4 class="text-sm font-semibold text-gray-900">Text Messaging</h4>
                          <span class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                        <p class="text-xs text-gray-600 mt-1">Automated SMS confirmations and follow-ups</p>
                      </div>
                    </div>
                  </div>
                  <div class="block group/item opacity-60">
                    <div class="flex items-start space-x-3">
                      <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <SparklesIcon class="w-5 h-5 text-gray-500" />
                      </div>
                      <div>
                        <div class="flex items-center space-x-2">
                          <h4 class="text-sm font-semibold text-gray-900">Review Generation</h4>
                          <span class="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Coming Soon</span>
                        </div>
                        <p class="text-xs text-gray-600 mt-1">Automatically request reviews after appointments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Industries Dropdown -->
            <div class="relative group">
              <span class="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium flex items-center cursor-pointer">
                Industries
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-[90vw] max-w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="space-y-4">
                  <router-link to="/industries/plumbing" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Plumbing</h4>
                    <p class="text-xs text-gray-600 mt-1">AI answering for plumbers and plumbing companies</p>
                  </router-link>
                  <router-link to="/industries/hvac" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">HVAC</h4>
                    <p class="text-xs text-gray-600 mt-1">AI answering for heating and cooling companies</p>
                  </router-link>
                  <router-link to="/industries/electrician" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Electrician</h4>
                    <p class="text-xs text-gray-600 mt-1">AI answering for electrical contractors</p>
                  </router-link>
                  <router-link to="/industries/roofing" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Roofing</h4>
                    <p class="text-xs text-gray-600 mt-1">AI answering for roofing companies</p>
                  </router-link>
                  <router-link to="/industries/construction" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">Construction & Contracting</h4>
                    <p class="text-xs text-gray-600 mt-1">AI answering for general contractors</p>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Resources Dropdown -->
            <div class="relative group">
              <span class="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium flex items-center cursor-pointer">
                Resources
                <ChevronDownIcon class="w-4 h-4 ml-1" />
              </span>
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 mt-2 w-[90vw] max-w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="space-y-4">
                  <router-link to="/how-it-works" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">How It Works</h4>
                    <p class="text-xs text-gray-600 mt-1">Learn about our automated office assistant</p>
                  </router-link>
                  <router-link to="/faq" class="block group/item">
                    <h4 class="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600">FAQ</h4>
                    <p class="text-xs text-gray-600 mt-1">Answers to common questions about Callwell</p>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Pricing (no dropdown) -->
            <router-link to="/pricing" class="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Pricing
            </router-link>
          </div>
        
        <!-- Right side: Language, Log in, Contact sales -->
        <div class="hidden md:flex items-center space-x-6 pr-4 sm:pr-6 lg:pr-8">
          <!-- Language selector -->
          <div class="flex items-center space-x-1 text-gray-900 hover:text-gray-700 cursor-pointer">
            <GlobeAltIcon class="w-5 h-5" />
            <span class="text-sm font-medium">EN</span>
            <ChevronDownIcon class="w-4 h-4" />
          </div>
          
          <!-- Log in -->
          <router-link to="/login" class="text-gray-900 hover:text-gray-700 text-sm font-medium">
            Log in
          </router-link>
          
          <!-- Contact sales button -->
          <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Header Desktop')" class="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors inline-block">
            Contact sales
          </a>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white">
        <div class="px-4 pt-2 pb-4 space-y-1">
          <!-- Mobile navigation items -->
          <div class="space-y-1">
            <router-link to="/products" class="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
              Products
            </router-link>
            <router-link to="/industries/plumbing" class="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
              Industries
            </router-link>
            <router-link to="/how-it-works" class="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
              Resources
            </router-link>
            <router-link to="/pricing" class="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
              Pricing
            </router-link>
          </div>
          <div class="pt-4 border-t border-gray-200 space-y-2">
            <router-link to="/login" class="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium">
              Log in
            </router-link>
            <a href="https://calendly.com/rileyleitao/30min" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Header Mobile')" class="block w-full bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors text-center">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
import { ChevronDownIcon, GlobeAltIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ChatBubbleLeftRightIcon, SparklesIcon, PhoneIcon, CalendarIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { trackContactSales } from '../composables/useAnalytics'

const mobileMenuOpen = ref(false)
</script>
