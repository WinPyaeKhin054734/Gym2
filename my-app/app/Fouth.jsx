import React from "react";
import FadeIn from "./FadeIn";

function Fouth() {
  return (
    <FadeIn>
      <div className="mx-auto flex justify-center items-center px-5 lg:px-10 pt-5 mt-12">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden">
          <div className="w-full h-96 flex items-center justify-center bg-black">
            {/* <video
              src="https://videocdn.cdnpk.net/videos/0c3eb1dd-8f23-47cc-acb7-d43502aa965c/horizontal/previews/clear/large.mp4?token=exp=1758115672~hmac=1763a6a9921a93861670ad204434a9aa83a7e2462c34ca42ac81c858a91a151b"
              className="w-full h-80 object-cover"
              autoPlay
              muted
              loop
              playsInline
            /> */}
            <img src="https://i.pinimg.com/736x/8a/dd/cb/8addcbd54b4235630866392bc3ca6ad1.jpg" alt="" />
          </div>

          <div className="text-white/90 bg-black flex flex-col items-center justify-center py-5">
            <div className="px-10 py-5">
              <button className="px-7 py-2 border-1 rounded-full hover:cursor-pointer">
                Complete equipment
              </button>

              <div className="py-5">
                <p className="text-5xl font-bold">
                  Comfortable and Well-equipment gym
                </p>
                <p className="text-white/60 pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  repellat porro voluptatum molestias eius quibusdam animi
                  dolores qui adipisci exercitationem tenetur, laudantium
                  officia impedit reiciendis, facilis eligendi dolor sunt
                  reprehenderit!
                </p>
              </div>

              <div className="">
                <button className="px-5 py-2 rounded-3xl border-2 border-lime-500 text-lime-500 hover:cursor-grab  active:cursor-grabbing ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Fouth;
