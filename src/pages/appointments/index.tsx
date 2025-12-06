import Splash from "../components/splash";
import { officeConfig } from "../../config/site";

function Appointments() {
  const { phone, appointments} = officeConfig
  return (
    <div id="appointments">
      <Splash
        title={
          <div>
            <div className="mb-8">
              Welcome to<br/>
              <span className="text-lg font-semibold">Dr. Chao and Dr. Rangel's Office!</span>
            </div>
            <div className="text-[40px] md:text-[30px] w-5/6 lg:text-[50px] xl:text-[60px] font-light cinzel tracking-widest leading-[40px] md:leading-[30px] lg:leading-[50px] xl:leading-[60px] mb-12">
              <div className="text-[24px] lg:text-[44px] leading-10 cinzel">Book an</div>
              Appointment
            </div>
          </div>
        }
        imageUrl="/assets/splash/appointments.jpg"
      >
      </Splash>
      <div className="bg-white text-sky-900">
        <div className="flex flex-col md:flex-row">
          <div className="flex-3 order-1 md:order-0 py-12 bg-linear-to-b from-white via-white to-gray-200">
            <div className="w-full px-8 text-center md:text-right">
              <div className="text-[24px] md:text-[24px] font-light cinzel text-sky-700 mb-2">Call us Today</div>
              <div className="text-sm text-sky-900 mb-[26px]">Have questions?<br/>We'll be happy to help.</div>
              <div className="text-[32px] lg:text-[42px] font-thin text-cyan-400"><a href={phone.href}>{ phone.display }</a></div>
            </div>
          </div>
          <div className="flex-3 px-8 order-0 md:order-1 py-12 pb-[50px] md:pb-[100px] bg-linear-to-b from-sky-900 to-sky-950 text-center md:text-left">
            <div className="text-[24px] md:text-[24px] font-light cinzel text-white mb-2">Schedule an Appointment</div>
            <div className="text-sm text-cyan-400 mb-8">Making an appointment has never been easier. <br/>Just use the button below.</div>
            <a href={appointments.href} className="bg-white rounded-full text-sky-800 font-semibold inline-block cursor-pointer">
              <div className="flex items-center justify-center h-[50px]">
                <div className="flex-1 px-8">
                  <div className="text-lg lg:text-lg xl:text-xl">Book Online</div>
                </div>
              </div>
              
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;