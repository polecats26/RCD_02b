import { officeConfig } from "../../config/site"
import { useNavigate } from "react-router-dom"

function HomeHours() {
  const navigate = useNavigate()
  return (
    <div className="office-hours py-12 bg-linear-to-bl from-sky-950 to-sky-700">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-bl from-white via-white to-cyan-200 drop-shadow-[0_1px_0px_rgba(0,0,0,0.5)]">Office Hours</h1>
        <div className="grid grid-cols-7 gap-2">
          <div className="office-hours-day-header">s</div>
          <div className="office-hours-day-header">m</div>
          <div className="office-hours-day-header">t</div>
          <div className="office-hours-day-header">w</div>
          <div className="office-hours-day-header">t</div>
          <div className="office-hours-day-header">f</div>
          <div className="office-hours-day-header">s</div>

          <div></div>
          <div 
            className="col-span-5 bg-cyan-300 rounded-lg p-4 py-4 text-center text-white font-semibold shadow-lg shadow-cyan-500/50 cursor-pointer"
            onClick={ () => {navigate('/appointments') } }
          >
            <div className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] text-base md:text-xl">open</div>
          </div>
          <div></div>
        </div>
        {/* <div className="mt-8 text-sm text-cyan-500 text-center">
          <span className="text-white">*</span> call for appointment
        </div> */}
      </div>
    </div>
  )
}

export default HomeHours