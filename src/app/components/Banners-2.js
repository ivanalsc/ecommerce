"use client"

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const Banners2 = () => {

    const banner = useRef(null);

    const isInView = useInView(banner, { once: true });

    

  return (
    <div className="flex  gap-8 px-24 m-auto items-end overflow-hidden mt-8 mb-8" ref={banner}>
 <div  className="min-w-[60%]" style={{
        transform: isInView ? "none" : "translateX(-1000px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
      }}>
        <p  className="flex align-bottom text-6xl justify-end">LIFE</p>


    </div>
    <div  className="flex align-bottom"
   
    style={{
        transform: isInView ? "none" : "translateX(1000px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
      }}>
    <Image src="/5.jpg" width={455} height={400} className="grayscale hover:filter-none" />

    </div>
    </div>
    
   
  )
}

export default Banners2