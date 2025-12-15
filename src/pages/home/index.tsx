import { officeConfig } from "../../config/site";
import HomeSpotlights from "./HomeSpotlights";
import HomeHours from "./HomeHours";
import GoogleMapComponent from "../components/GoogleMap";
import Splash from "../components/splash";

function Home() {
  const { appointments } = officeConfig

  return (
    <div id="home">
      <Splash 
        imageUrl="/assets/splash/home.jpg"
        title={
          <div className=" text-black">
            <div className="mb-8 text-sm md:text-base">
              Welcome to<br/>
              <span className="text-base md:text-lg font-semibold">Dr. Chao and Dr. Rangel's Office!</span>
            </div>
            <div className="cinzel text-[40px] md:text-[60px] w-5/6 lg:text-[70px] xl:text-[80px] leading-[40px] md:leading-[60px] lg:leading-[70px] xl:leading-[80px] mb-8 md:mb-12 pb-8 border-b border-cyan-400 tracking-widest text-sky-700 box-content ">
              Patients<br/>
              First
            </div>
          </div>
        }
      >
        <div className="text-sm lg:text-base font-light w-[300px] lg:w-[400px] leading-loose mb-4 text-black">
          We are committed to maintaining your health with knowledge, skill, trust, and respect.
        </div>
        <div className="flex items-center gap-4">
          <a href={appointments.href} className="bg-linear-to-bl from-sky-700 to-sky-900 rounded-full px-8 py-2 md:py-4 text-white font-semibold inline-block cursor-pointer hover:from-sky-500 hover:to-sky-700 transition-all duration-300">
            <div className="text-sm lg:text-lg xl:text-xl">Book Online</div>
          </a>
        </div>
      </Splash>
      <HomeSpotlights />
      <HomeHours />
      <GoogleMapComponent />
    </div>
  );
}

export default Home;