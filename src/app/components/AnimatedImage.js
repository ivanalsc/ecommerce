
"use client"

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from 'next/image'
import React from 'react'
import "../../app/globals.css"


const AnimatedImage = ({src, width, height, className}) => {

  const image = useRef(null);

  const isImageInView = useInView(image, { once: true});

  return (
    <div className={className}>
      <Image  src={src} width={width} height={height} alt=''  ref={image} className={isImageInView ? "fadeIn" : "opacity-0"} />
    </div>
  )
}

export default AnimatedImage