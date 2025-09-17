import React from 'react'

function Third() {
  return (
    <div>

     
         <div className=" bg-white">
             <div className="py-10 px-10">
                <button className='px-5 py-2 rounded-3xl border-1 hover:cursor-grab active:cursor-grabbing'>
                    image gallary
                </button>
            </div>
             <div className="">
                <p className='text-5xl px-5 font-bold'>
                    <span className='text-gray-600'>A well-Oriented And Enriching   Fitness <br /> Experience Our  </span>
                 <br />  Thoughfully Curated Classes</p>
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
            
                 <div className="flex justify-center items-center flex-col">
             <div className=" mx-auto grid md:grid-cols-2 px-30 gap-3 ">
                <div className="">
                    <img src="https://i.pinimg.com/736x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg" alt=""  className='size-60 rounded-2xl object-cover '/>
                    <div className="py-5">
                        <p className='font-bold'>Cardio Kickbox</p>
                        <p>Build strangh with compound isolated restance ever</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.pinimg.com/1200x/75/4c/90/754c90c01e49cfe07405c25b560281b0.jpg" alt=""  className='size-60 rounded-2xl object-cover '/>
                    <div className="py-5">
                        <p className='font-bold'>Strength Circuit</p>
                        <p>Build strangh with compound isolated restance ever</p>
                    </div>
                </div>
            </div>
            <div className=" mx-auto grid md:grid-cols-2 px-30 gap-3 ">
                <div className="">
                    <img src="https://i.pinimg.com/1200x/8c/05/a4/8c05a4441da0c1a113a43ee3a42f96b6.jpg" alt=""  className='size-60 rounded-2xl object-cover '/>
                    <div className="py-5">
                        <p className='font-bold'>Barbell Burn</p>
                        <p>Build strangh with compound isolated restance ever</p>
                    </div>
                </div>
                <div className="">
                    <img src="https://i.pinimg.com/1200x/64/22/f7/6422f7ed2d69e7d2fae6da7d5e6ae91f.jpg" alt=""  className='size-60 rounded-2xl object-cover '/>
                    <div className="py-5">
                        <p className='font-bold'>Strench & Sweet</p>
                        <p>Build strangh with compound isolated restance ever</p>
                    </div>
                </div>
            </div>
           </div>
          
          
        </div>
      



    </div>
  )
}

export default Third