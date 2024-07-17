"use client"

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const Banners = () => {

    const banner = useRef(null);

    const isInView = useInView(banner, { once: true });

    

  return (
    <div className="flex gap-8 px-24 m-auto items-end overflow-hidden" ref={banner}>
 <div  style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
    <Image src="/3.jpg" width={455} height={400} className="grayscale hover:filter-none" />

    </div>
    <div  className="flex align-bottom"
   
    style={{
        transform: isInView ? "none" : "translateX(1000px)",
        opacity: isInView ? 1 : 0,
        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
      }}>
        <p  className="flex align-bottom text-6xl">ENJOY</p>
    </div>
    </div>
    
   
  )
}

export default Banners