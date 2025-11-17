import Splash from "../components/splash"
import BioTemplate from "./bio_template"

function AboutDrChao() {
  return (
    <>
      <Splash
        imageUrl="/assets/about/drchao.jpg"
        title="Fred Chao, DDS"
      >  
      </Splash>
      <BioTemplate>
        <p><b>Dr. Fred Chao</b> has been serving the oral health needs of West Los Angeles communities with gentle hands, compassion, and expertise for over 20 years. He graduated from UCLA with a bachelor&apos;s degree in Microbiology and Molecular Genetics before going across town to USC to earn his DDS dental degree.</p>
        <p>Throughout the years, Dr. Chao has earned the faith of parents, and their children, and their children&apos;s children. Patients have entrusted him to perform simple preventive procedures to complex smile makeovers to saving their lives with early cancer detection. He believes in centering care, kindness, and compassion while using the latest, clinically-established knowledge and technologies, with proven track records, to ensure patients receive the highest quality of care.</p>

        <p>Outside of work, he enjoys spending time with his wife and two kids, playing basketball, traveling, and exploring culinary delights. But mostly basketball. Ball is life.</p>
      </BioTemplate>
    </>
  )
}

export default AboutDrChao