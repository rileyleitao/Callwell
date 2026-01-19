<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Blog Header -->
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="mb-10">
        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">From the Blog</h1>
        <p class="mt-2 text-lg text-gray-600">Learn how to grow your service business with our expert advice.</p>
      </div>

      <div class="border-t border-gray-200 pt-10">
        <!-- Blog Posts List -->
        <div class="space-y-16">
          <article v-for="post in posts" :key="post.slug" class="group">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.date" class="text-gray-500">{{ formatDate(post.date) }}</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {{ post.category }}
              </span>
            </div>
            <div class="relative">
              <h2 class="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                <router-link :to="`/blog/${post.slug}`">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </router-link>
              </h2>
              <p class="mt-3 text-sm text-gray-600 line-clamp-3">{{ post.excerpt }}</p>
            </div>
            <div class="mt-6 flex items-center gap-x-4">
              <div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <UserIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="text-sm">
                <p class="font-semibold text-gray-900">{{ post.author.name }}</p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Coming Soon Message if no posts -->
      <div v-if="posts.length === 0" class="text-center py-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
        <p class="text-gray-600">We're working on great content for service businesses. Check back soon!</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-50 py-12 sm:py-16">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to never miss a call?</h2>
        <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          See how Callwell can help your service business capture more leads.
        </p>
        <a href="https://calendly.com/riley-callwell/callwell-demo" target="_blank" rel="noopener noreferrer" @click="trackContactSales('Blog Page')" class="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
          Contact Sales
        </a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { UserIcon } from '@heroicons/vue/24/solid'
import { trackContactSales } from '../composables/useAnalytics'

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// Blog posts data - can be moved to a separate file or CMS later
const posts = [
  {
    slug: 'why-service-businesses-miss-calls',
    title: 'Why Service Businesses Miss 40% of Their Calls (And How to Fix It)',
    excerpt: 'Studies show that service businesses miss nearly half of incoming calls. Learn why this happens and how AI-powered call answering can help you capture every lead.',
    date: '2025-01-15',
    category: 'Business Growth',
    author: {
      name: 'Riley Leitao',
      role: 'Founder'
    }
  },
  {
    slug: 'ai-vs-traditional-answering-services',
    title: 'AI vs Traditional Answering Services: Which Is Right for Your Business?',
    excerpt: 'Compare the costs, capabilities, and customer experience between AI-powered virtual receptionists and traditional call centers for service businesses.',
    date: '2025-01-10',
    category: 'Industry Insights',
    author: {
      name: 'Riley Leitao',
      role: 'Founder'
    }
  },
  {
    slug: 'after-hours-calls-revenue',
    title: 'How After-Hours Calls Impact Your Revenue',
    excerpt: 'Most emergency service calls come outside business hours. Discover how much revenue you could be losing and strategies to capture these high-value opportunities.',
    date: '2025-01-05',
    category: 'Revenue',
    author: {
      name: 'Riley Leitao',
      role: 'Founder'
    }
  }
]
</script>
