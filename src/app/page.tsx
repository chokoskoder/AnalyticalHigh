import Hero from "@/components/public/hero";
import Navbar from "@/components/public/navbar";



export default function Home() {

  return (
    <div className="relative w-full h-dvh flex-col content-center">
      <Navbar/>
      <Hero/>
    </div>

  );
}
