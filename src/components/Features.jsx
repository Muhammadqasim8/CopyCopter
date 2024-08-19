import React from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import cdimg1 from "../images/cdimg1.jpg"
import cdimg2 from "../images/cdimg2.jpg"
import cdimg3 from "../images/cdimg3.jpg"
import cdimg4 from "../images/cdimg4.jpg"
import cdimg5 from "../images/cdimg5.jpg"
import cdvid from "../images/cdvid.mp4"
import elab from "../images/elabs.png"

const Features = () => {
  return (
    <div>
      <div className="flex container mx-auto justify-center w-full flex-col gap-8 p-6 py-12">
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm">Features</p>
          <h3 className="w-full text-center text-3xl font-bold text-[#444240] ">
            Simple, yet crazy powerful.
          </h3>
        </div>
        <div className=" grid px-2 sm:px-4 grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4">
          <div className="false  group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
            <div className=" flex h-full flex-col justify-between  ">
              <div className="relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white"></div>
                <img
                  className="transition-all duration-300 group-hover:scale-105"
                  src={c1}
                  alt="image"
                />
              </div>
              <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">
                  AI Scripts
                </h3>
                <p className="text-sm font-light ">
                  Get perfect video script automatically. You don’t have to be
                  Christopher Nolan to get results.
                </p>
              </div>
            </div>
          </div>
          <div className="false group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
            <div className=" flex h-full flex-col justify-between  ">
              <div className="relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white"></div>
                <img
                  className="transition-all duration-300 group-hover:scale-105"
                  src={c2}
                  alt="image"
                />
              </div>
              <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">
                  45 Unique Voices
                </h3>
                <p className="text-sm font-light ">
                  Pick one of the 29 male and 16 female voices that resonate
                  with your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-neumorphic group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
            <div className=" flex h-full flex-col justify-between  ">
              <div className="relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white"></div>
                <img
                  className="transition-all duration-300 group-hover:scale-105"
                  src={c3}
                  alt="image"
                />
              </div>
              <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">
                  Video Editor
                </h3>
                <p className="text-sm font-light ">
                  Easily edit the output and personalise it however you want.
                  Add your own images and videos, change them to stock footage,
                  resize the length or delete ones you don't like.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 shadow-neumorphic group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
          <div className=" flex h-full flex-col justify-between  ">
            <div className="relative overflow-hidden">
                <div className="flex justify-center relative">
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white transition-all duration-300 group-hover:opacity-30">


                    </div>
                    <img className=" -rotate-6 rounded-md  transition-all duration-300 group-hover:rotate-0 h-[120px] w-[120px]" src={cdimg1} alt="" />
                    <img className=" -rotate-6 rounded-md border transition-all duration-300 group-hover:rotate-0 h-[120px] w-[120px]" src={cdimg2} alt="" />
                    <img className=" -rotate-6 rounded-md border transition-all duration-300 group-hover:rotate-0 h-[120px] w-[120px]" src={cdimg3} alt="" />
                    <img className=" -rotate-6 rounded-md border transition-all duration-300 group-hover:rotate-0 h-[120px] w-[120px]" src={cdimg4} alt="" />
                    <img className=" -rotate-6 rounded-md border transition-all duration-300 group-hover:rotate-0 h-[120px] w-[120px]" src={cdimg5} alt="" />

                </div>

            </div>
            <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">AI Photo (realistic images)</h3>
                <p className="text-sm font-light ">Make every video unique by using our fine-tuned high quality image generation AI
                model.</p>

            </div>

          </div>

          </div>
          <div className="false  group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
          <div className=" flex h-full flex-col justify-between">
            <div className="relative overflow-hidden">
                <div >
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white transition-all duration-300 group-hover:opacity-30"></div>
                    <video className="rounded-sm" loop muted playsInline autoPlay src={cdvid }></video>
                </div>
            </div>
            <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">Stock Video Footage</h3>
                <p className="text-sm font-light ">Effortlessly include stock videos in
                your creation to add more variety.</p>

            </div>

          </div>

          </div>
          <div className="false shadow-neumorphic group relative h-72 rounded-md border bg-white/90 p-1 sm:p-4 text-[#444240] backdrop-blur-md transition-all duration-300 hover:border-blue-600">
          <div className=" flex h-full flex-col justify-between  ">
            <div className="relative overflow-hidden">
                <div className="flex justify-center  flex-wrap items-center gap-2 transition-all duration-300 group-hover:gap-1">
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-gradient-to-b from-transparent to-white transition-all duration-300 group-hover:opacity-30"></div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇺🇸 English</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇮🇳 Hindi</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇨🇳 Chinese</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇪🇸 Spanish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇫🇷 French</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇩🇪 German</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇯🇵 Japanese</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇦🇪 Arabic</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇷🇺 Russian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇰🇷 Korean</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇮🇩 Indonesian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇮🇹 Italian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇳🇱 Dutch</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇹🇷 Turkish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇵🇱 Polish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇸🇪 Swedish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇵🇭 Filipino</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇲🇾 Malay</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇷🇴 Romanian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇺🇦 Ukrainian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇬🇷 Greek</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇨🇿 Czech</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇩🇰 Danish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇫🇮 Finnish</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇧🇬 Bulgarian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇭🇷 Croatian</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇸🇰 Slovak</div>
                    <div className="whitespace-nowrap rounded-full border px-1 text-xs">🇮🇳 Tamil</div>
                   
                </div>
            </div>
            <div className="z-10 transition-all duration-300 group-hover:pb-2">
                <h3 className="text-lg  font-bold transition-all duration-300 group-hover:text-xl">29 Languages</h3>
                <p className="text-sm font-light ">Create your content in any language.
                Works for Voice and Text. </p>
            </div>
          </div>

          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-2">
        <p className="text-center">Powered by Eleven Labs</p>
        <a className="flex justify-center" href="#">
          <img className="h-[23.44px] w-[200px]" src={elab} alt="" />
        </a>

      </div>
    </div>
  );
};

export default Features;
