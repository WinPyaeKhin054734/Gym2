import React from "react";
import FadeIn from "./FadeIn";

function First() {
  return (
    <div>
      <div className="bg-[url('https://i.pinimg.com/736x/90/4e/07/904e07c54af5f30d1beb05482c0e8b59.jpg')] bg-cover">
        <div className="bg-black/40 py-12 md:py-16 lg:py-24 h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-10">
          <FadeIn className="max-w-2xl text-center md:text-left">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl text-white">
              Elevate Your <br /> Health and Wellness <br /> Journey Today
            </p>
            <p className="text-white/80 py-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Facilis repudiandae culpa earum consectetur blanditiis <br />
              nisi numquam dolore molestias.
            </p>

            <div className="py-5">
              <button className="font-bold px-4 py-2 sm:px-5 sm:py-3 hover:cursor-pointer rounded-3xl bg-lime-500 text-black">
                Get Admitted Now
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-6 md:mt-0 md:pl-10">
              <div className="space-y-4 p-5 bg-black/70 rounded-xl">
                <div className="text-white flex justify-between gap-5">
                  <div>
                    <p className="font-semibold">Success Rate</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <p>
                    <span className="text-lime-400 font-bold">09</span> of 10
                  </p>
                </div>

                <div className="text-white flex justify-between gap-5">
                  <div>
                    <p className="font-semibold">Squads</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <p>
                    <span className="text-lime-400 font-bold">07</span> of 10
                  </p>
                </div>

                <div className="text-white flex justify-between gap-5">
                  <div>
                    <p className="font-semibold">Lunges</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <p>
                    <span className="text-lime-400 font-bold">08</span> of 10
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default First;
