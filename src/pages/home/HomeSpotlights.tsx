import React from 'react';
import { Link } from "react-router-dom";

type Spotlight = {
  icon_url: string;
  label: string;
  link_url: string;
  link_label: string;
  children: React.ReactNode;
}

function HomeSpotlights() {
  const Spotlight: React.FC<Spotlight> = ({label, icon_url, link_url, link_label, children}) => {
    return (
      <div className="flex-1 relative">
        <img src={`assets/home/${ icon_url }`} className="mb-4 w-20 md:w-[100px] lg:w-[120px] mx-auto transition-all duration-300 " />
        <h2 className="text-center text-sky-800 text-2xl font-light cinzel tracking-widest select-none mb-4">{ label }</h2>
        <div className="text-black text-center font-light max-w-5/6 md:max-w-[250px] mx-auto leading-5 mb-[50px]">{ children }</div>
        <div className="text-center w-full absolute bottom-0">
          <Link to={ link_url } className="rounded-full py-1 md:py-2 px-8 bg-cyan-400 font-normal hover:bg-sky-600 transition-all duration-300 box-border">{ link_label }</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-white pb-12 pt-[70px] md:pt-[100px]">
      <div className="max-w-6xl mx-auto px-8">
        {/* <h1 className="gradient-header text-center text-3xl md:text-4xl mb-12">Better Dental Care</h1> */}
        <div className="w-full flex flex-col md:flex-row md:items-stretch gap-12 md:gap-4">
          <Spotlight 
            icon_url="icon_office.svg"
            label="Our Office"
            link_url="/about-us"
            link_label="Learn more"
          >
            We have been serving Santa Monica and neighboring communities since&nbsp;2005.
          </Spotlight>
          <Spotlight 
            icon_url="icon_appointments.svg"
            label="Appointments"
            link_url="/appointments"
            link_label="Schedule"
          >
            We look forward to serving you. Schedule an appointment&nbsp;today!
          </Spotlight>
          <Spotlight 
            icon_url="icon_services.svg"
            label="Our Services"
            link_url="/about-us#services"
            link_label="Find out more"
          >
            We provide a full range of services for all your&nbsp;needs.
          </Spotlight>
        </div>
      </div>
    </div>
  )
}

export default HomeSpotlights