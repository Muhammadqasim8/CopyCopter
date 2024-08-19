import React from "react";
import tick from "../images/tick.png";
import step1 from "../images/step1.jpg";
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import bg5 from "../images/bg5.png";
import Button from "./Button";

const Step = () => {
  return (
    <div>
    <div className=" relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:gap-12 md:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-center text-[#444240]">How it works</p>
        <h3 className="w-full text-center text-3xl font-bold text-[#444240] ">
          Create your video in 3 easy steps
        </h3>
      </div>
      <div className=" relative  z-10 flex flex-col  items-center gap-0 text-[#444240] lg:gap-8  lg:flex-row">
        <div className="flex lg:w-full  flex-1 flex-col gap-2 py-5 text-left  sm:mx-auto lg:max-w-max">
          <div className="mt-3 flex ">
            <div className="flex  rounded-md border border-blue-500 bg-blue-50 px-[6px] py-[2px] text-xs text-blue-500">
              Step 1
            </div>
          </div>
          <h3 className="text-2xl font-bold  text-[#444240]">
            Generate script with one click
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#444240]">
              Simply <span className="font-bold">write your idea</span>and let
              AI do the job.
            </p>
            <ul>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Start with an article, idea, link or just write your own story
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Get full video script to create your next video
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Works for every niche, from science to bedtime stories
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex-center mt-5 h-full min-h-[225px]  w-full max-w-md flex-1 p-0 lg:mt-0 lg:w-3/12">
          <img className="pt-11" src={step1} alt="" />
        </div>
      </div>
      <div className=" relative  z-10 flex flex-col  items-center gap-0 text-[#444240] lg:gap-8  lg:flex-row">
        <div className=" flex-center mt-5 h-full min-h-[225px]   w-full max-w-md flex-1 pt-[112px] lg:mt-0 lg:w-3/12">
          <div className=" group relative h-full w-full  ">
            <img
              className="absolute -left-5 sm:-left-8 -top-24 z-0 w-full rounded-md  brightness-90 transition-all  duration-300 group-hover:brightness-90 md:brightness-100"
              src={bg1}
              alt=""
            />
            <img
              className="h absolute -top-2 sm:left-6 z-10 w-full rounded-md border brightness-90 drop-shadow-xl transition-all duration-300 group-hover:brightness-90  md:brightness-100"
              src={bg2}
              alt=""
            />
            <img
              className="absolute sm:left-14 top-8 sm:top-14 z-20 w-full  rounded-md border drop-shadow-xl transition-all duration-300 group-hover:scale-105"
              src={bg3}
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:w-full  flex-1 flex-col mt-10 lg:mt-0 gap-2 py-5 text-left sm:mx-auto lg:max-w-max">
          <div className="mt-3 flex ">
            <div className="flex rounded-md border border-blue-500 bg-blue-50 px-[6px] py-[0.5px] text-xs text-blue-500">
              Step 2
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#444240] ">
            Customise the Video
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#444240]">
              <span className="font-bold">Personalise </span>your video to make
              sure it sounds exactly as you want.
            </p>
            <ul>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Modify the voice Script
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Pick the voice Actor you want to use
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Decide between Stock Footage and AI-Generated Images
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" relative  z-10 flex flex-col  items-center gap-0 text-[#444240] lg:gap-8  lg:flex-row">
        <div className="flex w-full  flex-1 flex-col gap-2 py-5 text-left sm:mx-auto lg:max-w-max">
          <div className="mt-3 flex ">
            <div className='class="flex rounded-md border border-blue-500 bg-blue-50 px-[6px] py-[0.5px] text-xs text-blue-500"'>
              Step 3
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#444240] ">
            Edit the output
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#444240]">
              Use<span className="font-bold"> powerful Video Editor </span> with
              all the necessary tools to easily fine-tune the final output in
              seconds.
            </p>
            <ul>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Replace Images and Videos with different footage
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Upload your own photos or videos if you need it
              </li>
              <li className="flex items-center gap-2 text-sm text-[#444240] ">
                {" "}
                <img src={tick} alt="icon" />
                Automatically post on TikTok and Youtube (soon)
              </li>
            </ul>
          </div>
         
        </div>
        <div className=" flex-center mt-5 h-full min-h-[225px]  w-full max-w-md flex-1 p-0 lg:mt-0 lg:w-3/12">
            <div className="group relative overflow-hidden rounded-md">
              <img
                className=" max-w-[280px] max-h-[160px] absolute bottom-[3.5rem] right-[3.6rem] z-10 w-[280px] rounded-sm  transition-all  duration-300 group-hover:w-[280px] group-hover:drop-shadow-xl md:w-[120px]"
                src={bg4}
                alt=""
              />
              <img
                className=" max-w-[960px] max-h-[540px] z-0 w-full rounded-md border brightness-90 transition-all duration-300 group-hover:brightness-90 md:brightness-100"
                src={bg5}
                alt=""
              />
            </div>
          </div>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col gap-2 py-24 text-[#444240]">
        <h3 className="w-full text-center text-3xl font-bold text-[#444240] ">
            Give it a go
        </h3>
        <p className="text-center"> See for yourself how easy it is</p>
        <Button className="text-white group  relative max-w-[200px] items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground px-4 py-2 flex  flex-grow gap-2 rounded-full bg-blue-600 hover:bg-blue-500 sm:w-5/12 overflow-hidden">
              Start Now
            </Button>

    </div>
    </div>
  );
};

export default Step;
