import Shelf from "./components/Shelf";
import Header from "./components/Header";
import Image from "next/image";
import "./globals.css";




export default function Home() {
  return (
    <>
    <Header />

      <main className="flex min-h-screen flex-col px-24 pt-12">
      <div>
        <p className="text-white text-left text-9xl animatedText" >JEWELERY</p>
      </div>
    <Shelf/>
    
    </main>
    <div className="flex px-24 m-auto justify-center mt-4 fadeInUp">
      <Image src="/3.jpg" width={455} height={400} className="grayscale hover:filter-none"/>
      <Image src="/1.jpeg" width={250} height={400}className="grayscale hover:filter-none"/>

      <Image src="/5.jpg" width={455} height={400} className="grayscale hover:filter-none" />


    </div>
    <div className="flex px-24 m-auto mt-4 justify-center fadeInUp">
      <Image src="/6.jpg" width={255} height={400} className="grayscale hover:filter-none"/>
      <Image src="/9.jpg" width={658} height={400}className="grayscale hover:filter-none"/>

      <Image src="/8.jpg" width={255} height={400} className="grayscale hover:filter-none" />


    </div>
    </>
  
  );
}
