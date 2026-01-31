<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <HeroSection @open-demo="showDemoModal = true" />
      <HeroCTASection />
      <FeaturesBentoSection />
      <ProblemSection />
      <IntegrationsSection />
      <FeaturesGridSection />
      <StatsSection />
      <CTASection />
    </main>
    <Footer />
    <DemoModal v-model="showDemoModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import DemoModal from '../components/DemoModal.vue'
import HeroSection from '../components/HeroSection.vue'
import HeroCTASection from '../components/HeroCTASection.vue'
import ProblemSection from '../components/ProblemSection.vue'
import IntegrationsSection from '../components/IntegrationsSection.vue'
import FeaturesBentoSection from '../components/FeaturesBentoSection.vue'
import FeaturesGridSection from '../components/FeaturesGridSection.vue'
import StatsSection from '../components/StatsSection.vue'
import CTASection from '../components/CTASection.vue'
import Footer from '../components/Footer.vue'

const showDemoModal = ref(false)
</script>
