import CompaniesHaveAlreadyComponent from '@/components/CompaniesHaveAlreadyComponent';
import Section from '@/components/Section'
import React from 'react'

const CompanyUseSpectraSection = () => {
  return (
    <Section className={`companyUseSpectraSection p-6`}>
      <CompaniesHaveAlreadyComponent className={`flex gap-10 2md:gap-[136px]`} />
    </Section>
  );
}

export default CompanyUseSpectraSection