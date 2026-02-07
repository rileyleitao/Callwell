<template>
  <div class="min-h-screen bg-white pt-16 flex items-center justify-center px-4">
    <div class="text-center">
      <p class="text-purple-600 text-2xl mb-4">404</p>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p class="text-lg text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <router-link 
          to="/" 
          class="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors inline-block"
        >
          Go back home
        </router-link>
        <a 
          href="mailto:support@callwell.io" 
          class="text-gray-900 font-medium hover:underline"
        >
          Contact support →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 404 Not Found Page
</script>
