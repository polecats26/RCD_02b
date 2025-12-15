type Splash = {
  imageUrl: string;
  title: string | React.ReactNode;
  children?: React.ReactNode;
}

const Splash: React.FC<Splash> = ({ imageUrl, title, children }) => {
  const TitleNode = () => {
    if (typeof title === "string") {
      return <div className="text-[40px] md:text-[40px] lg:text-[70px] xl:text-80px] font-light cinzel tracking-widest leading-10 md:leading-10 lg:leading-[70px] xl:leading-20 mb-12 text-sky-700 ">
        { title }
      </div>
    }

    return title
  }

  return (
    <div className="splash-container">
      <div
        style={{ '--bg-image-url': `url(${imageUrl})` } as React.CSSProperties}
        className={`flex-2 md:flex-3 bg-(image:--bg-image-url) bg-cover bg-center h-[500px] md:h-[550px] lg:h-[800px]`}
      >
      </div>
      <div className="flex-3 p-8 md:h-[550px] lg:h-[800px] bg-white text-black">
        <div className="flex w-full h-full items-center text-black">
          <div>
            <TitleNode />
            <div className="text-sm lg:text-base font-light w-[300px] lg:w-[400px] leading-loose mb-4">
              { children }            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash