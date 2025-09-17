import React from 'react'

function Second() {
  return (
    <div>
     
          <div className="min-h-[600px] bg-white text-black">
            <div className="py-10 px-10">
                <button className='px-5 py-2 rounded-3xl border-1 hover:cursor-grab active:cursor-grabbing'>
                    image gallary
                </button>
            </div>
            <div className="">
                <p className='text-5xl px-5 font-bold'>
                    <span className='text-gray-600'>Our Equipment IS Manifestation Of The <br /> Latest Trends And </span>
                    Cutting-Edge <br /> Fitness Technology</p>
                    <p className='text-gray-700 px-5 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                    <div className="px-10 py-5">
                        <button className='px-7 py-2 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing'>
                            Browse More
                        </button>
                        <button className='px-3 py-2 rounded-3xl bg-lime-400 hover:cursor-grab active:cursor-grabbing'>
                           →
                        </button>
                    </div>
            </div>

         <div className="min-h-[300px] px-4 sm:px-10 flex flex-wrap justify-center gap-4">
 
  <img 
    src="https://i.pinimg.com/736x/55/f0/6f/55f06fd76e846c38adbbc29465845162.jpg" 
    alt="" 
    className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-2xl"
  />
  <img 
    src="https://i.pinimg.com/736x/ce/1f/8f/ce1f8f7c08e8a744177029ff747a354c.jpg" 
    alt="" 
    className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-2xl"
  />
 
  <img 
    src="https://i.pinimg.com/736x/c0/17/60/c01760924cfc783be218da6d340289a3.jpg" 
    alt="" 
    className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-2xl"
  />
  <img 
    src="https://i.pinimg.com/1200x/63/3c/f2/633cf2219a90235838d89850a6348a7a.jpg" 
    alt="" 
    className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-2xl"
  />
</div>

            
        </div>
    
    </div>
  )
}

export default Second