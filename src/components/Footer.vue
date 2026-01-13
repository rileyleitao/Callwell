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
          <h4 class="font-semibold mb-4">Follow us</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white">Twitter / X</a></li>
            <li><a href="#" class="hover:text-white">LinkedIn</a></li>
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
