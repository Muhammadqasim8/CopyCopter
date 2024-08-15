import React from 'react'
import Card from './Card'
import Marquee from 'react-fast-marquee'
import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import card5 from "../images/card5.png"
import card6 from "../images/card6.png"
import card7 from "../images/card7.png"
import card8 from "../images/card8.png"

import stars from "../images/stars.png"
const CardContainer = () => {
    
    const cardData = [
      {
        id: 1,
        image: card1,
        name: 'Benny R',
        role: 'Solopreneur',
        ratingImage: stars,
        review: "Honestly the best content conversion tool I've used so far. Happy customer."
      },
      {
        id: 2,
        image: card2,
        name: 'Travis M ',
        role: 'Marketer',
        ratingImage: stars,
        review: "They ship insanely fast. I've got the fastest feature "
      },
      {
        id: 3,
        image: card3,
        name: 'Dennis • ',
        role: 'Founder',
        ratingImage: stars,
        review: "🤯"
      },
      {
        id: 4,
        image: card4,
        name: 'Aleks j',
        role: 'Marketer',
        ratingImage: stars,
        review: "Wow, the copycopter is brilliant!! Generating a video takes only 5 seconds"
      },
      {
        id: 5,
        image: card5,
        name: 'Akshat G  ',
        role: 'Engineer',
        ratingImage: stars,
        review: "Amazing tool, saved me so much time and effort."
      },
      {
        id: 6,
        image: card6,
        name: 'Guin W  ',
        role: 'Partner',
        ratingImage: stars,
        review: "It truly is so cool, mind-blowing what it can do relatively quickly! I love it. "
      },
      {
        id: 7,
        image: card7,
        name: 'Anna B ',
        role: ' Marketer',
        ratingImage: stars,
        review: "I can't believe I was creating videos manually before. This is a game-changer."
      },
      {
        id: 8,
        image: card8,
        name: 'Miko  ',
        role: 'Co-Founder',
        ratingImage: stars,
        review: "DAMN, it works!"
      },

    ]
  
    return (
      <div className='flex flex-col gap-4 mt-6'>
          <Marquee className='flex gap-2' speed={25}>
            {cardData.map((card) => (
              <div key={card.id}>
                <Card
                  image={card.image}
                  name={card.name}
                  role={card.role}
                  ratingImage={card.ratingImage}
                  review={card.review}
                />
              </div>
            ))}
          </Marquee>
          <Marquee className='' speed={20}>
            {cardData.map((card) => (
                <Card
                    key={card?.id}
                  image={card.image}
                  name={card.name}
                  role={card.role}
                  ratingImage={card.ratingImage}
                  review={card.review}
                />
            ))}
          </Marquee>
      </div>
    )
  }
  
  export default CardContainer