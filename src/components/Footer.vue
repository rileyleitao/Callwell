<template>
  <footer class="bg-[#070709] text-white py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-20 lg:gap-32 xl:gap-40 mb-8">
        <div class="text-center">
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/products" class="hover:text-white">Products</router-link></li>
            <li><router-link to="/how-it-works" class="hover:text-white">How it works</router-link></li>
          </ul>
        </div>
        <div class="text-center">
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/solutions" class="hover:text-white">Solutions</router-link></li>
            <li><router-link to="/pricing" class="hover:text-white">Pricing</router-link></li>
            <li><router-link to="/automated-call-answering" class="hover:text-white">Call Answering</router-link></li>
            <li><router-link to="/ai-appointment-scheduling" class="hover:text-white">Appointment Scheduling</router-link></li>
          </ul>
        </div>
        <div class="text-center">
          <h4 class="font-semibold mb-4">Industries</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/industries/plumbing-hvac" class="hover:text-white">Plumbing & HVAC</router-link></li>
            <li><router-link to="/industries/electrician" class="hover:text-white">Electrician</router-link></li>
            <li><router-link to="/industries/window-door" class="hover:text-white">Window & Door</router-link></li>
            <li><router-link to="/industries/construction" class="hover:text-white">Construction</router-link></li>
            <li><router-link to="/industries/dental-clinics" class="hover:text-white">Dental Clinics</router-link></li>
            <li><router-link to="/industries/medical-clinics" class="hover:text-white">Medical Clinics</router-link></li>
            <li><router-link to="/industries/physiotherapy-massage" class="hover:text-white">Physiotherapy & Massage</router-link></li>
          </ul>
        </div>
        <div class="text-center">
          <h4 class="font-semibold mb-4">Resources</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/how-it-works" class="hover:text-white">How It Works</router-link></li>
            <li><router-link to="/faq" class="hover:text-white">FAQ</router-link></li>
            <li><router-link to="/blog" class="hover:text-white">Blog</router-link></li>
            <li><router-link to="/terms" class="hover:text-white">Terms of Service</router-link></li>
            <li><router-link to="/privacy" class="hover:text-white">Privacy Policy</router-link></li>
          </ul>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/" class="inline-block mb-4">
          <LogoWhite class="w-48 h-48" />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoWhite from './LogoWhite.vue'
</script>
