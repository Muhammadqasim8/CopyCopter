import React from 'react';
import tk from "../images/tk.png";
import cros from "../images/cross.png";
import ar from "../images/arow.png"

const PricingCard = ({ title, subtitle, price, duration, yearlyPrice, features, firstFeatureImage, firstFeatureText, isPro }) => {
  const borderColor = isPro ? 'border-blue-500 border-2' : 'border-gray-200';

  return (
    <div className={`relative flex w-full max-w-xs flex-grow flex-col rounded-md border ${borderColor} bg-white p-4`}>
      {isPro && (
        <div className='flex justify-center absolute -left-0 -top-3 w-full text-center'>
          <div className="h-6 rounded-xl bg-blue-500 px-4 py-1 text-xs text-white">Popular</div>
        </div>
      )}
      <div className='flex justify-center flex-col'>
        <h2 className='text-xl font-bold text-center'>{title}</h2>
        <div className='text-center text-sm font-light text-gray-500'>{subtitle}</div>
      </div>
      <div className='flex items-center w-full flex-col rounded-md p-2'>
        <div className='space-x-2 text-4xl font-bold'>
          <span>{price}</span>
          <span className="text-sm font-light">{duration}</span>
        </div>
        <div className="h-4 text-xs text-gray-500">{yearlyPrice}</div>
      </div>
      <div className='flex flex-grow flex-col justify-between'>
        <div className='flex flex-col gap-2 pb-6'>
          <ul className="space-y-2 text-sm font-light">
            <li className='flex items-center gap-2'>
              <img src={firstFeatureImage} alt="icon" />
              {firstFeatureText}
            </li>
            {features.slice(1).map((feature, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 ${!feature.available ? 'text-gray-500' : ''}`}
              >
                <img src={feature.available ? tk : cros} alt="icon" />
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-center w-full'>
          <button className="inline-flex group text-white relative items-center justify-center whitespace-nowrap rounded-md text-sm font-normal bg-blue-800 hover:bg-blue-900 h-10 px-4 py-2 w-9/12">
            <span>Subscribe</span>
            <span class="absolute right-2 translate-x-full opacity-0 transition-all duration-150  group-hover:translate-x-0 group-hover:opacity-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
