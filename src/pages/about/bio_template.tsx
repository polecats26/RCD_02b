import BioLinks from "./bio_links"

type BioTemplate = {
  children?: React.ReactNode;
}

const BioTemplate: React.FC<BioTemplate> = ({ children }) => {
  return (
    <div className="bg-white py-12 text-sky-900">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="flex-3 order-1 md:order-0">
          <div className="w-full pr-16 text-right">
            <BioLinks />
          </div>
        </div>
        <div className="flex-3 px-8 md:pr-16 md:pl-0 order-0 md:order-1 pb-[30px] md:pb-[100px]">
          <div className="bio-text max-w-2xl text-base md:text-lg text-justify leading-normal md:leading-loose">
            { children }
          </div>
        </div>
      </div>
    </div>
  )

}

export default BioTemplate