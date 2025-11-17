import { Link } from "react-router-dom";
import Splash from "../components/splash";
import Services from "./services.tsx";

type ProfileSpotlight = {
  url: string;
  title: string;
  imageUrl: string;
  flip?: boolean;
  children: React.ReactNode;
}

function AboutUs() {
  const ProfileSpotlight: React.FC<ProfileSpotlight> = ({url, imageUrl, title, flip, children}) => {
    if (flip) {
      return <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="order-1 flex-2 md:pt-12">
              <h2 className="font-semibold text-cyan-600 text-2xl md:text-4xl mb-4">{title}</h2>
              <div className="text-sm leading-6 w-2/3 text-sky-900 mr-auto">
                { children }
              </div>
              { 
                url && <div className="mt-8">
                  <Link to={ url } className="button primary">Learn more</Link>
                </div>
              }
            </div>
            <div 
              style={{ '--bg-image-url': `url(${imageUrl})` } as React.CSSProperties}
              className={`order-0 bg-(image:--bg-image-url) bg-cover bg-center h-[250px] md:h-[400px] mx-auto w-2/3 md:flex-1 rounded-[20px] md:rounded-[50px] md:min-h-[300px]`}
              >
            </div>
          </div>
        </div>
      </div>
    }

    return <div className="bg-white py-12 group">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="order-1 md:order-0 md:flex-2 md:text-right md:pt-12">
            <h2 className="font-semibold  text-cyan-600 text-2xl md:text-4xl mb-4">{ title }</h2>
            <div className="text-sm leading-6 w-2/3 text-sky-900 md:ml-auto">
              { children }
            </div>
            { 
              url && <div className="mt-8">
                <Link to={ url } className="button primary">Learn more</Link>
              </div>
            }
          </div>
          <div 
            style={{ '--bg-image-url': `url(${imageUrl})` } as React.CSSProperties}
            className={`order-0 md:order-1 bg-(image:--bg-image-url) bg-cover bg-center h-[250px] md:h-[400px] w-2/3 md:flex-1 mx-auto rounded-[20px] md:rounded-[50px] md:min-h-[300px]`}
          >
          </div>
        </div>
      </div>
    </div>
  }

  return (
    <div id="about">
      <Splash
        imageUrl="/assets/splash/about.jpg"
        title="Our Office"
      >
        Located on the boundary of Santa Monica and Brentwood, our modern dental office in West Los Angeles is dedicated to providing exceptional care and a positive experience for&nbsp;all&nbsp;patients.    
      </Splash>
      <div className="text-center bg-white pt-12 pb-8">
        <div className="text-cyan-400 font-semibold text-base tracking-wider">Our Office</div>
        <div className="text-sky-900 font-bold text-3xl md:text-4xl xl:text-5xl">Take the Virtual Tour</div>
      </div>
      <div className="px-8 bg-white">
        <div className="max-w-6xl mx-auto ">
          <div className="border border-cyan-400">
            <iframe 
              src="https://vt.plushglobalmedia.com/tour/TT17LEWFGZ" 
              className="w-full h-[450px]" 
              allowFullScreen 
              allow="vr; xr; accelerometer; gyroscope; autoplay;"
            >
              Your browser does not support iframes.
            </iframe>
          </div>
        </div>
      </div>
      <div className="text-center bg-white pt-12">
        <div className="text-cyan-400 font-semibold text-base tracking-wider">Our Staff</div>
        <div className="text-sky-900 font-bold text-3xl md:text-4xl xl:text-5xl">Meet our Dentists</div>
      </div>
      <ProfileSpotlight 
        url="/about/drchao"
        title="Fred Chao, DDS"
        imageUrl="/assets/about/drchao.jpg"
        flip={false}
      >
        Dr. Fred Chao has been serving the oral health needs of West Los Angeles communities with gentle hands, compassion, and expertise for over 20 years. He graduated from&nbsp;UCLA...
      </ProfileSpotlight>

      <ProfileSpotlight 
        url="/about/drrangel"
        title="Cynthia Rangel, DDS"
        imageUrl="/assets/about/drrangel.jpg"
        flip={true}
      >
        Dr. Cynthia Rangel is a dedicated and compassionate dentist, proudly serving the Los Angeles community  with a focus on patient-centered&nbsp;care...
      </ProfileSpotlight>

      <ProfileSpotlight 
        url="/about/coco"
        title="Coco Rangel, DOG"
        imageUrl="/assets/about/coco.jpg"
        flip={false}
      >
        Coco is Dr. Rangel&apos;s furbaby, a mini poodle with big paw prints to fill. Since Koda, Dr. Chao&apos;s english labrador, passed on to the rainbow&nbsp;bridge...
      </ProfileSpotlight>
      <Services />
    </div>
  );
}

export default AboutUs;
