import Hero from "@/components/public/hero";
import MyMarquee from "@/components/public/mymarquee";
import Navbar from "@/components/public/navbar";



export default function Home() {

  return (
    <div className="relative w-full flex-col content-center">
      <Navbar/>
      <Hero/>
    </div>

  );
}
