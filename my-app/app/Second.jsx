import React from "react";
import FadeIn from "./FadeIn";

function Second() {
  return (
    <div>
      <div className="min-h-[600px] mt-5 px-5 lg:px-10 bg-white text-black">
        <FadeIn>
          <div className="py-10">
            <div className="pb-5">
              <button className="px-5 py-2 rounded-3xl border-1 hover:cursor-grab active:cursor-grabbing">
                image gallary
              </button>
            </div>
            <p className="text-5xl font-bold">
              <span className="text-gray-600">
                Our Equipment IS Manifestation Of The <br /> Latest Trends And{" "}
              </span>
              Cutting-Edge <br /> Fitness Technology
            </p>
            <p className="text-gray-700 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
            <div className="pt-2 -space-x-1">
              <button className="px-7 py-2 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing">
                Browse More
              </button>
              <button className="px-3 py-2 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing">
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="min-h-[300px] grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn>
            <img
              src="https://i.pinimg.com/736x/55/f0/6f/55f06fd76e846c38adbbc29465845162.jpg"
              alt=""
              className="size-full object-cover rounded-2xl"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <img
              src="https://i.pinimg.com/736x/ce/1f/8f/ce1f8f7c08e8a744177029ff747a354c.jpg"
              alt=""
              className="size-full object-cover rounded-2xl"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <img
              src="https://i.pinimg.com/736x/c0/17/60/c01760924cfc783be218da6d340289a3.jpg"
              alt=""
              className="size-full object-cover rounded-2xl"
            />
          </FadeIn>
          <FadeIn delay={0.6}>
            <img
              src="https://i.pinimg.com/1200x/63/3c/f2/633cf2219a90235838d89850a6348a7a.jpg"
              alt=""
              className="size-full object-cover rounded-2xl"
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default Second;
