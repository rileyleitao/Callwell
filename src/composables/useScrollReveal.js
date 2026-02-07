import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Intersection Observer composable for scroll-triggered animations.
 * Returns a template ref to attach to an element and a reactive `isVisible` flag.
 * @param {Object} options
 * @param {number} options.threshold - visibility threshold (0-1), default 0.15
 * @param {string} options.rootMargin - root margin, default '0px 0px -50px 0px'
 * @param {boolean} options.once - only trigger once, default true
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', once = true } = options
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (once && observer) {
            observer.disconnect()
          }
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}

/**
 * Animated counter composable. Counts from 0 to `end` when `start` is true.
 * @param {number} end - target number
 * @param {number} duration - animation duration in ms
 * @param {string} suffix - suffix to append (e.g. '%')
 * @param {string} prefix - prefix to prepend (e.g. '<')
 */
export function useCounter(end, duration = 1500, suffix = '', prefix = '') {
  const decimals = String(end).includes('.') ? String(end).split('.')[1].length : 0
  const display = ref(prefix + '0' + suffix)
  let started = false

  function start() {
    if (started) return
    started = true
    const startTime = performance.now()
    function update(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = (eased * end).toFixed(decimals)
      display.value = prefix + current + suffix
      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        display.value = prefix + end + suffix
      }
    }
    requestAnimationFrame(update)
  }

  return { display, start }
}
