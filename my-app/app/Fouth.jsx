import React from 'react'

function Fouth() {
  return (
    <div>
        <div className=" mx-auto flex justify-center items-center px-10">
                <div className="grid lg:grid-cols-2">
                   
                        <div className="w-full h-96 flex items-center justify-center bg-black">
      <video
        src="https://videocdn.cdnpk.net/videos/0c3eb1dd-8f23-47cc-acb7-d43502aa965c/horizontal/previews/clear/large.mp4?token=exp=1758115672~hmac=1763a6a9921a93861670ad204434a9aa83a7e2462c34ca42ac81c858a91a151b"
       
        className="w-full h-80 object-cover"
      />
    </div>

    <div className="bg-lime-200">
        <div className="px-10 py-5">
          <button className='px-7 py-2 border-1 rounded-2xl hover:cursor-pointer'>
            Complete equipment
          </button>

          <div className="py-5">
            <p className='text-5xl font-bold'>Comfortable and Well-equipment gym</p>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat porro voluptatum molestias eius quibusdam animi dolores qui adipisci exercitationem tenetur, laudantium officia impedit reiciendis, facilis eligendi dolor sunt reprehenderit!</p>
          </div>

          <div className="">
            <button className='px-5 py-2 rounded-3xl bg-lime-400 font-bold hover:cursor-grab  active:cursor-grabbing '>Learn More</button>
          </div>
        </div>
    </div>
                    </div>
                
        </div>
    </div>
  )
}

export default Fouth