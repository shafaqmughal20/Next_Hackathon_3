"use client"

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Nav2 from "@/components/Nav2";

export default function VortexDemoSecond() {
  return (
   <div className="mb-14 items-center justify-center w-screen bg-black">
    <Nav2 />
    <div>
    <div className=" mx-auto rounded-md w-screen h-screen overflow-hidden pt-32">
     
     <Vortex
       backgroundColor="black"
       rangeY={800}
       particleCount={500}
       baseHue={120}
       className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
     >
       <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         Order Dispatch Successfully ...
       </h2>
       <br />
       <h3 className="text-white text-2xl md:text-6xl font-bold text-center">
           Thanks You For Shopping 
       </h3>
     </Vortex>
   </div>
    </div>
   </div>
  );
}
