import React from "react";
import FadeIn from "./FadeIn";

function Sev() {
  return (
    <div className="px-5 lg:px-10 pb-16">
      <FadeIn>
        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">
          Perfect Plan
        </p>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl text-center text-neutral-500">
          For Your Goal
        </p>
      </FadeIn>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <FadeIn className="h-full">
          <div className="rounded-3xl h-full flex flex-col justify-between bg-neutral-900 p-8 pt-9 hover:scale-[1.02] cursor-pointer duration-500 text-white">
            <p className="text-3xl font-semibold">Basic Plan</p>
            <p className="text-lg mb-4">$29.99/month</p>
            <div className="space-y-2 opacity-60 text-sm md:text-base">
              <p>Access to gym equipment</p>
              <p>1 fitness assessment</p>
              <p>Standard workout plan</p>
              <p>Locker & shower access</p>
              <p>Email support</p>
            </div>
            <button className="mt-5 w-full text-lime-400 px-5 py-2 rounded-3xl border-2 border-lime-400 cursor-pointer hover:bg-lime-400 hover:text-black duration-300">
              Register Now
            </button>
          </div>
        </FadeIn>

        {/* Card 2 (highlight) */}
        <FadeIn className="h-full" delay={0.2}>
          <div className="rounded-3xl h-full flex flex-col justify-between bg-lime-400 p-8 pt-9 hover:scale-[1.02] cursor-pointer duration-500 text-black">
            <p className="text-3xl font-semibold">Pro Plan</p>
            <p className="text-lg mb-4">$49.99/month</p>
            <div className="space-y-2 opacity-80 text-sm md:text-base">
              <p>Everything in Basic</p>
              <p>Group training sessions</p>
              <p>Free diet guide</p>
              <p>24/7 Support</p>
              <p>Personal coach</p>
            </div>
            <button className="mt-5 w-full text-black px-5 py-2 rounded-3xl border-2 border-black cursor-pointer hover:text-lime-400 hover:bg-black duration-300">
              Register Now
            </button>
          </div>
        </FadeIn>

        {/* Card 3 */}
        <FadeIn className="h-full" delay={0.4}>
          <div className="rounded-3xl h-full flex flex-col justify-between bg-neutral-900 p-8 pt-9 hover:scale-[1.02] cursor-pointer duration-500 text-white">
            <p className="text-3xl font-semibold">Premium Plan</p>
            <p className="text-lg mb-4">$79.99/month</p>
            <div className="space-y-2 opacity-60 text-sm md:text-base">
              <p>Everything in Pro</p>
              <p>Unlimited gym access</p>
              <p>1-on-1 coaching</p>
              <p>Customized meal plan</p>
              <p>Exclusive workshops</p>
            </div>
            <button className="mt-5 w-full text-lime-400 px-5 py-2 rounded-3xl border-2 border-lime-400 cursor-pointer hover:bg-lime-400 hover:text-black duration-300">
              Register Now
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Sev;
