import {
  useContext,
  useEffect,
  useState,
} from 'react';
import { NavLink, useNavigate } from "react-router"

import { AppContext } from './AppContext';
import { navigationItems } from '../config/site.ts';
import { officeConfig } from '../config/site.ts';

function Navigation() {
  const { data, updateNav } = useContext(AppContext)
  const { navState } = data
  const { extended } = navState
  const [scrolledPastPoint, setScrolledPastPoint] = useState(false);
  const targetScrollY = 100; // Define the scroll position in pixels
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      updateNav({
        extended: false
      })
    }

    const handleScroll = () => {
      if (window.scrollY > targetScrollY) {
        setScrolledPastPoint(true);
      } else {
        setScrolledPastPoint(false);
      }
    };

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or window resizes
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize)
    };
  }, [updateNav])

  useEffect(() => {
    // init on scrolled refresh
    setScrolledPastPoint(window.scrollY > targetScrollY);
  }, [])

  function onLogoClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    navigate("/")
  }

  const { address } = officeConfig

  function dismissMobileNavigation() {
    updateNav({ extended: false })
  }

  return (
    <nav className="fixed z-50 w-full">
      <div className="mobile-navigation block md:hidden" data-extended={extended}>
        <div className="backdrop"></div>
        <div className={`absolute top-20 left-8 flex flex-col gap-4`}>
          <a className={`text-3xl whitespace-nowrap font-semibold transition-all duration-300 ease-in-out text-sky-950 transform ${ extended ? `translate-x-0 delay-250` : "-translate-x-100 delay-0"}`}>
            <img src="/assets/rcd_logo_stack_left.svg" className="w-[250px] mb-8" />
          </a>
          {
            navigationItems.map((item, ndx) => {
              return <NavLink 
                to={item.url}
                key={`desktop-nav-item-${ndx}`}
                onClick={dismissMobileNavigation}
                className={`text-3xl whitespace-nowrap font-semibold transition-all duration-300 ease-in-out text-sky-950 transform ${ extended ? `translate-x-0 delay-${300 + (50 * ndx)}` : "-translate-x-100 delay-0"} `}
                >
                  {item.label}
                </NavLink>
            })
          }
          <a 
            href={address.href} 
            target="_blank"
            className={`mt-12 text-xl md:text-2xl whitespace-nowrap font-semibold transition-all duration-300 ease-in-out text-sky-950 transform ${ extended ? `translate-x-0 delay-${300 + (50 * navigationItems.length)}` : "-translate-x-100 delay-0"} `}
          >
            { address.street1 }<br/>
            { address.city}, { address.state } { address.zip }
          </a>
        </div>
      </div>
      <div className="absolute bg-white top-0 left-0 block md:hidden w-full">
        <div className="w-full flex items-center">
          <div className="w-[50px]">
            &nbsp;
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div 
              className="mobile-navigation-logo mx-auto inline-block cursor-pointer transition-all duration-300 opacity-100"
              onClick={onLogoClick}
            >
              <img src="/assets/rcd_logo_small.svg" className="w-[140px] block" alt="Rangel Chao Dental" />
            </div>
          </div>
          <div 
            className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              updateNav({extended: !extended})
            }}
          >
            <div className="relative">
              <div id="nav-button" className="" data-extended={extended}>
                <div className="nav-button-bar"></div>
                <div className="nav-button-bar"></div>
                <div className="nav-button-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute w-full hidden md:flex md:items-center top-0 left-0 px-4 py-0.5 lg:py-1 bg-transparent ${scrolledPastPoint ? 'bg-white' : ''} transition-all duration-800 ease-in-out`}>
        <div className=" flex-3 relative cursor-pointer"  onClick={onLogoClick}>
          <div className={`absolute top-0 left-0 ${scrolledPastPoint ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
            <img src="/assets/rcd_logo_large.svg" className="w-[w-60] lg:w-[280px] hidden md:block" alt="Rangel Chao Dental" />
          </div>
          <img src="/assets/rcd_logo_large_invert.svg" className={`w-60 lg:w-[280px] block transition-opacity duration-300 ${scrolledPastPoint ? "opacity-0" : "opacity-100"}`} alt="Rangel Chao Dental" />
        </div>
        <div className="flex-3">
          <div className="desktop-navigation" data-background={scrolledPastPoint}>
            <div className="flex justify-end gap-2 lg:gap-4 xl:gap-8">
              {
                navigationItems.map((item, ndx) => {
                  return <NavLink 
                    to={item.url}
                    key={`desktop-nav-item-${ndx}`}
                    className={`px-2 relative text-sm lg:text-base xl:text-xl whitespace-nowrap font-semibold ${item.classes ?? ''} transition-all duration-300 ${ scrolledPastPoint ? "text-sky-900" : "text-sky-900"}`}
                    >
                      {item.label}
                    </NavLink>
                })
              }
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navigation;