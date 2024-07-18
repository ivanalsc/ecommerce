
import Shelf from "./components/Shelf";
import Header from "./components/Header";
import Image from "next/image";
import "./globals.css";
import Banners from "./components/Banners";
import Banners2 from "./components/Banners-2";
import AnimatedImage from "./components/AnimatedImage";





export default function Home() {


 
  return (
    <>
    <Header />

      <main className="flex min-h-screen flex-col px-24 pt-12 overflow-hidden">
      <div>
        <p className="text-black text-left text-5-xl md:text-9xl animatedText" >JEWELERY</p>
      </div>
    <Shelf/>
    
    </main>
   <Banners />
   <Banners2 />
   <div className="flex px-24 m-auto justify-center mt-4">
    <AnimatedImage src="/9.jpg" width={455} height={400} className="flex w-full mt-4 justify-start" />

   </div>
   <div className="flex px-24 m-auto justify-center mt-4">
    <AnimatedImage src="/1.jpeg" width={300} height={300} className="flex w-full mt-4 justify-center" />

   </div>
   <div className="flex px-24 m-auto justify-center mt-4">
    <AnimatedImage src="/rings.jpg" width={455} height={400} className="flex w-full mt-4 justify-end" />

   </div>
   <div className="flex px-24 m-auto justify-center mt-4">
    <AnimatedImage src="/earrings.jpg" width={300} height={300} className="flex w-full mt-4 justify-center" />

   </div>
   <div className="flex px-24 m-auto justify-center mt-4 pb-16">
    <AnimatedImage src="/7.jpg" width={455} height={400} className="flex w-full mt-4 justify-start" />

   </div>

    </>
  
  );
}
