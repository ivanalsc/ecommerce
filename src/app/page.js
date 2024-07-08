import Shelf from "./components/Shelf";
import Header from "./components/Header";



export default function Home() {
  return (
    <>
    <Header />

      <main className="flex min-h-screen flex-col px-24 py-12">
      <div>
        <p className="text-white text-left text-9xl" >JEWELERY</p>
      </div>
    <Shelf/>
    
    </main>
    </>
  
  );
}
