import React from 'react'


function First() {
  return (
    <div>
        
   
        <div className="min-h-[500px] bg-[url('https://i.pinimg.com/736x/90/4e/07/904e07c54af5f30d1beb05482c0e8b59.jpg')] bg-cover relative">
  <div className="absolute bg-black/40 z-10 w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-10">
    
   
    <div className="max-w-xl text-center md:text-left">
      <p className="font-bold text-3xl sm:text-4xl md:text-6xl text-white">
        Elevate Your <br /> Health and wellness <br /> journey Today
      </p>
      <p className="text-white py-4 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Facilis repudiandae culpa earum consectetur blanditiis <br />
        nisi numquam dolore molestias.
      </p>

      <div className="py-5">
        <button className="font-bold px-4 py-2 sm:px-5 sm:py-3 hover:cursor-pointer rounded-3xl bg-lime-500 text-black">
          Get Admitted Now
        </button>
      </div>
    </div>

   
    <div className="mt-6 md:mt-0 md:pl-10">
      <div className="space-y-4 p-5 bg-black/70 rounded-xl">
        
     
        <div className="text-white flex justify-between gap-5">
          <div>
            <p className="font-semibold">Success Rate</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <p><span className="text-lime-400 font-bold">07</span> of 10</p>
        </div>

       
        <div className="text-white flex justify-between gap-5">
          <div>
            <p className="font-semibold">Squads</p>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <p><span className="text-lime-400 font-bold">07</span> of 10</p>
        </div>

       
        <div className="text-white flex justify-between gap-5">
          <div>
            <p className="font-semibold">Lunges</p>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
          <p><span className="text-lime-400 font-bold">07</span> of 10</p>
        </div>
      </div>
    </div>
  </div>
</div>
   

    </div>
  )
}

export default First