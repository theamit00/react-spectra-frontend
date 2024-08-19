import React from 'react'
import HeroSection from './HeroSection'
import CompanyUseSpectraSection from './CompanyUseSpectraSection'
import AtSpectraCompanySection from './AtSpectraCompanySection'
import CompaniesSolveProblemsSection from './CompaniesSolveProblemsSection'
import CompanyValueSection from './CompanyValueSection'
import OurCultureSection from './OurCultureSection'
import OurTeamSection from '../../components/OurTeamSection/OurTeamSection'
import FaqSection from '../../components/FaqSection/FaqSection'
import ReviewSection from '@/components/ReviewSection/ReviewSection'

const About = () => {
  return (
    <main>
      <HeroSection/>
      <CompanyUseSpectraSection/>
      <AtSpectraCompanySection/>
      <CompaniesSolveProblemsSection/>
      <CompanyValueSection/>
      <OurCultureSection/>
      <OurTeamSection/>
      <FaqSection/>
      <ReviewSection/>
    </main>
  )
}

export default About