import React from 'react';
import str from "../images/greenstar.png";
import PricingCard from './PricingCard';
import tk from "../images/tk.png"; 
import gliter from "../images/glitter.png"

const pricingData = [
  {
    title: 'Hobby',
    subtitle: 'Generate 5 videos per month',
    price: '$13',
    duration: '/month',
    yearlyPrice: '$160 yearly',
    firstFeatureImage: tk,
    firstFeatureText: '50 credits', 
    features: [
      { text: '50 credits', available: true },
      { text: 'Unlimited Editor', available: true },
      { text: '9 AI Voices', available: true },
      { text: 'AI Image Generation', available: true },
      { text: 'No Watermark', available: true },
      { text: 'English Only', available: false },
      { text: 'Unlimited Stock Footage', available: false },
      { text: 'Regenerate Voice Script', available: false },
      { text: 'Standard Resolution', available: false },
    ]
  },
  {
    title: 'Growth',
    subtitle: 'Generate 20 videos per month',
    price: '$19',
    duration: '/month',
    yearlyPrice: '$228 yearly',
    firstFeatureImage: gliter,
    firstFeatureText: '200 credits',
    features: [
      { text: '200 credits', available: true },
      { text: 'Unlimited Editor', available: true },
      { text: '19 AI Voices', available: true },
      { text: 'Unlimited Stock Footage', available: true },
      { text: 'AI Image Generation', available: true },
      { text: '29 Languages', available: true },
      { text: 'No Watermark', available: true },
      { text: 'Regenerate Voice Script', available: true },
      { text: 'HD Resolution', available: true },
      { text: 'Auto-post to 1 channel', available: true },
      { text: 'Connect TikTok or YouTube', available: true },
      { text: 'Discord Support', available: true },
    ]
  },
  {
    title: 'Pro',
    subtitle: 'Generate 60 videos per month',
    price: '$34',
    duration: '/month',
    yearlyPrice: '$410 yearly',
    firstFeatureImage: gliter,
    firstFeatureText: '600 credits',
    features: [
      { text: '600 credits', available: true },
      { text: 'Unlimited Editor', available: true },
      { text: '29 AI Voices', available: true },
      { text: 'Unlimited Stock Footage', available: true },
      { text: 'AI Image Generation', available: true },
      { text: '29 Languages', available: true },
      { text: 'No Watermark', available: true },
      { text: 'Regenerate Voice Script', available: true },
      { text: 'HD Resolution', available: true },
      { text: 'Auto-post to 2 channels', available: true },
      { text: 'Connect TikTok or YouTube', available: true },
      { text: 'Discord Support', available: true },
    ]
  },
  {
    title: 'Massive',
    subtitle: 'Generate 150 videos per month',
    price: '$84',
    duration: '/month',
    yearlyPrice: '$1,008 yearly',
    firstFeatureImage: gliter,
    firstFeatureText: '1500 credits',
    features: [
      { text: '1500 credits', available: true },
      { text: 'Unlimited Editor', available: true },
      { text: '45 Voices', available: true },
      { text: 'Unlimited Stock Footage', available: true },
      { text: 'AI Image Generation', available: true },
      { text: '29 Languages', available: true },
      { text: 'No Watermark', available: true },
      { text: 'Regenerate Voice Script', available: true },
      { text: 'HD Resolution', available: true },
      { text: 'Unlimited auto-post', available: true },
      { text: 'Connect TikTok or YouTube', available: true },
      { text: 'Discord Support', available: true },
    ]
  },
];

const Pricing = () => {
  return (
    <div className='flex w-full container mx-auto flex-col items-center justify-center gap-8 px-4 py-20'>
      <div className='flex flex-col gap-2'>
        <p className='text-center text-sm'>Pricing</p>
        <h3 className='w-full text-center text-3xl font-bold text-[#444240]'>Simple pricing. No hidden fees.</h3>
      </div>
      <div className='flex justify-center w-full flex-col gap-6 p-4'>
        <div className='sm:align-center flex w-full flex-col justify-around md:flex-row'>
          <div className='flex items-center justify-center gap-2 '>
            <img src={str} alt="3-day refund policy" />
            <p className='text-sm'>3-day <span className='font-medium underline'>refund</span> policy for unused credits</p>
          </div>
          <div className='flex items-center justify-center gap-2 '>
            <img src={str} alt="Used by hundreds of creators" />
            <p className='text-sm'>Used by <span className='font-medium underline'>hundreds of creators</span></p>
          </div>
          <div className='flex items-center justify-center gap-2 '>
            <img src={str} alt="Dedicated support" />
            <p className='text-sm'>Dedicated and fast <span className='font-medium underline'>support</span></p>
          </div>
        </div>

        <div className='flex w-full flex-col items-stretch justify-center gap-4 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 md:flex md:flex-row'>
          {pricingData.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              duration={item.duration}
              yearlyPrice={item.yearlyPrice}
              firstFeatureImage={item.firstFeatureImage}
              firstFeatureText={item.firstFeatureText}
              features={item.features}
              borderColor={index === 2 ? 'border-blue-500' : ''} 
              isPro={item.title === 'Pro'}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Pricing;
