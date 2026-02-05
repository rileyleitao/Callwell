<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <router-link to="/" class="inline-block">
          <img src="/CallwellCircleLogo.png" alt="Callwell" class="mx-auto w-24 h-24" loading="lazy" decoding="async" width="96" height="96" />
        </router-link>
      </div>
      
      <!-- Login Card -->
      <div class="bg-white rounded-lg shadow-sm p-8 sm:p-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Sign in to your account
        </h2>
        
        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              v-model="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          
          <!-- Password Field -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <!-- TODO: Add forgot password functionality
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
              -->
            </div>
            <input
              id="password"
              type="password"
              v-model="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          
          <!-- Remember Me -->
          <div class="flex items-center">
            <input
              id="remember"
              type="checkbox"
              v-model="rememberMe"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="remember" class="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <!-- Sign In Button -->
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Sign in
          </button>
        </form>
        
        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <!-- Google Login Button -->
        <button
          @click="handleGoogleLogin"
          class="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Google</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  // Handle login logic here
  console.log('Login attempt:', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  // For now, just prevent default form submission
}

const handleGoogleLogin = () => {
  // Handle Google login logic here
  console.log('Google login attempt')
  // Redirect to Google OAuth or handle authentication
}
</script>
