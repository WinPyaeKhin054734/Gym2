import React from 'react'

function Fith() {
  return (
    <div>
        <div className="grid lg:grid-cols-2 ">
        <div className="flex justify-center items-center px-10">
                <div className="">
                <p className='font-bold text-6xl text-lime-400 '>Build Daily <br /> Habits For <br /> Better Health</p>
                <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magni sed asperiores. Repellat error cupiditate laudantium dignissimos pariatur.</p>
                <div className="px-20">
                    <button className='px-5 py-2 rounded-3xl bg-lime-500 cursor-pointer border-1 '> Join Now </button>
                </div>
            </div>
        </div>


           <div className="min-h-[500px] px-10 py-5 grid lg:grid-cols-3 gap-5 group">
  <div className="row-span-2">
    <img 
      src="https://i.pinimg.com/1200x/de/8f/57/de8f579651b2e0a6cddbd359182f95ad.jpg" 
      alt="" 
      className="object-cover w-full h-full rounded-2xl group-hover:blur-[1px] hover:blur-0 transition-all duration-700 hover:scale-120"
    />
  </div>

  <div className="col-span-2 row-span-3">
    <img 
      src="https://i.pinimg.com/736x/8a/dd/cb/8addcbd54b4235630866392bc3ca6ad1.jpg" 
      alt="" 
      className="object-cover w-full h-full rounded-2xl group-hover:blur-[1px] hover:blur-0 transition-all duration-700 hover:scale-120"
    />
  </div>

  <div className="row-span-3">
    <img 
      src="https://i.pinimg.com/1200x/5c/f4/94/5cf4944d6dd1069bf09dbc510f903dec.jpg" 
      alt="" 
      className="object-cover w-full h-full rounded-2xl group-hover:blur-[1px] hover:blur-0 transition-all duration-700 hover:scale-120"
    />
  </div>

  <div className="row-span-2">
    <img 
      src="https://i.pinimg.com/1200x/c8/5b/0d/c85b0d3fb529c1e9196ad5575e8d672d.jpg" 
      alt="" 
      className="object-cover w-full h-full rounded-2xl group-hover:blur-[1px] hover:blur-0 transition-all duration-700 hover:scale-120"
    />
  </div>

  <div className="row-span-2">
    <img 
      src="https://i.pinimg.com/1200x/93/59/56/93595619500f839bd88e45b21001910c.jpg" 
      alt="" 
      className="object-cover w-full h-full rounded-2xl group-hover:blur-[1px] hover:blur-0 transition-all duration-700 hover:scale-120"
    />
  </div>
</div>

        </div>
    </div>
  )
}

export default Fith