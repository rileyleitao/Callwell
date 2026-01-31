<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-show="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50" @click="close" />

        <!-- Modal content - full screen on mobile -->
        <div
          class="relative w-full bg-white overflow-y-auto sm:max-w-lg sm:rounded-xl sm:shadow-xl sm:max-h-[90vh]"
          :class="isMobile ? 'h-full rounded-none' : 'max-w-md rounded-lg shadow-xl max-h-[90vh]'"
        >
          <!-- Close button -->
          <button
            type="button"
            class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors z-10"
            @click="close"
            aria-label="Close"
          >
            <XMarkIcon class="w-5 h-5" />
          </button>

          <div class="p-6 sm:p-8">
            <!-- Form step -->
            <div v-if="!submitted">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Try the Callwell Demo
              </h3>
              <p class="text-gray-600 mb-6">
                Enter your details to get our demo phone number and experience our AI assistant.
              </p>

              <form
                ref="formRef"
                class="space-y-4"
                @submit.prevent="handleSubmit"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      id="firstName"
                      v-model="firstName"
                      type="text"
                      name="firstName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      id="lastName"
                      v-model="lastName"
                      type="text"
                      name="lastName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    id="phoneNumber"
                    v-model="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    inputmode="numeric"
                    required
                    :class="[
                      'w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent',
                      phoneError ? 'border-red-500' : 'border-gray-300'
                    ]"
                    placeholder="5551234567"
                    @input="onPhoneInput"
                  />
                  <p v-if="phoneError" class="mt-1 text-sm text-red-600">{{ phoneError }}</p>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-indigo-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting ? 'Submitting...' : 'Get Demo Number' }}
                </button>
              </form>
            </div>

            <!-- Success step - show phone number -->
            <div v-else class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon class="w-8 h-8 text-green-600" />
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                You're all set!
              </h3>
              <p class="text-gray-600 mb-6">
                Call our demo number to experience Callwell's AI assistant.
              </p>
              <p class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-mono">
                (825) 949-1040
              </p>
              <a
                href="tel:+18259491040"
                class="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-4 rounded-md text-base font-semibold hover:bg-indigo-700 transition-colors"
              >
                <PhoneIcon class="w-5 h-5" />
                Call Demo Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { XMarkIcon, CheckCircleIcon, PhoneIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const email = ref('')
const submitted = ref(false)
const isSubmitting = ref(false)
const formRef = ref(null)
const phoneError = ref('')

const onPhoneInput = (e) => {
  const digits = e.target.value.replace(/\D/g, '')
  phoneNumber.value = digits
  phoneError.value = ''
}

const isValidPhone = (value) => {
  const digits = (value || '').replace(/\D/g, '')
  return digits.length >= 10
}

const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth < 640
}

const close = () => {
  isOpen.value = false
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  phoneError.value = ''
  if (!isValidPhone(phoneNumber.value)) {
    phoneError.value = 'Please enter a valid phone number with at least 10 digits'
    return
  }

  isSubmitting.value = true

  try {
    // Sync Vue values to form inputs for Apollo (Apollo reads from DOM)
    if (formRef.value) {
      const inputs = formRef.value.querySelectorAll('input')
      inputs.forEach((input) => {
        const name = input.name
        if (name === 'firstName') input.value = firstName.value
        if (name === 'lastName') input.value = lastName.value
        if (name === 'phoneNumber') input.value = phoneNumber.value
        if (name === 'email') input.value = email.value
      })
    }

    // Allow Apollo form enrichment to process (brief delay for validation)
    await new Promise(resolve => setTimeout(resolve, 500))

    submitted.value = true
  } finally {
    isSubmitting.value = false
  }
}

watch(isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    checkMobile()
    window.addEventListener('resize', checkMobile)
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('resize', checkMobile)
  }
})

// Reset form when modal closes
watch(isOpen, (open) => {
  if (!open) {
    submitted.value = false
    firstName.value = ''
    lastName.value = ''
    phoneNumber.value = ''
    email.value = ''
    phoneError.value = ''
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}

@media (max-width: 639px) {
  .fixed.inset-0 {
    padding: 0;
    align-items: stretch;
  }
}
</style>
