import { FaRecycle } from "react-icons/fa";
import React, { useEffect } from "react";
import {Card, CardHeader, CardFooter,  Button,Link, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { BsLightbulb } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";
import { BsMotherboard } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { LuPencilRuler } from "react-icons/lu";
import Aos from 'aos'
import "aos/dist/aos.css"


export default function Home() {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    // el site ma9souma 3ala 6
    // part 1 (feha el taswira png)
      <div className="flex flex-col w-full h-full overflow-hidden bg-black ">

        {/* el reflet */}
        <div className=" fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial left-[-10%] top-[-30%] "></div>

        <div className="fixed z-0 w-[700px] h-[700px] rounded-full blur-3xl bg-[#D3570D]/10 rotate-45 bg-gradient-radial right-[-10%] bottom-[-30%] "></div>
        
        <div className=" sm:h-screen   flex flex-col justify-center items-center md:flex-row lg:m-6 "  >

          <div className="w-full h-[50%] md:w-[50%] md:h-full flex justify-center items-center   md:mr-5 lg:mr-10">
            <div className="z-0 absolute top-0 left-0 w-[30%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-right"
              data-aos-duration="1500"></div>
            <img
              src="/centre.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="brightness-75 w-[90%] h-[80%] object-cover object-left-bottom"
              data-aos="slide-left"
              data-aos-duration="1500"
            />
          </div>

          <div className=" w-full md:w-[50%] flex flex-col  px-5 py-6 sm:py-8  h-full md:justify-center" data-aos="slide-left"
            data-aos-duration="1500" >

            <p className=" text-foreground-400 font-bold text-sm  sm:text-xl sm:mb-3 lg:text-lg">
              In der Welt der digitalen Kundenservice-Lösungen
            </p>

            <p className=" font-bold text-[#D3570D] text-xl  lg:text-5xl sm:text-2xl md:mb-7 ">IHR GLOBALER STRATEGISCHER PARTNER</p>

            <p className="text-sm text-white mb-5 text-md lg:text-lg sm:mb-7">
                Willkommen bei MegaTel – Ihrem erstklassigen Partner für
                professionelle Callcenter-Dienstleistungen ! Wir präsentieren
                Ihnen heute unsere erstklassigen Callcenter-Dienstleistungen,
                die speziell auf die Bedürfnisse von Großunternehmen
                zugeschnitten sind.
            </p>

            <Button
                as={Link}
                href="#content"
                className="text-white w-[200px] text-md font-semibold bg-[#D3570D]   lg:text-xl pb-1 "
                
                data-aos="slide-up"
                data-aos-duration="1500">
                Mehr sehen
            </Button>

          </div>
          
        </div>

        {/* part 2 (li feha el cards mta3 el nwamer) */}
  
        <div id="content" className="sm:h-screen w-full flex flex-col justify-center items-center overflow-hidden lg:flex-row ">

        


          <div className="lg:w-[50%] lg:p-2">

          <div className="flex flex-col justify-center pl-7" data-aos="slide-right" data-aos-duration="1500">

            <p className="text-foreground-400  font-bold text-sm sm:text-lg md:text-xl mb-2 ">
              Erfahrung und Stabilität
            </p>

            <p className="text-[#d3570d] font-bold text-2xl  mb-2 sm:text-2xl  md:text-5xl lg:mb-8" >
              7 Jahre ungeschlagener Erfolg
            </p>

            <p className="text-white w-full  text-[13px]  mb-5 sm:text-[15px] sm:w-[80%] md:text-lg  lg:text-md  lg:mb-8" >
              MegaTel ist ein führendes Callcenter-Unternehmen, das sich auf
              herausragende Kommunikationslösungen spezialisiert hat. Mit
              langjähriger Erfahrung bieten wir Ihnen qualitativ hochwertige
              Dienstleistungen, die auf Ihre individuellen Bedürfnisse
              zugeschnitten sind.
            </p>

          </div>

            <div className=" flex  justify-start w-full ">

                <div className=" shadow-xl w-[120px] border-r-2  mb-5 flex flex-col justify-start items-center  md:w-[150px] "
                data-aos="flip-left" data-aos-duration="1500">
                  <p className="text-white text-2xl mb-1 md:text-4xl">19+</p>
                  <p className="text-white text-[13px] text-center md:text-md">
                    Projekt erfolgreich abgeschlossen.
                  </p>
                </div>
  
                <div className=" shadow-xl w-[120px] border-r-2  mb-5 flex flex-col justify-start items-center md:w-[150px] px-2" data-aos="flip-left" data-aos-duration="1500">
                  <p className="text-white text-2xl mb-1 md:text-4xl">7+</p>
                  <p className="text-white text-[13px] text-center md:text-md">
                    Jahrelange Erfahrung mit stolz.
                  </p>
                </div>

                <div className="shadow-xl w-[120px] border-r-2  mb-5 flex flex-col justify-start items-center md:w-[150px]" data-aos="flip-left" data-aos-duration="1500">
                  <p className="text-white text-2xl mb-1 md:text-4xl">10+</p>
                  <p className="text-white text-[13px] text-center md:text-md" >
                    Partnerschaft weltweit.
                  </p>
                </div>
  
                <div className="shadow-xl w-[120px] mb-5 flex flex-col justify-start items-center md:w-[150px]" data-aos="flip-left" data-aos-duration="1500">
                  <p className="text-white text-2xl mb-1 md:text-4xl">150+</p>
                  <p className="text-white text-[13px] text-center md:text-md">
                    Mitarbeiter weltweit.
                  </p>
                </div>

            </div>

            </div>
          <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 right-0 w-[60%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-left" data-aos-duration="1500"></div>
            <img
              src="/bg.jpeg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="brightness-75 w-[90%] h-[80%]" 
              data-aos="slide-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
            />
          </div>

        </div>

        {/* part 3 (mta3 el lamba XD) */}
      
        <div className="sm:h-screen flex flex-col justify-evenly items-center overflow-hidden py-5 sm:py-1">
          
          <div className="lg:h-[30%] lg:w-full text-center lg:flex lg:flex-col lg:items-center lg:mt-10  ">
          <p className="text-[#d3570d] font-semibold text-md sm:text-lg md:text-xl lg:text-4xl lg:mb-5   " data-aos="fade-down" data-aos-duration="1500">Stabilität und Qualität</p>

          <p className="font-semibold text-white  text-3xl sm:text-4xl lg:text-7xl" data-aos="fade-down" data-aos-duration="1500">Qualitätsservice</p>
          </div>



          <div className="lg:h-[50%] w-full lg:flex lg:flex-row lg:justify-center lg:items-start">

          <div className=" w-full flex flex-col  p-5  flex-shrink-0 lg:w-1/4  lg:border-2 lg:py-5 lg:h-[60%] mr-20" data-aos="flip-up" data-aos-duration="1500">
            
            <p className="text-xl text-[#d3570d] mb-2 font-semibold sm:text-4xl md:text-4xl flex"><BsLightbulb size={40}  color="#d3570d" className="mb-1 hover:animate-pulse bg-white p-1 felx-shrink-0 rounded-md mr-3"/>Flexibilität</p>
            <p className="text-sm text-white sm:text-lg md:text-2xl">Flexible Dienstleistungen nach Bedarf Skalierbare Lösungen für Unternehmenswachstum</p>
          </div>

          <div className=" w-full p-5  border-2  flex flex-col  flex-shrink-0 lg:w-1/4  lg:py-5  lg:h-[60%] mr-20"  data-aos="flip-up" data-aos-duration="1500">
            
            <p className="text-xl text-[#d3570d] mb-2 font-semibold sm:text-2xl md:text-4xl flex"><BsPersonCheck size={40}  color="#d3570d" className="mb-1 hover:animate-pulse bg-white p-1 felx-shrink-0 rounded-md mr-3" />Expertise</p>
            <p className=" text-white text-sm sm:text-lg md:text-xl">Spezialisierte Teams mit fundiertem Fachwissen Kontinuierliche Schulungen für Mitarbeiter</p>
          </div>

          <div className=" w-full p-5  border-2  flex flex-col  flex-shrink-0 lg:w-1/4  lg:py-5  lg:h-[60%] " data-aos="flip-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
            
            <p className="text-xl text-[#d3570d] mb-2 font-semibold sm:text-2xl md:text-4xl flex"><BsMotherboard size={40}  color="#d3570d" className="mb-1 hover:animate-pulse bg-white p-2 felx-shrink-0 rounded-md mr-3"/>Technologie</p>
            <p className="text-sm text-white sm:text-lg md:text-xl">Modernste Kommunikationstechnologien Sicherheitsprotokolle für den Datenschutz</p>
          </div>

          </div>
          
          {/* <div className="w-20 h-2 rounded-xl bg-[#d3570d] shadow-2xl mb-3"></div> */}

        </div>

        {/* part 4 (li feha el dwer) */}

        <div  className="sm:h-screen text-white flex flex-col  overflow-hidden  lg:flex-row  ">

          <div className="lg:w-[50%] py-5 flex flex-col justify-center items-center">

          <p className="font-semibold text-center text-xl text-[#d3570d] md:text-2xl" data-aos="fade-down" data-aos-duration="1500">Nachhaltigkeit</p>

          <p className=" text-center text-xl mb-10 sm:text-2xl sm:px-10 sm:mb-4 md:text-3xl" data-aos="fade-down" data-aos-duration="1500"> Engagiert dafür mit jüngeren Meinungen die Welt zu verändern für die nächste Generation!</p>

          {/*3melt div 5ater bech nlem el zoz col li fihom eldwer wou npositioni kima n7eb   */}

          <div className="flex justify-evenly mt-10 "> 

            <div className="  flex text-white justify-evenly  sm:flex-col sm:justify-between mr-10 ">
              
                <div className="flex flex-col  justify-center items-center sm:mb-5  ">
                  <div className="w-[120px] shadow-xl mb-3 aspect-square bg-white rounded-full flex justify-center items-center md:w-[120px]" data-aos="zoom-in" data-aos-duration="1500">
                  <FaRecycle className="w-[40px] h-[50px] md:w-[50px] hover:animate-spin" style={{color:"#d3570d"}}/>
                  </div>
                  <p className="font-bold  text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Nachhaltigkeit</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center md:w-[120px]" data-aos="zoom-in" data-aos-duration="1500">
                  <FaRegClock className="w-[40px] h-[50px] hover:animate-spin md:w-[50px]" style={{color:"#d3570d"}} />
                  </div>
                  <p className="font-bold  text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Pünktlichkeit</p>
                </div>

            </div>

              <div className=" flex  justify-evenly  sm:flex-col ">

                <div className="flex flex-col justify-center items-center sm:mb-5 ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center md:w-[120px]" data-aos="zoom-in" data-aos-duration="1500">
                  <FaComputer className="w-[40px] h-[50px] hover:animate-pulse md:w-[50px]" style={{color:"#d3570d"}} />
                  </div>
                  <p className="font-bold  text-center  text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom" >Moderne technologie</p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                  <div className="w-[120px] mb-3 shadow-xl aspect-square bg-white rounded-full flex justify-center items-center md:w-[120px] " data-aos="zoom-in" data-aos-duration="1500">
                  <LuPencilRuler className="w-[40px] h-[50px] hover:animate-spin md:w-[50px]" style={{color:"#d3570d"}} />
                  </div>
                  <p className="font-bold  text-center text-xl md:text-2xl" data-aos="fade-down" data-aos-anchor-placement="top-bottom" >Qualität</p>
                </div>

            </div>
          </div>

          </div>

          <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 right-0 w-[60%] h-[100%] bg-[#D3570D]/70 " data-aos="slide-left" data-aos-duration="1500"></div>

          <img
              src="/custom2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="brightness-75 w-[90%] h-[80%] object-cover object-right" 
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
              
        />

      </div>
    
        </div>

    
      {/* el part 4 (li feha el taswira wel popovers) */}

    <div className="sm:h-screen flex flex-col lg:flex-row lg:items-center">
    
    <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 left-0 w-[60%] h-[100%]  bg-[#D3570D]/70 " data-aos="slide-right" data-aos-duration="1500"></div>
        <img
                src="/img_centre.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className="brightness-75 w-[90%] h-[80%] object-cover z-10" 
                data-aos="slide-left"
                data-aos-duration="1500"
                
        />

      </div>

      <div className="z-0   flex flex-col justify-center p-3 overflow-hidden lg:w-[50%] lg:h-full " data-aos="slide-left" data-aos-duration="1500">

        <p className="text-default-400 font-semibold text-xl z-0 md:text-2xl md:mt-5 " >Nachhaltigkeit</p>

        <p className=" text-[#d3570d] font-bold  text-4xl mb-2 z-0 md:text-4xl sm:mb-5 lg:text-5xl" >Unsere Standorte</p>

        <p className="  text-white mb-4 z-0 md:text-lg sm:mb-7" >Unsere hauptfilialen sind es in Tunesien und Bulgarien und wir sind stolz darauf, lokale Präsenz in strategisch wichtigen Regionen zu zeigen. Doch gehen wir über physische Grenzen hinaus. Unsere Vernetzung reicht weltweit, da wir digital mit jedem unserer Partner und Mitarbeiter verbunden sind.</p>
        
        <div className="flex justify-center ">

          <Popover placement="bottom">
            <PopoverTrigger>
              <Button className="bg-[#d3570d] text-white font-bold sm:text-lg " >Tunesien</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">2050 Tunis Straße, Ben Arous</div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="bottom">
            <PopoverTrigger>
              <Button className="bg-[#d3570d] text-white font-bold mx-2 sm:text-lg " >Bulgarien</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">1000 Sofia Straße, Knyaz Boris</div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover placement="bottom">
            <PopoverTrigger>
              <Button className="bg-[#d3570d] text-white font-bold sm:text-lg ">Weltweit</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Homeoffice</div>
              </div>
            </PopoverContent>
          </Popover>
          </div>
        </div>

      </div>

      {/* el blasa li feha ceo */}

      <div className="sm:h-screen flex flex-col sm:flex-row justify-between items-center ">

        <div className="sm:w-[50%] flex flex-col items-center sm:ml-5 ">

          <p className="text-center text-sm text-default-400 sm:text-lg md:text-2xl" data-aos="fade-down" data-aos-duration="1500">Mit uns haben Sie Ihren Zukunft gesichert</p>

          <p className="font-bold text-[#d3570d] text-center mb-3  text-lg  sm:text-2xl sm:mb-3 md:text-3xl md:mb-10  lg:text-4xl  " data-aos="fade-down" data-aos-duration="1500">Wir sind ein weltweit führendes internationales Unternehmen</p>

          <div className="w-full flex flex-col justify-center items-center sm:flex-row mb-5 md:mb-10   ">

            <Card isFooterBlurred className="w-[190px] h-[190px] mb-3 sm:mb-0 sm:mr-3 " data-aos="zoom-in" data-aos-duration="1500">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
            </CardHeader>
            <img
              alt="Card example background"

              className="z-0 w-full h-full  scale-100 -translate-y-7 object-cover"
              src="/person.jpg"
            />
            <CardFooter className="absolute bg-[#2d4059]/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-lg">Mourad Gherab</p>
                <p className="text-black text-tiny">CEO</p>
              </div>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-[190px] h-[190px] " data-aos="zoom-in" data-aos-duration="1500">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
            </CardHeader>
            <img
              alt="Card example background"
              width={500}
              height={500}
              className="z-0 w-full h-full scale-100 -translate-y-7 object-cover"
              src="/person.jpg"
            />
            <CardFooter className="absolute bg-[#2d4059]/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-lg">Admir Kolasinac</p>
                <p className="text-black text-tiny">COO,CEO</p>
              </div>
            </CardFooter>
          </Card>


          </div>
          <Button href="/uber" as={Link}  className="text-white w-[50%] mb-3  text-lg font-semibold bg-[#D3570D]" data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">ÜBER UNS</Button>


        </div>

        <div className="lg:h-full lg:w-[50%] flex justify-center items-center relative">
            <div className="z-0 absolute top-0 right-0 w-[60%] h-[100%]  bg-[#D3570D]/70 " data-aos="slide-left" data-aos-duration="1500"></div>

        <img
              src="/workEnv.jpg"
              alt="Picture of the author"

              className="brightness-75 w-[90%] h-[80%] object-cover z-10" 
              data-aos="zoom-in"
              data-aos-duration="1500"
              
        />
        </div>
            
      </div>



      
      

    </div>

  );
}

