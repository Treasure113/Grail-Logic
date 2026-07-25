import { useEffect, useRef, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";


import { Button } from "./Header"
import { ConnectAccountModal } from "./HeroSection";


const image1 = '/auth-image.png'
const image2 = '/trading-acct-image.png'
const image3 = '/testimony-1.png'
const Table = '/Content.png'


function Cards() {
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState("");
    
    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-8 md:gap-12">

                {/* Card 1 (Desktop)*/}
                <div
                    className="
                        hidden
                        lg:block
                        w-full
                        lg:h-[512px]
                        lg:max-w-[1200px]
                        flex
                        flex-col
                        md:flex-row
                        md:items-stretch
                        overflow-hidden
                        rounded-xl
                        bg-[linear-gradient(180deg,#17112C_0%,#121225_45%,#0E1221_100%)]
                        relative
                    "
                >
                    {/* Text */}
                    <div className=" flex-1 flex flex-col justify-center gap-4 lg:gap-6 lg:mt-32 p-6 md:p-16">
                        <h1 className="text-[20px] md:text-[32px] font-semibold">
                            Create your Grail Logic account
                        </h1>

                        <p className="text-[#8F9BB7] text-sm lg:max-w-[465px] font-normal">
                            Sign up to start trading smarter with Grail Logic.
                            Create your account to access automated trade mirroring,
                            real-time updates, and tools designed to help you grow
                            with confidence.
                        </p>
                    </div>
                      {/* Glow */}
                      <span className="absolute w-32 h-32 bg-[#32CAFD] blur-[120px] rounded-full top-0 -right-12 -translate-x-1/2 -translate-y-1/2" />

                    {/* Image */}
                    <div className="absolute left-1/2 flex-1 flex items-center justify-center top-0 min-h-[800px] overflow-hidden">
                        
                        <div className="">
                        <img
                            src={image1}
                            alt="Create account"
                            className=" z-10 w-full max-w-[570px] p-4 "
                        />

                        
                        </div>
                    </div>
                </div>

                {/* Card 1 (Mobile) */}
                <div
                    className="
                        lg:hidden
                        w-full
                        h-[532px]
                        flex
                        flex-col
                        overflow-hidden
                        rounded-xl
                        border-[0.55px]
                        border-[#1D1B3D]
                        bg-gradient-to-r from-[#100E24] to-[#161233]
                        relative 
                    "
                >
                    {/* Text */}
                    <div className="flex flex-col justify-center px-6 py-2 gap-4 lg:gap-6">
                        <h1 className="text-[20px] md:text-[32px] font-semibold">
                            Every trade is mirrored automatically
                        </h1>

                        <p className="text-[#8F9BB7] text-sm lg:max-w-[465px] font-normal">
                            Sign up to start trading smarter with Grail Logic.
                            Create your account to access automated trade mirroring,
                            real-time updates, and tools designed to help you grow
                            with confidence.
                        </p>
                    </div>
                      {/* Glow */}
                      <span className="absolute w-32 h-32 bg-[#32CAFD] blur-[120px] rounded-full top-3/4 right-0 -translate-x-1/2 translate-y-1/2" />

                    {/* Image */}
                    <div className="absolute flex items-center justify-center min-h-[750px] overflow-hidden">
                        
                        <div className=" bg-[#0E1330]">
                        <img
                            src={image1}
                            alt="Create account"
                            className=" z-10 w-full max-w-[570px] p-4"
                        />

                        
                        </div>
                    </div>
                </div>

            <div className="w-full flex flex-col gap-8 md:flex-row md:gap-6 md:max-w-[1200px]">

                {/* Card 2 */}
                <div
                    className="
                        w-full
                        lg:max-w-[496px]
                        flex
                        flex-1
                        flex-col
                        md:flex-row
                        gap-6
                    "
                >
                    <div
                        className="
                            flex-1
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#1D1B3D]
                            bg-gradient-to-r
                            from-[#100E24]
                            to-[#161233]
                        "
                    >

                      {/* Glow Effects */}
                            <div className="absolute w-32 h-32 bg-[#41E88D] blur-[120px] rounded-full top-0 right-0 -translate-x-1/2 -translate-y-1/2" />

                            <div className="absolute w-20 h-20 bg-[#7214FF] blur-[60px] rounded-full -bottom-5 left-10" />

                          
                        {/* Image Section */}
                        <div className="relative overflow-hidden flex justify-center items-center p-8 min-h-[350px]">
                            
                          <div className="absolute top-12">
                            <img
                                src={image2}
                                alt="Connect account"
                                className="w-[262px] lg:w-[360.43px]"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="absolute top-[16rem] blur-[20px] w-full bg-gradient-to-b from-[#19113800] via-[#14112FCC] to-[#191138] p-12"/>

                        <div className="bg-[#0E1330] p-5 md:p-16 md:mt-5">
                            <h1 className="text-xl lg:text-[32px] font-semibold mb-2">
                                Connect your account
                            </h1>

                            <p className="text-sm text-white/50">
                                Link your MT4 or MT5 broker account using our
                                securely encrypted integration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className="
                        w-full
                        lg:max-w-[690px]
                        flex
                        flex-col
                        md:items-stretch
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#1D1B3D]
                        bg-gradient-to-r
                        from-[#100E24]
                        to-[#161233]
                        relative
                        
                    "
                >
                    {/* Purple Glow */}
                    <div className="absolute w-24 h-24 bg-[#7214FF] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 right-0" />

                    {/* Text */}
                    <div className="flex flex-col justify-center gap-4 p-6 md:px-16 md:py-14">
                        <h1 className="text-[20px] md:text-[32px] w-[300px] lg:w-[600px] font-semibold">
                            Every trade is mirrored automatically
                        </h1>

                        <p className="text-[#8F9BB7] font-normal">
                            Your account mirrors the master in real time with
                            fully automated trading.
                        </p>
                    </div>

                    {/* Table */}
                    <div className="lg:min-h-[320px] flex items-center justify-center px-4 ">
                        <div className="w-full max-w-[580px]">
                            <img src={Table} className="min-h-[200px] object-cover"/>
                        </div>
                    </div>
                </div>
            </div>

                {/* CTA */}
                <Button
                    label="Connect your account"
                    className="w-fit px-8 py-4"
                    onClick={() => {
                      console.log('clicked');
                      setModal(true)}} 
                />

                <ConnectAccountModal
                    modal={modal}
                    setModal={setModal}
                    userName={userName}
                    setUserName={setUserName}
                />
            </div>
        </div>
    );
}




export function EmblaCarousel() {

const autoScroll = useRef(
  AutoScroll({
    speed: 0.5,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })
);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    }, 
    [autoScroll.current]);


const testimonials = [
  {
    id: 1,
    name: "Tolu A.",
    role: "First-time Trader",
    image: image3,
    text: "I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I've never looked back.",
  },
  {
    id: 2,
    name: "Samuel K.",
    role: "Business Consultant",
    image: image3,
    text: "I don’t have time to watch charts all day, but I still wanted to grow my money. Grail Logic gave me the perfect setup — hands-off but effective."
  },
  {
    id: 3,
    name: "Matthew White",
    role: "Intermediate Trader",
    image: image3,
    text: "I used to trade manually but struggled with consistency. Mirroring a high-performing strategy has brought stability and profit to my account.",
  },
  {
    id: 4,
    name: "Tolu A.",
    role: "First-time Trader",
    image: image3,
    text: "I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I've never looked back.",
  },
  {
    id: 5,
    name: "Tolu A.",
    role: "First-time Trader",
    image: image3,
    text: "I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I've never looked back.",
  },
  {
    id: 6,
    name: "Tolu A.",
    role: "First-time Trader",
    image: image3,
    text: "I knew nothing about forex before joining Grail Logic. After connecting my account, I started seeing consistent results within the first few weeks. I've never looked back.",
  },
];


  return (

    <div className="embla w-full max-w-[1550px] mx-auto">
  <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
    <div className="embla__container flex gap-4">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="embla__slide relative shrink-0 basis-[350px] border border-[#222222]"
        >
          {/* Overlay */}
          <div className="absolute z-10 inset-0 w-[160px] h-[220px] bg-gradient-to-r from-black to-transparent" />

          <div className="relative p-3 flex flex-col gap-3 rounded-md">
            <p className="text-white text-left text-sm leading-[28px] opacity-60 w-[18rem]">
              {testimonial.text}
            </p>

            <div className="flex gap-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full"
              />

              <div className="flex flex-col gap-1">
                <p className="text-white text-sm">{testimonial.name}</p>
                <p className="text-sm text-white opacity-50">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}


function TradeTable({text1, text2, text3}) {
    return (
        <table class="custom-table">
  <thead>
    <tr>
      <th>Pair</th>
      <th>Action</th>
      <th>Profit/Loss</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EUR/USD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$340.25</td>
    </tr>
    <tr>
      <td>GBP/JPY</td>
      <td>Sell</td>
      <td class="text-[#F04438]">-$120.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
    <tr>
      <td>USD/CAD</td>
      <td>Buy</td>
      <td class="text-[#29A645]">+$210.00</td>
    </tr>
  </tbody>
</table>

    );
};

export function Testimonials() {
    return (
                <div className="flex flex-col bg-[radial-gradient(circle_at_top,#28282C_2%,#000000_%,transparent_80%)] p-[1px]">

                  <div className='bg-[#0D0D0D] lg:p-12 py-12 flex flex-col gap-12'>

                    {/* <div className={`w-full top-3 bottom-1 border-t border-black/20 p-6 border-transparent  overflow-hidden`}></div> */}
                    <div className="flex flex-col justify-center items-center gap-2 lg:gap-8">
                        <h1 className="text-[20px] lg:text-[44px]">What Our Traders Are Saying</h1>
                        <p className="text-[#EEEEEE] text-center opacity-80 text-sm md:w-1/2 lg:w-[600px]">These are real people with real results. Hear how Grail Logic is helping users grow their trading accounts with confidence and zero stress.</p>
                    </div>

                    <EmblaCarousel />

                  </div>
                </div>
    );
};

export default function OurItWork() {
    return (
        <section className="pt-[48px] pr-[16px] pb-[24px] pl-[16px] bg-[#0D0D0D]">
            <div className="flex flex-col gap-12">
                <div className="text-center flex flex-col gap-4 md:w-1/2 mx-auto">
                    <div className="lg:w- mx-auto">
                      <h1 className="text-[24px] leading-tight md:text-[44px]">
                          Our system mirrors trades from our strategy account to yours
                      </h1>
                    </div>
                    <p className="text-white opacity-80">Just connect your account and let the system handle the trades.</p>
                </div>


                <Cards />

              <div className="lg:max-w-full w-full">
                <Testimonials />   
              </div>            
            </div>
        </section>
    )
};