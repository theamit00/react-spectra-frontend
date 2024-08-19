import React from 'react'

import ReviewSection from '@/components/ReviewSection/ReviewSection'
import FaqSection from '@/components/FaqSection/FaqSection'
import HeroSection from './HeroSection'
import GlideForEnterprise from './GlideForEnterprise'
import SpectraPlans from './SpectraPlans'

const Pricing = () => {
  return (
    <main>
      <HeroSection/>
      <GlideForEnterprise/>
      <SpectraPlans/>
      <ReviewSection/>
      <FaqSection/>
    </main>
  )
}

export default Pricing