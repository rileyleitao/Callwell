<template>
  <footer class="bg-[#070709] text-white py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <LogoWhite class="w-8 h-8" />
            <h3 class="text-2xl font-bold">Callwell</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Copyright 2025 Callwell
          </p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white">Features</a></li>
            <li><a href="#" class="hover:text-white">Sign up for beta</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white">Team</a></li>
            <li><a href="#" class="hover:text-white">Blog</a></li>
            <li><a href="#" class="hover:text-white">Case Studies</a></li>
            <li><a href="#" class="hover:text-white">Privacy & Terms</a></li>
            <li><a href="#" class="hover:text-white">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Follow us</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white">Twitter / X</a></li>
            <li><a href="#" class="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LogoWhite from './LogoWhite.vue'
</script>
