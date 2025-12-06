import { 
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Transition,
} from '@headlessui/react'
import { useEffect, useState, type PropsWithChildren } from 'react'


type ServiceCategory = {
  title: string;
  children: React.ReactNode;
}

type ModalTypes = 'crowns' | 'fillings' | 'hygiene' | 'cosmetic'

interface BeforeAfterChildren {
  // Other props if any
  index: number;
  children: [React.ReactNode, React.ReactNode]; // Tuple type for exactly two children
}

function Services() {
  const [showModal, setShowModal] = useState(false)
  const [activeModal, setActiveModal] = useState<ModalTypes | null>(null)
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const modalData = {
    "crowns": {
      title: "Single-Visit Crowns",
      numSlides: 3,
      slides: [
        { before: "/assets/services/crowns_before1.56b70f86.jpg", after: "/assets/services/crowns_after1.b2012a1e.jpg" },
        { before: "/assets/services/crowns_before2.d63b47a6.jpg", after: "/assets/services/crowns_after2.b5e18d29.jpg" },
        { before: "/assets/services/crowns_before3.f95d8b36.jpg", after: "/assets/services/crowns_after3.0adf4d30.jpg" }
      ]
    },
    "fillings": {
      title: "Mercury-free Fillings",
      numSlides: 1,
      slides: [
        { before: "/assets/services/metalfree_before.43e9e03b.jpg", after: "/assets/services/metalfree_after.77313109.jpg" }
      ]
    },
    "hygiene": {
      title: "Oral Hygiene & Preventive",
      numSlides: 1,
      slides: [
        { before: "/assets/services/oralhygiene_before.6a70ef9c.jpg", after: "/assets/services/oralhygiene_after.ac3a663c.jpg" }
      ]
    },
    "cosmetic": {
      title: "Cosmetic & Esthetic Solutions",
      numSlides: 1,
      slides: [
        { before: "/assets/services/cosmetic_before.891c7841.jpg", after: "/assets/services/cosmetic_after.bf6783e3.jpg" }
      ]
    }
  }

  const currentModalData = activeModal ? modalData[activeModal] : null

  function nextSlide() {
    setSlideIndex(prevIndex => {
      const currentNumSlides = currentModalData?.numSlides ?? 0
      const nextIndex = prevIndex < currentNumSlides ? prevIndex + 1 : 1
      return nextIndex
    })
  }

  function Carousel({children}:PropsWithChildren) {
    return (
      <div className="w-full h-[380px] relative" onClick={nextSlide}>
        { children }
      </div>
    )
  }

  function BeforeAfter({index, children}:BeforeAfterChildren) {
    if (!children) return null
  
    return <div className="w-full h-[380px] absolute top-0 left-0 select-none" data-slide data-slide-index={index}>
      <div className="relative mb-3 rounded-lg overflow-hidden">
        <div className="absolute text-sm top-0 left-0 p-1 px-4 bg-white text-sky-900 rounded-br-lg overflow-hidden">
          Before
        </div>
        { children[0] }
      </div>
      <div className="relative rounded-lg overflow-hidden">
        <div className="absolute text-sm bottom-0 right-0 p-1 px-4 bg-white text-sky-900 rounded-tl-lg overflow-hidden">
          After
        </div>
        { children[1] }
      </div>
    </div>
  }

  function openModal(key: ModalTypes) {
    if (modalData[key]) {
      setActiveModal(key)
      setShowModal(true)
      setSlideIndex(1)
    }
  }


  const ServiceCategory: React.FC<ServiceCategory> = ({title, children}) => {
    return (
      <div className="flex-1 p-8 rounded-xl bg-linear-to-b from-white/10 to-white/20 service-category transition-all duration-300 border border-white/30">
        <h2 className="services cinzel">{ title }</h2>
        { children }
      </div>
    )
  }

  function closeModal() {
    setSlideIndex(0)
    setShowModal(false)
    setActiveModal(null)
  }

  function initSlides() {
    const slides = document.querySelectorAll('div[data-slide]');
    for (let i = 0; i < slides.length; i++) {
      const elem = slides[i] as HTMLElement
      const index = Number(elem.dataset.slideIndex)
      elem.style.display = (index == slideIndex ? "block" : "none");
    }
    
  }

  useEffect(() => {
    initSlides()
  }, [slideIndex])

  function SlideNavigation() {
    if (!currentModalData) return null
    if (currentModalData && currentModalData.numSlides < 2) return null
    const numSlides = currentModalData.numSlides
    const buttons = []
    for(let i = 1; i <= numSlides; i++) {
      const active = i == slideIndex
      buttons.push(<div
        key={`modal-button-${i}`}
        className={`pointer-cursor w-4 h-4 rounded-full bg-white border border-sky-900 ${active ? "opacity-100 bg-linear-to-b from-cyan-400 to-cyan-600 border-white" : "opacity-50"}`}
        onClick={ () => { setSlideIndex(i) }}
      ></div>)
    }
    return <div className="flex gap-4 justify-center items-center">
      { buttons }
    </div>
  }

  return (
    <div id="services" className="bg-linear-to-b from-sky-700 to-sky-900 py-12">
      <div className="text-center mb-8">
        <div className="text-cyan-400 font-light cinzel tracking-wide text-base">Our Services</div>
        <div className="text-white font-light cinzel tracking-wider text-3xl md:text-4xl xl:text-5xl">Get the Care You Need</div>
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
              <li className="cursor-pointer group" onClick={ () => { openModal('crowns') } }>Single-Visit Crowns <img src="/assets/icons/open_in_new.svg" className="w-4 h-4 inline-block opacity-50 group-hover:opacity-100" alt="View Crowns" /></li>
              <li>Bridges</li>
              <li>Implant Restorations</li>
              <li className="cursor-pointer group" onClick={ () => { openModal('fillings') } }>Mercury-free Fillings <img src="/assets/icons/open_in_new.svg" className="w-4 h-4 inline-block opacity-50 group-hover:opacity-100" alt="View Metal-free Fillings" /></li>
              <li className="cursor-pointer group" onClick={ () => { openModal('hygiene') } }>Oral Hygiene & Preventive <img src="/assets/icons/open_in_new.svg" className="w-4 h-4 inline-block opacity-50 group-hover:opacity-100" alt="View Metal-free Fillings" /></li>
              <li>Digital X-Rays</li>
              <li>Dentures</li>
              <li>Gum Treatment</li>
              <li>Root Canals</li>
              <li>Oral Surgery</li>
              <li>Retainers/Mouthguards</li>
              <li>Clear Aligners Orthodontics</li>
            </ul>
          </ServiceCategory>
          <ServiceCategory title="Cosmetic Dentistry">
            <ul>
              <li className="cursor-pointer group" onClick={ () => { openModal('cosmetic') } }>Cosmetic & Esthetic solutions <img src="/assets/icons/open_in_new.svg" className="w-4 h-4 inline-block opacity-50 group-hover:opacity-100" alt="View Cosmetic & Esthetic Solutions" /></li>
              <li>Porcelain Veneers</li>
              <li>Tooth Whitening</li>
              <li>Bonding</li>
            </ul>
          </ServiceCategory>
          <Transition 
            show={showModal}
            afterEnter={initSlides}
          >
          <Dialog open={showModal} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
            <DialogBackdrop className="fixed inset-0 bg-black/40" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-full max-w-md rounded-xl bg-white/40 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                >
                  <DialogTitle as="h3" className="text-xl font-semibold text-white mb-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    <div className="drop-shadow-lg font-light cinzel tracking-widest text-center">{ currentModalData?.title }</div>
                  </DialogTitle>
                  <div className="w-full h-5/6 max-w-[310px] mx-auto">
                    {currentModalData && (
                      <Carousel>
                        {currentModalData.slides.map((slide, idx) => (
                          <BeforeAfter key={idx} index={idx + 1}>
                            <img src={slide.before} />
                            <img src={slide.after} />
                          </BeforeAfter>
                        ))}
                      </Carousel>
                    )}
                  </div>
                  <SlideNavigation />
                  <div className="mt-8 text-center">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                      onClick={closeModal}
                    >
                      Dismiss
                    </Button>
                  </div>``
                </DialogPanel>
              </div>
            </div>
          </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Services