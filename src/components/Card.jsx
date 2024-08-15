import React from 'react'


const Card = ({ image, name, role, ratingImage, review }) => {
    return (
      <div className='border-[1px] w-full py-2 max-w-[540px] px-2 rounded-lg'>
          <div className='flex justify-center items-center gap-2'>
            <img src={image} alt={name} />
            <div>
              <div className='flex gap-1 items-center'>
                <p className='text-sm font-semibold text-[#2B2A2D]'>{name} • {role}</p>
                <img className='h-[14px] w-[70px]' src={ratingImage} alt="Rating" />
              </div>
              <p className='text-sm font-light text-[#374151]'>{review}</p>
            </div>
          </div>
      </div>
    )
  }
  
export default Card
