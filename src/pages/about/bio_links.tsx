import { NavLink } from "react-router-dom"

function BioLinks() {
  return (
    <div className="bio-links flex flex-col gap-2 md:gap-8 md:mt-2 md:pr-8">
      <NavLink to="/about-us">Return to Office Overview</NavLink>
      <NavLink to="/about/drchao">Fred Chao, DDS</NavLink>
      <NavLink to="/about/drrangel">Cynthia Rangel, DDS</NavLink>
      <NavLink to="/about/coco">Coco Rangel, DOG</NavLink>
    </div>
  )
}

export default BioLinks