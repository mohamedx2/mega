
import { AiFillEuroCircle } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGitBranch } from "react-icons/go";
import { FaAward, } from "react-icons/fa";
import {Image} from "@nextui-org/image";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
export default function AboutUsForTest(){

    useEffect(()=>{
        Aos.init()
      },[])
    
    return(
        <div className="bg-black flex flex-col w-full h-full overflow-hidden pt-5 ">
            {/* el reflet */}
        <div className=" fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial left-[-10%] top-[-30%] "></div>

        <div className="fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial right-[-10%] bottom-[-30%] "></div>
            
        <div id="content" className="sm:h-screen  w-full flex flex-col justify-center items-center overflow-hidden lg:flex-row lg:items-start ">
            
            <div className="w-full h-[50%] md:w-[50%] md:h-full flex justify-center items-center   ">
            <div className="z-0 absolute top-0 left-0 w-[30%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-right"
              data-aos-duration="1500"></div>
                <img
                src="/custom5.jpg"
                alt="Picture of the author"
                className="brightness-75 w-[90%] h-[80%] object-cover " 
                data-aos="slide-left"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
                
                />
            </div>


            <div className="bg-[url('/bg.jpeg')] w-full h-full lg:bg-none lg:w-[50%] pr-10 flex flex-col justify-center items-center lg:justify-center lg:pt-20" data-aos="slide-left"
              data-aos-duration="1500">

                <p className="text-[#D3570D] text-center text-2xl sm:text-4xl sm:mb-5 lg:text-start md:text-5xl font-bold mb-2 lg:text-4xl" >Wir sind ein weltweit führendes internationales Unternehmen</p>
                <p className="text-white text-pretty text-center text-[15px] sm:mb-lg lg:text-start   font-semibold lg:text-md mb-20" >ÜBER 7 JAHRE ERFAHRUNG liefern wir Qualität und Zuverlässigkeit! Mega Tel hat sich seit dem Jahr 2015 auf die Bearbeitung eingehender Anrufe (Inbound) spezialisiert. Wir sind gemeinsam mit unseren Auftraggebern erfolgreich, weil wir sowohl in zeitlich begrenzten wie auch in langfristigen Projekten die bestmögliche Integration unserer Tätigkeit in bestehende Arbeitsabläufe durchführen. Unsere Mitarbeiter telefonieren täglich für viele Firmen und in vielen Aufgabenbereichen. Unsere Arbeitserfahrung umfasst Aufgabenbereiche wie Telefonsekretariat, Telefonzentrale, Bestellannahme, Kundendienst, Informationsdienst, Auskunft, und Customer Care, sowie jegliche Backofficeaufgaben.
                Als professionelles Service Center liefern wir maßgeschneiderte Outsourcing-lösungen für Unternehmen National&International.
                Wir unterstützen Sie im Inbound, Marktforschung, Vertrieb, Verkauf, Leadgenerierung, Werbung, egal ob Marktforschung, Verkauf, Bestellannahme, First Level Support oder Reklamationsmanagement.</p>

            </div>

        </div>

            
            
        <div  className="sm:h-screen w-full flex flex-col overflow-hidden  lg:flex-row lg:justify-between ">

          {/*3melt div 5ater bech nlem el zoz col li fihom eldwer wou npositioni kima n7eb   */}

          <div className="h-full lg:w-[50%] sm:flex sm:justify-evenly lg:justify-evenly lg:items-center "> 

            <div className=" mb-5 flex  justify-evenly sm:flex-col sm:justify-between sm:mb-0    ">
              
                <div className="flex flex-col  justify-center items-center sm:mb-5  ">
                  <div className="w-[120px] shadow-xl mb-3 aspect-square bg-white rounded-full flex justify-center items-center sm:w-[150px]" data-aos="zoom-in" data-aos-duration="1500">
                  <AiFillEuroCircle color="#d3570d" className="w-[40px] h-[50px] md:w-[50px] hover:animate-spin" />
                  </div>
                  <p className="font-bold text-[#D3570D] text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">1.5 euros</p>
                  <p className=" text-white text-center  text-sm md:text-xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">2015-2022</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center sm:w-[150px]" data-aos="zoom-in" data-aos-duration="1500">
                  <FaPeopleGroup className="w-[40px] h-[50px] hover:animate-bounce md:w-[50px]" color="#d3570d" />
                  </div>
                  <p className="font-bold text-[#D3570D] text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">150+</p>
                  <p className=" text-white text-center  text-sm md:text-xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Kollegen & Zählen</p>
                </div>

            </div>

            <div className=" flex  justify-evenly  sm:flex-col ">

                <div className="flex flex-col justify-center items-center sm:mb-5 ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center sm:w-[150px]" data-aos="zoom-in" data-aos-duration="1500">
                  <GoGitBranch className="w-[40px] h-[50px] hover:animate-pulse md:w-[50px]" color="#d3570d" />
                  </div>
                  <p className="font-bold text-[#D3570D] text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">19+</p>
                  <p className=" text-white text-center  text-sm md:text-xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Projekt erfolgreich</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center sm:w-[150px] " data-aos="zoom-in" data-aos-duration="1500">
                  <FaAward className="w-[40px] h-[50px] hover:animate-spin md:w-[50px]" color="#d3570d" />
                  </div>
                  <p className="font-bold text-[#D3570D] text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">7+</p>
                  <p className=" text-white text-center  text-sm md:text-xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Sieben Jahre Erfahrung</p>
                </div>

            </div>

          </div>

          <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 right-0 w-[60%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-left" data-aos-duration="1500"></div>

          <img
              src="/custom4.jpg"
              alt="Picture of the author"
              className="brightness-75 w-[90%] h-[80%] object-cover object-left" 
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
              
        />
        </div>
    
        </div>
            

            <div  className="h-screen w-full flex flex-col justify-berween items-center overflow-hidden lg:flex-row lg:items-center ">

            <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 left-0 w-[60%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-right" data-aos-duration="1500"></div>

            <img
              src="/custom3.jpeg"
              alt="Picture of the author"
              className="brightness-75 w-[90%] h-[80%] object-cover " 
              data-aos="slide-left"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
              
            />
            </div>


            <div className="w-full h-full lg:w-[50%] flex flex-col justify-center items-center overflow-hidden " data-aos="slide-left"
              data-aos-duration="1500">
                
                <p className="text-7xl  text-[#D3570D] font-bold text-center mb-10" 
              data-aos-anchor-placement="top-bottom">Partnerschaft</p>
                <div className="flex flex-col justify-evenly ">
                    <Image
                        src="/logo-1.svg"
                        width={200}
                        height={50}
                        alt="Picture of the author"
                        className=" mb-5"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    />
                    <Image
                        src="/logo-2.svg"
                        width={200}
                        height={50}
                        alt="Picture of the author"
                        className=" mb-5"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    />
                    <Image
                        src="/logo-3.svg"
                        width={200}
                        height={50}
                        alt="Picture of the author"
                        className=" mb-5"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    />
                    <Image
                        src="/logo-4.svg"
                        width={200}
                        height={50}
                        alt="Picture of the author"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    />
                </div>

            </div>

        </div>


        </div>
    )
}