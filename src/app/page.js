import Categories from "./Components/Categories";
import FootballMatch from "./Components/Football/FootballMatch";
import Fish from "./Components/Games/Fish";
import HotGame from "./Components/Games/HotGame";
import MarqueePage from "./Components/Marquee";
import Slider from "./Components/Slider";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";


export default async function Home() {

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto py-4  px-2">
        <MarqueePage />
        <Slider />
        <Categories />
        <HotGame />
        <FootballMatch />
        <Fish />
       
      </div>
      <Footer />
    </div>
  );
}
