<template>
  <div class="min-h-screen bg-white pt-16">
    <Header />

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="text-center mb-12 sm:mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Resources
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Learn how Callwell works, get answers to common questions, and find our latest updates and legal information.
        </p>
      </div>

      <!-- Resources Grid -->
      <section class="max-w-4xl mx-auto">
        <ul class="space-y-2">
          <li v-for="resource in resources" :key="resource.path">
            <router-link
              :to="resource.path"
              class="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 rounded-lg border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-colors group"
            >
              <span class="font-semibold text-base sm:text-lg group-hover:text-blue-600">{{ resource.name }}</span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </li>
        </ul>
      </section>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const resources = [
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Blog', path: '/blog' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' }
]
</script>
