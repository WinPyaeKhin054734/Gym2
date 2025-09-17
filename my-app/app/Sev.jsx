import React from 'react'

function Sev() {
  return (
    <div className="px-5 py-10">
  <p className="font-bold text-2xl md:text-3xl text-center ">
    Perfect Plan For Your Fitness Goal
  </p>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="rounded-3xl bg-black/90 p-8 hover:scale-105 cursor-pointer duration-500 text-white">
      <p className="text-xl font-semibold">Basic Plan</p>
      <p className="text-lg mb-4">$ 29.99/month</p>
      <div className="space-y-2 text-sm md:text-base">
        <p>Single personalize plan</p>
        <p>Single personalize plan</p>
        <p>Single personalize plan</p>
        <p>Single personalize plan</p>
        <p>Single personalize plan</p>
      </div>
    </div>

    {/* Card 2 (highlight) */}
    <div className="rounded-3xl bg-lime-400 p-8 hover:scale-105 cursor-pointer duration-500 text-black">
      <p className="text-xl font-semibold">Pro Plan</p>
      <p className="text-lg mb-4">$ 49.99/month</p>
      <div className="space-y-2 text-sm md:text-base">
        <p>Everything in Basic</p>
        <p>Group training sessions</p>
        <p>Free diet guide</p>
        <p>24/7 Support</p>
        <p>Personal coach</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="rounded-3xl bg-black/90 p-8 hover:scale-105 cursor-pointer duration-500 text-white">
      <p className="text-xl font-semibold">Premium Plan</p>
      <p className="text-lg mb-4">$ 79.99/month</p>
      <div className="space-y-2 text-sm md:text-base">
        <p>Everything in Pro</p>
        <p>Unlimited gym access</p>
        <p>1-on-1 coaching</p>
        <p>Customized meal plan</p>
        <p>Exclusive workshops</p>
      </div>
    </div>

  </div>
</div>

  )
}

export default Sev