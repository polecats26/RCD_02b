type ServiceCategory = {
  title: string;
  children: React.ReactNode;
}

function Services() {


  //   useEffect(() => {
  //   const sections = document.querySelectorAll('.section')

  //   const observer = new IntersectionObserver((entries) => {
  //     each(entries, (e) => {
  //       if (e.isIntersecting) {
  //         e.target.classList.add('revealed')
  //       } else {
  //         e.target.classList.remove('revealed')
  //       }
  //     })
  //   })

  //   each(sections, (s) => observer.observe(s))
  // }, [])


  // function ServiceCategory()
  const ServiceCategory: React.FC<ServiceCategory> = ({title, children}) => {
    return (
      <div className="flex-1 p-8 rounded-xl bg-linear-to-b from-white/10 to-white/20 service-category transition-all duration-300 border border-white/30">
        <h2 className="services">{ title }</h2>
        { children }
      </div>
    )
  }

  return (
    <div id="services" className="bg-linear-to-b from-sky-700 to-sky-900 py-12">
      <div className="text-center mb-8">
        <div className="text-cyan-400 font-semibold text-base tracking-wider">Our Services</div>
        <div className="text-white font-semibold text-3xl md:text-4xl xl:text-5xl">Get the Care You Need</div>
      </div>
      <div className="text-white max-w-6xl mx-auto px-8">
        <div className="text-center mb-8">
          Dental PPO Insurance Accepted.
          <br/>
          Our office provides a full range of services including:
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center w-full ">
          <ServiceCategory title="Essential Dental Care">
            <ul>
              <li>Crowns & Bridges</li>
              <li>Implant Restorations</li>
              <li>Metal-free Filings</li>
              <li>Oral Hygiene & Preventive</li>
              <li>Dental X-Rays</li>
              <li>Dentures</li>
              <li>Gum Treatment</li>
              <li>Root Canals</li>
              <li>Extractions</li>
              <li>Retainers/Mouthguards</li>
              <li>Clear Aligners Ortho Treatment</li>
            </ul>
          </ServiceCategory>
          <ServiceCategory title="Cosmetic Dentistry">
            <ul>
              <li>Cosmetics & Esthetic solutions</li>
              <li>Porcelain Veneers</li>
              <li>Tooth Whitening</li>
              <li>Bonding</li>
            </ul>
          </ServiceCategory>
        </div>
      </div>
    </div>
  )
}

export default Services