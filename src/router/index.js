import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PricingPage from '../components/PricingPage.vue'
import HowItWorksPage from '../pages/HowItWorksPage.vue'
import CallAnsweringPage from '../pages/CallAnsweringPage.vue'
import AppointmentBookingPage from '../pages/AppointmentBookingPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import SolutionsPage from '../pages/SolutionsPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import EmergencyCallRoutingPage from '../pages/EmergencyCallRoutingPage.vue'
import FAQPage from '../pages/FAQPage.vue'
import PlumbingPage from '../pages/PlumbingPage.vue'
import HVACPage from '../pages/HVACPage.vue'
import ElectricianPage from '../pages/ElectricianPage.vue'
import RoofingPage from '../pages/RoofingPage.vue'
import ConstructionPage from '../pages/ConstructionPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Callwell - AI Office Assistant',
      description: 'Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingPage,
    meta: {
      title: 'Pricing | Callwell',
      description: 'Choose the perfect plan for your service business. All plans include 24/7 AI call answering and automated appointment booking.'
    }
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksPage,
    meta: {
      title: 'Your Automated Office Assistant for Calls & Scheduling | Callwell',
      description: 'A virtual office assistant that never misses a call, books appointments automatically, and handles scheduling 24/7. Perfect for service businesses.'
    }
  },
  {
    path: '/automated-call-answering',
    name: 'CallAnswering',
    component: CallAnsweringPage,
    meta: {
      title: 'Automated Call Answering for Service Businesses | Callwell',
      description: 'Never miss another call. Our software that answers calls and books appointments automatically handles every customer interaction, 24/7.'
    }
  },
  {
    path: '/ai-appointment-scheduling',
    name: 'AppointmentBooking',
    component: AppointmentBookingPage,
    meta: {
      title: 'AI That Schedules Appointments Automatically | Callwell',
      description: 'An automated booking system for service businesses that handles scheduling, cancellations, and waitlists—all without human intervention.'
    }
  },
  {
    path: '/emergency-call-routing',
    name: 'EmergencyCallRouting',
    component: EmergencyCallRoutingPage,
    meta: {
      title: 'Intelligent Escalations for Emergency Calls | Callwell',
      description: 'Never miss an emergency. Our intelligent routing system automatically detects urgent calls and escalates them to your team with human-in-the-loop verification.'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
    meta: {
      title: 'Products | Callwell',
      description: 'Complete AI-powered solutions to handle calls, book appointments, and grow your service business—all automatically.'
    }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: SolutionsPage,
    meta: {
      title: 'Solutions for Service Businesses | Callwell',
      description: 'From after-hours calls to peak demand periods, Callwell handles every scenario so you never miss a booking opportunity.'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQPage,
    meta: {
      title: 'Frequently Asked Questions | Callwell',
      description: 'Find answers to common questions about Callwell AI office assistant, pricing, setup, and support.'
    }
  },
  {
    path: '/industries/plumbing',
    name: 'Plumbing',
    component: PlumbingPage,
    meta: {
      title: 'AI Answering Service for Plumbers | Callwell',
      description: 'Never miss a plumbing call. AI phone answering for plumbing companies handles emergency calls, books service appointments, and dispatches plumbers 24/7.'
    }
  },
  {
    path: '/industries/hvac',
    name: 'HVAC',
    component: HVACPage,
    meta: {
      title: 'AI Answering Service for HVAC Companies | Callwell',
      description: 'Never miss an HVAC call. AI phone answering for heating and cooling companies handles AC repairs, furnace emergencies, and books service appointments 24/7.'
    }
  },
  {
    path: '/industries/electrician',
    name: 'Electrician',
    component: ElectricianPage,
    meta: {
      title: 'AI Answering Service for Electricians | Callwell',
      description: 'Never miss an electrical call. AI phone answering for electrical contractors handles emergency calls, books service appointments, and dispatches electricians 24/7.'
    }
  },
  {
    path: '/industries/roofing',
    name: 'Roofing',
    component: RoofingPage,
    meta: {
      title: 'AI Answering Service for Roofing Companies | Callwell',
      description: 'Never miss a roofing lead. AI phone answering for roofers handles storm damage calls, books estimates, and captures leads 24/7.'
    }
  },
  {
    path: '/industries/construction',
    name: 'Construction',
    component: ConstructionPage,
    meta: {
      title: 'AI Answering Service for Contractors | Callwell',
      description: 'Never miss a construction lead. AI phone answering for general contractors handles project inquiries, books consultations, and captures leads 24/7.'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Sign in to your account | Callwell',
      description: 'Sign in to your Callwell account to manage your AI office assistant settings.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: '404 - Page Not Found | Callwell',
      description: 'The page you are looking for could not be found.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  // Update title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', to.meta.description || 'Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.')
  
  // Update or create Open Graph tags
  const updateOrCreateMeta = (property, content) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }
  
  const url = `https://callwell.io${to.path}`
  const title = to.meta.title || 'Callwell - AI Office Assistant'
  const description = to.meta.description || 'Callwell is an AI office assistant that acts as a virtual front desk—answering calls, booking appointments, and managing scheduling when your team is unavailable.'
  const image = 'https://callwell.io/PlumbingHeroimage.png'
  
  updateOrCreateMeta('og:title', title)
  updateOrCreateMeta('og:description', description)
  updateOrCreateMeta('og:url', url)
  updateOrCreateMeta('og:type', 'website')
  updateOrCreateMeta('og:image', image)
  updateOrCreateMeta('og:site_name', 'Callwell')
  
  // Update or create Twitter Card tags
  const updateOrCreateTwitterMeta = (name, content) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', name)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }
  
  updateOrCreateTwitterMeta('twitter:card', 'summary_large_image')
  updateOrCreateTwitterMeta('twitter:title', title)
  updateOrCreateTwitterMeta('twitter:description', description)
  updateOrCreateTwitterMeta('twitter:image', image)
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
  
  next()
})

export default router
