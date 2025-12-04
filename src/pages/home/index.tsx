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
          <div>
            <div className="mb-8">
              Welcome to<br/>
              <span className="text-lg font-semibold">Dr. Chao and Dr. Rangel's Office!</span>
            </div>
            <div className="text-[40px] md:text-[40px] w-5/6 lg:text-[70px] xl:text-[90px] font-semibold leading-[40px] md:leading-[40px] lg:leading-[70px] xl:leading-[90px] mb-12">
              Patients<br/>
              First
            </div>
          </div>
        }
      >
        <div className="text-sm lg:text-base font-light w-[300px] lg:w-[400px] leading-loose mb-4">
          We are committed to maintaining your health with knowledge, skill, trust, and respect.
        </div>
        <div className="flex items-center gap-4">
          <a href={appointments.href} className="bg-white rounded-full px-8 py-2 md:py-4 text-sky-800 font-semibold inline-block cursor-pointer">
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