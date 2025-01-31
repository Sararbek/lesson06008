import FixedTitle from '@/components/fixedTitle/FixedTitle'
import React from 'react'

import { IoPlay } from "react-icons/io5";

import aboutVideoImg from "@/assets/about/BG.png"

const About = () => {
  return (
    <div className='w-full bg-white py-24 font-Roboto'>
      <div className='container max-w-7xl mx-auto'>
        <div className=' flex flex-col gap-24'>
            <div className='flex flex-col gap-8'>
              <FixedTitle title={"Know about us"}/>
              <div className='flex items-start gap-16  pl-24'>
                <h2 className='text-primary font-bold text-[56px] leading-[67px] '>
                  We are a nonprofit team working worldwide
                </h2>
                <div className='flex flex-col gap-4 text-primary max-w-[500px]'>
                  <p className='text-xl font-bold'>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div>
                <img src={aboutVideoImg} alt="" />
              </div>
              <div className='absolute w-full h-full top-0 left-0 bg-[#0004] flex items-center justify-center '>
                <div className="relative flex w-16 h-16">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className='z-2 w-16 h-16 rounded-full bg-white flex  items-center justify-center cursor-pointer '>
                  <IoPlay className='text-2xl text-primary'/>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-start gap-24 pl-24'>
              <div className='flex flex-col gap-4'>
                <p className='font-bold tracking-[2px] uppercase '>our mission</p>
                <div className='flex flex-col gap-2 text-primary'>
                  <h3 className='font-bold text-[28px]'>We make the world we save our own environment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold tracking-[2px] uppercase '>our Vision</p>
                <div className='flex flex-col gap-2 text-primary'>
                  <h3 className='font-bold text-[28px]'>Plant more trees to make world air pollution free</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About