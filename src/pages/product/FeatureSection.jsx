import Features from '@/components/Features'
import Section from '@/components/Section'
import React from 'react'

const featureClassNames = {

  featureContainer : "p-2 items-center ",
  iconWrapper : "",
  icon : ""
}

const FeatureSection = () => {
  return (
    <Section className={`featureSection p-[64px_24px] bg-cream text-center `}>
      <Features
        className={`gap-8 2md:gap-4`}
        featureClassNames={featureClassNames}
      />
    </Section>
  );
}

export default FeatureSection