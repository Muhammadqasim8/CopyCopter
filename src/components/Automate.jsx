import React from "react";
import Button from "./Button";
import insta from "../images/insta.png";
import yt from "../images/yt.png";
import tiktok from "../images/TikTok.png";
import img1 from "../images/audi.jpg";
import img2 from "../images/aiko.jpg";
import vid from "../images/vid.mp4";
import icon from "../images/icon.png";
import link1 from "../images/link1.png"
import link2 from "../images/link2.png"
import link3 from "../images/link3.png"
import link4 from "../images/link4.png"
import link5 from "../images/link5.png"
import link6 from "../images/link6.png"
import link7 from "../images/link7.png"
import link10 from "../images/link10.png"


const Automate = () => {
  return (
    <div className="flex lg:flex-row flex-col pt-6">
      <div className="flex px-6 flex-col gap-6 lg:w-1/2">
        <h1 className="text-[#444240] text-center md:text-start font-bold sm:text-5xl text-4xl">
          Automate your <span className="font-normal">Faceless video</span> Channel
        </h1>
        <p className="text-[#444240] font-[300px] text-[16px] text-center md:text-start">
          Create AI Videos in minutes, post automatically on your Social Media.
          Our AI creation tool creates <span className="font-bold">viral AI videos</span> for you.
        </p>
        <div >
          <ul >
            <li className="text-[#444240]">
              ️ <span className="font-bold">FAST </span>- High quality video in 5 minutes
            </li>
            <li className="text-[#444240]">
              ️ ️<span className="font-bold">EASY</span> - Share directly to Social Media
            </li>
            <li className="text-[#444240] ">
              ️ <span className="font-bold ">👄 UNIQUE </span>- 5 styles, 45 voices - for every niche
            </li>
            <li className="text-[#444240]">
              ️ <span className="font-bold">🎬 HIGH QUALITY </span>- - images with extra quality refinement
            </li>
            <li className="text-[#444240]">
              ️ <span className="font-bold">👀 Videos </span>- that actually GET VIEWS
            </li>
          </ul>
        </div>
        <div className="max-w-lg rounded-lg border bg-white/40 p-4 shadow-[5px_5px_30px_rgba(190,190,190,0.15),-5px_-5px_30px_rgba(255,255,255,0.15)] backdrop-blur-sm">
          <div className="flex gap-1">
            <input
              className="border px-3 py-2 text-base font-normal w-full focus-visible:ring-blue-600 focus-visible:outline-none focus-visible:ring-2 rounded-full"
              placeholder="your@gmail.com"
              type="text"
            />
            <Button className="text-white group relative items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-4 py-2 flex h-10 w-full flex-grow gap-2 rounded-full bg-blue-600 hover:bg-blue-500 sm:w-5/12 overflow-hidden">
              Start Now
            </Button>
          </div>
          <div>
            <p className="text-[#64748B] text-end pt-2 text-[12px]">
              By signing up you agree to our <span className="text-black font-[300]">terms</span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center   gap-2 sm:flex-row sm:gap-6 ">
          <div className="flex ">
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img src={link1} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link2} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link3} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link4} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link5} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link6} alt="" /></a>
            <a className="mr-[-8px] h-7  w-7  overflow-hidden rounded-full border-[3px] border-white transition-all duration-150 hover:scale-110 hover:border-blue-600" href=""><img  src={link7} alt="" /></a>
            
          </div>
          <p className="text-sm font-light text-[#64748B]">Join <span className="text-sm font-bold text-[#64748B]">500+</span>Happy Creators</p>

        </div>
        <div className="flex flex-col items-center  sm:flex-row pb-6">
          <img src={link10} alt="" />
        </div>
      </div>
      <div className="flex-1 ">
        <p className="font-bold text-[14px] text-[#444240] text-center mb-1">Perfect for</p>
        <div className="flex justify-center items-center gap-6">
          <a href=""><img className="w-[42px] h-[42px]" src={tiktok} alt="logo" /></a>
          <a href=""><img className="w-[42px] h-[30px]" src={yt} alt="logo" /></a>
          <a href=""><img className="w-[42px] h-[42px]" src={insta} alt="logo" /></a>
        </div>
        <div className="flex justify-center relative px-6 ">
          <div className="-mr-11 scale-[.9]">
            <div className="flex w-full -translate-x-4 -rotate-12 my-4 items-end gap-1 text-xs font-bold">
              <img className="flex h-6 w-6 " src={icon} alt="" />
              <div>
                <p className="font-bold text-[12px] text-[#444240]">Boost your SEO</p>
                <p className="font-bold text-[12px] text-[#444240]">with videos</p>
              </div>
            </div>
            <img
              className="w-[160px] h-[280px] hover:scale-105 -rotate-12 rounded-lg border-[1px] border-[#22C55E]"
              src={img1}
              alt="audi"
            />
          </div>
          <div className="w-[160px] relative my-6">
            <video
              className="absolute border-[1px] border-[#5B21B6] hover:scale-105 z-10 my-4 w-full h-full rounded-lg object-cover"
              autoPlay
              muted
              loop
              src={vid}
            ></video>
            
          </div>
          
          <div className="-ml-10 scale-[.9]">
            <div className="flex w-full translate-x-4 rotate-12 my-4 pl-6 items-end gap-1 text-xs font-bold">
              <img className="flex h-6 w-6" src={icon} alt="" />
              <div>
                <p className="font-bold text-[12px] text-[#444240]">Get traffic</p>
                <p className="font-bold text-[12px] text-[#444240]">with faceless videos</p>
              </div>
            </div>
            <img
              className="w-[160px] h-[280px] hover:scale-105 rotate-12 rounded-lg border-[1px] border-[#22C55E]"
              src={img2}
              alt="audi"
            />
          </div>
           
        </div>
        <div className="flex justify-center mr-20 gap-1 text-xs font-bold pt-2">
              
              <div>
                <p className="font-bold text-[12px] text-[#444240]">Engage your audience</p>
                <p className="font-bold text-[12px] text-[#444240]">with next-gen content</p>
              </div>
              <img className="flex h-6 w-6 rotate-[190deg]" src={icon} alt="" />
            </div>
      </div>
    </div>
  );
};

export default Automate;
