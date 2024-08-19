import React from 'react'
import HomeSection from './HeroSection'
import TeamsUseSpectraSection from './TeamsUseSpectraSection'
import PowerfulSolutionSection from './PowerfulSolutionSection'
import CoreFeatureSection from './CoreFeatureSection'
import BuildYourSiteSection from './BuildYourSiteSection'
import AnalyticsSection from './AnalyticsEction.jsx/AnalyticsSection'
import SpectraFeatures from './SpectraFeatures/SpectraFeatures'
import ReviewSection from '../../components/ReviewSection/ReviewSection'
import TrialSection from './TrialSection/TrialSection'
import TestimonialSection from './TestimonialSection'


const Home = () => {
  return (
    <main className='overflow-hidden' >
      <HomeSection/>
      <TeamsUseSpectraSection/>
      <PowerfulSolutionSection/>
      <CoreFeatureSection/>
      <BuildYourSiteSection />
      <AnalyticsSection />
      <SpectraFeatures />
      <ReviewSection />
      <TrialSection />
      <TestimonialSection/>
    </main>
  )
}

export default Home