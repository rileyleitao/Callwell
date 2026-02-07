import { ref, onMounted } from 'vue'

/**
 * Typewriter effect: reveals text character by character
 * @param {string} text - Full text to type
 * @param {number} speed - ms per character
 * @returns {{ displayedText: Ref<string>, isComplete: Ref<boolean> }}
 */
export function useTypewriter(text, speed = 50) {
  const displayedText = ref('')
  const isComplete = ref(false)

  onMounted(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        displayedText.value += text[i]
        i++
      } else {
        isComplete.value = true
        clearInterval(interval)
      }
    }, speed)
  })

  return { displayedText, isComplete }
}
