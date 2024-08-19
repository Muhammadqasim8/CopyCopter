import React from "react";
import logo from "../images/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" fixed  top-2 z-50 w-full px-2 md:top-8">
    <div className=" flex justify-center w-full">
      <div>
        <div className="  max-w-[560px] mx-auto h-12  rounded-full border bg-white/60 px-1 pl-4 shadow-[5px_5px_30px_rgba(190,190,190,0.15),-5px_-5px_30px_rgba(255,255,255,0.15)] backdrop-blur-md  ">
          <div className=" flex  ">
            <a className="flex items-center justify-start gap-2" href="">
              <div className=" w-fit max-w-9 max-h-9">
                <img src={logo} alt="Logo" />
              </div>
              <span className="font-[900px] font-[inter] text-xl  tracking-wider">
                CopyCopter
              </span>
            </a>
            <div className="hidden  sm:flex items-center justify-end gap-4 px-3 ">
              <a className=" text-sm text-[#444240] hover:underline" href="#">
                Pricing
              </a>
              <a className=" text-sm text-[#444240] hover:underline" href="#">
                FAQ
              </a>
              <a className=" text-sm text-[#444240] hover:underline" href="#">
                Changelog
              </a>
            </div>
            <div className=" flex items-center justify-center gap-4">
              <div className="hidden h-5 border-r  border-gray-200 sm:block "></div>
              <div className="flex items-center py-1 gap-2 text-xs">
                <a href="">
                  <button className="items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 md:h-9 px-4 py-2 hidden rounded-full shadow-none sm:block">
                    Login
                  </button>
                </a>
                
                <a href="">
                  <button className="bg-[#0F172A] text-[#F8FAFC] inline-flex group relative items-center justify-center whitespace-nowrap text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-full overflow-hidden">
                    <span className="  transition-all duration-150 group-hover:-translate-x-2">
                      Start Now
                    </span>
                    <span className="absolute right-2 translate-x-full opacity-0 transition-all duration-150  group-hover:translate-x-0 group-hover:opacity-100">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;

{
  /* <div className=' flex justify-center items-center py-2 px-4 gap-4 border-l-2 border-[#E5E7EB]'>
            <Button className="text-[#2B2A2D] font-[400px]">Log in</Button>
            <Button className="text-[#F8FAFC] bg-[#0F172A] font-[400px]">Start Now</Button>
            </div> */
}
