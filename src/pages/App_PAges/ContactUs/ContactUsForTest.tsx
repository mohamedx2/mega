import { Accordion, AccordionItem } from '@nextui-org/react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Mapp from '../../../components/map/Mapp'

export default function KontaktUsForTest() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-black ">
      <div className=" fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial left-[-10%] top-[-30%] "></div>
      <div className="fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial right-[-10%] bottom-[-30%] "></div>

      <div className="sm:h-screen   flex flex-col justify-center items-center md:flex-row lg:m-6">
        <div className="w-full h-[50%] md:w-[50%] md:h-full flex justify-center items-center   md:mr-5 lg:mr-10">
          <div className="z-0 absolute top-0 left-0 w-[30%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-right"
            data-aos-duration="1500"></div>
          <Mapp />
        </div>

        <div className="bg-[url('/bg.jpeg')] w-full h-full lg:bg-none lg:w-[50%] p-2 flex flex-col justify-center  lg:justify-center lg:mt-5" data-aos="slide-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom">
          <p className="text-default-400 text-center text-xl sm:text-4xl  md:text-3xl font-bold lg:text-start ">Unsere Hauptfiliale</p>
          <p className="text-[#D3570D] text-center text-2xl sm:text-4xl sm:mb-5  md:text-5xl font-bold mb-2 lg:text-start " >Kontaktieren Sie uns</p>
          <p className="text-white text-pretty text-center text-[15px] sm:mb-lg lg:text-start   font-semibold lg:text-md  mb-5" >Möchten Sie mehr darüber erfahren, wie MegaTel Ihr Unternehmen voranbringen kann? Kontaktieren Sie uns für eine maßgeschneiderte Beratung. Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten und Ihre Kommunikationsziele zu erreichen.Entdecken Sie die Welt der erstklassigen Callcenter-Dienstleistungen mit MegaTel – Ihrem zuverlässigen Partner für exzellente Kommunikation!</p>
          <p className=" text-default-400 text-center text-xl sm:text-4xl  md:text-3xl font-bold lg:text-start mb-5" >Hauptsitz in Sofia</p>

          <Accordion variant="light" isCompact itemClasses={{title:"text-[#D3570D]  font-bold text-lg"}} data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom">
            <AccordionItem key="1" aria-label="Address" title="Address:"  >
              <p className='text-white '>1000 Sofia Straße, Knyaz Boris</p>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Telefon" title="Telefon:" className='text-white '>
              <p className='text-white '>+4915215894603</p>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Email" title="Email:" >
              <p className='text-white '>marketing@mega-tel.de</p>
              <p className='text-white '>info@mega-tel.de</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}