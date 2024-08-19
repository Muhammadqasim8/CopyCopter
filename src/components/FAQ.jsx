import React, { useState } from 'react';
import arow from "../images/arow.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "🚁 What is CopyCopter and how does it work?", answer: "CopyCopter is an easy to use tool for turning text into videos. It automates the process of creating video script, recording a voice-over, creating background images and videos and formatting it into desired format." },
    { question: "😱 I don't know how to edit videos. Is it good for beginners?", answer: "Absolutely. CopyCopter is designed to be user-friendly and intuitive, making it easy for beginners to create high-quality videos without any prior experience. The product is designed to be user-friendly and intuitive." },
    { question: "🎬 How is CopyCopter different from Video Editing Software?", answer: "CopyCopter is built for AI-generated content in mind, simplifying the experience of generating videos. It's easier to use and offers simplified experience comparing to professional video editing software." },
    { question: "📄 What types of input do you support?", answer: "Currently, we support blog posts, articles, news and any content that's available via URL. We're constantly expanding our capabilities, so look out for new input types being added regularly!" },
    { question: "💰 Can I get a refund?", answer: "Yes! You can get a full refund for all the unused credits within 14 days of purchase. Just drop us a message, we'll do it immediately." },
    { question: "🤖 How is that different from ChatGPT?", answer: "Unlike ChatGPT, CopyCopter uses a unique AI Agents approach, allowing for specialized, high-quality content transformation tailored for different social media platforms." },
    { question: "✨ Are the generated videos ready to be published?", answer: "Yes, the videos are ready for publishing." },
    { question: "⏰ How long does it take to generate content?", answer: "Content generation is quick and efficient. Average video generation time takes around 4 minutes, allowing for rapid turnaround." },
    { question: "🔧 Can I edit or customize the AI-generated content?", answer: "Yes, you have full control to edit and customize the AI-generated content using our AI content editor to ensure it aligns with your brand’s voice and style." },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center w-full flex-col gap-8 px-4 py-4'>
      <h2 className='flex justify-center w-full text-3xl font-bold text-[#444240]'>Frequently Asked Questions</h2>
      <div className='text-start md:text-center text-[#444240]'>Do you have a question that isn't answered here? Sign out and send us a message in the chat bubble in the bottom left corner of the screen.</div>
      <div className='flex flex-1 justify-center flex-col items-center'>
        {faqItems.map((item, index) => (
          <div key={index} className='py-4 border-b max-w-[576px] w-full'>
            <div
              className='flex justify-start items-center gap-4 cursor-pointer group'
              onClick={() => handleToggle(index)}
            >
              <img
                src={arow}
                alt="Toggle Arrow"
                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
              <p className='text-[#444240] text-sm font-light group-hover:underline'>{item.question}</p>
            </div>
            {openIndex === index && (
              <div className='mt-2 pl-8 text-sm font-light text-[#444240]'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
