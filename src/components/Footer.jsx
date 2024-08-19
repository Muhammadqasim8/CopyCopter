import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center min-h-[100px]  w-full  border-t bg-white/80  px-6 backdrop-blur-md">
      <div className="flex w-full max-w-6xl flex-col justify-between gap-4 py-8 sm:flex-row">
        <div className="flex flex-col gap-2">
          <a className=" flex w-full items-center justify-start gap-2">
            <div className="flex justify-center w-fit">
              <img src={logo} alt="logo" />
            </div>
            <span class=" text-xl font-[900] tracking-wider">CopyCopter</span>
          </a>
          <div class="max-w-[320px] text-sm text-[#2B2A2D]">
            CopyCopter is a generative AI text to video tool that repurposes
            long texts into shorts in one click.
          </div>
          <div class="flex flex-col gap-2 text-sm text-[#2B2A2D]">
            <div>Social Jool L.L.C-FZ</div>
            <div>Copyright © 2024 - All rights reserved</div>
          </div>
        </div>
        <div class=" flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
          <div class=" flex w-full flex-col items-start justify-start gap-2 text-sm md:flex-row md:gap-6">
            <div class=" flex flex-col items-start md:items-end justify-start gap-2">
              <a class="hover:underline" href="">
                Blog
              </a>
              <a class="hover:underline" href="">
                Changelog
              </a>
              <a class="hover:underline" href="">
                Affiliate
              </a>
            </div>
            <div class=" flex flex-col items-start justify-start gap-2">
              <a class="hover:underline" href="">
                Partners
              </a>
              <a class="hover:underline" href="">
                Privacy Policy
              </a>
              <a class="hover:underline" href="">
                Terms and Conditions
              </a>
            </div>
          </div>
          <div class="hidden h-5 border-l  border-black sm:block"></div>
          <a
            class="flex items-center justify-center whitespace-nowrap font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-blue-50  h-10 md:h-8 text-xs px-3 rounded-full"
            href=""
          >
            Open Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
