import React from "react";
import FadeIn from "./FadeIn";

function Third() {
  return (
    <div>
      <div className="px-5 lg:px-10 py-10 bg-white text-black">
        <FadeIn>
          <div className="py-10">
            <div className="pb-5">
              <button className="px-5 py-2 rounded-3xl border-1 hover:cursor-grab active:cursor-grabbing">
                image gallary
              </button>
            </div>
            <p className="text-5xl font-bold">
              <span className="text-gray-600">
                A well-Oriented And Enriching Fitness <br /> Experience Our{" "}
              </span>
              <br /> Thoughfully Curated Classes
            </p>
            <p className="text-gray-700 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>

            <div className="pt-2 -space-x-2">
              <button className="px-7 py-2 border-2 border-lime-400 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing">
                Browse More
              </button>
              <button className="px-3 py-2 border-2 border-lime-400 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing">
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
          <FadeIn>
            <img
              src="https://i.pinimg.com/736x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg"
              alt=""
              className="w-full aspect-square rounded-2xl object-cover "
            />
            <div className="py-5">
              <p className="font-bold text-lg">Cardio Kickbox</p>
              <p>Build strangh with compound isolated restance ever</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img
              src="https://i.pinimg.com/1200x/75/4c/90/754c90c01e49cfe07405c25b560281b0.jpg"
              alt=""
              className="w-full aspect-square rounded-2xl object-cover "
            />
            <div className="py-5">
              <p className="font-bold text-lg">Strength Circuit</p>
              <p>Build strangh with compound isolated restance ever</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <img
              src="https://i.pinimg.com/1200x/8c/05/a4/8c05a4441da0c1a113a43ee3a42f96b6.jpg"
              alt=""
              className="w-full aspect-square rounded-2xl object-cover "
            />
            <div className="py-5">
              <p className="font-bold text-lg">Barbell Burn</p>
              <p>Build strangh with compound isolated restance ever</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <img
              src="https://i.pinimg.com/1200x/64/22/f7/6422f7ed2d69e7d2fae6da7d5e6ae91f.jpg"
              alt=""
              className="w-full aspect-square rounded-2xl object-cover "
            />
            <div className="py-5">
              <p className="font-bold text-lg">Strench & Sweet</p>
              <p>Build strangh with compound isolated restance ever</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default Third;
