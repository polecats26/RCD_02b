import {
  NavLink, 
} from 'react-router';

import { officeConfig, footerNavigationItems } from '../config/site.ts';

function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <footer className="text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="pb-[100px] md:pb-[200px] pt-8">
          <img 
            src="/assets/scroll_to_top.svg" 
            className="w-[30px] md:w-10 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
            onClick={ scrollToTop }
          />
        </div>
        <div className="w-[300px] mx-auto mb-10">
          <img src="/assets/rcd_logo_large_white.svg" alt="Rangel Chao Dental" />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-[50px] md:gap-4 px-4 flex-wrap">
          <div className="w-full">
            <div className="flex gap-4 md:gap-12 justify-center font-thin text-white text-xs md:text-sm tracking-widest">
              {
                footerNavigationItems.map((item, ndx) => {
                  return <NavLink to={item.url} key={`footer-nav-item-${ndx}`}>
                    <div className="text-center">
                      {item.label}
                    </div>
                  </NavLink>
                })
              }
            </div>
          </div>
          <div className="flex-1 group" >
            <h2 className="footer-header">
              office hours
            </h2>
            <table>
              <tbody>
                <tr className="cursor-pointer" onClick={() => { window.open(officeConfig.appointments.href) }}>
                  <td className="text-white text-lg font-semibold pr-12">monday - friday</td>
                  <td className="text-base font-thin text-right">open</td>
                </tr>
                <tr className="cursor-pointer" onClick={() => { window.open(officeConfig.phone.href) }}>
                  <td className="text-white text-lg font-semibold pr-12">saturday</td>
                  <td className="text-base font-thin text-right">call for appt.*</td>
                </tr>
                <tr className="pt-8 cursor-not-allowed">
                  <td className="text-white text-lg font-semibold pr-12">sunday</td>
                  <td className="text-base font-thin text-right">closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 md:text-right group">
            <h2 className="footer-header">
              our office
            </h2>
            <ul className="text-xs md:text-sm lg:text-base font-light">
              <li>
                <a href={officeConfig?.address?.href} target="_blank">
                  { officeConfig?.address?.street1 }<br/>{ officeConfig?.address?.city }, { officeConfig?.address?.state } { officeConfig?.address?.zip }
                </a>
              </li>
              <li className="mt-4 text-lg font-semibold">
                <a href={officeConfig?.phone?.href}>
                  { officeConfig?.phone?.display }
                </a>
              </li>

              <li className="mt-4 text-lg">
                <a href={officeConfig?.email?.href}>
                  { officeConfig?.email?.display }
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 text-xs font-light text-center text-sky-950">
          <hr className="text-white/20 pt-12" />
          Copyright &copy; { year } Rangel Chao Dental
        </div>
      </div>
    </footer>
  );
}

export default Footer;