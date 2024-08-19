import React from 'react'
import PricingCard from './PricingCard'

const PricingCards = ({details, value}) => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
        {details.map((detail)=>(
            <PricingCard detail={detail} value={value}/>
        ))}
    </div>
  )
}

export default PricingCards