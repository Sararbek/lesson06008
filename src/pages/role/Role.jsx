import FixedTitle from '@/components/fixedTitle/FixedTitle'
import React from 'react'

import roleHeroImg from "@/assets/role/Image.png"
import { ROLE_PARTS } from '@/static/Index'

const Role = () => {
  return (
    <div className='w-full font-Roboto text-primary py-24 bg-white '>
      <div className='container max-w-7xl mx-auto'>
        <div className='flex flex-col'>
          <div className='flex items-start justify-between gap-24'>
            <div className='flex flex-col gap-8'>
              <FixedTitle title={"What we do"}/>
              <div className='flex flex-col gap-8 pl-24'>
                <h2 className='font-bold text-[56px] leading-[67px] '>We are working worldwide</h2>
                <p className='text-secondary'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
              </div>
            </div>
            <div className='max-w-[480px] w-full'>
              <img src={roleHeroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-24 bg-[#EFF7F2] mt-24'>
        <div className='container max-w-7xl mx-auto'>
          <div className='flex flex-col gap-16'>
            <h2 className='text-primary font-bold text-5xl'>
              What we do for the environment
            </h2>
            <div  className='grid grid-cols-3 gap-y-12 gap-x-16'>
              {
                  ROLE_PARTS?.map((part, inx) => (
                    <div key={inx} className='flex items-start gap-6'>
                        <div className='shrink-0 w-[28px] h-[28px] rounded-sm flex items-center justify-center bg-[#83D187] '>
                          <img src={part.icon} alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <h3 className='text-primary font-bold text-2xl '>{part.title}</h3>
                          <p className='text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                          </p>
                        </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Role