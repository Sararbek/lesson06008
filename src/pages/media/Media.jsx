import FixedTitle from '@/components/fixedTitle/FixedTitle'
import { MEDIA_GOALS, MEDIA_RECENT_NEWS } from '@/static/Index'
import React from 'react'

const Media = () => {
  return (
<>
    <div className='w-full py-24 bg-[#EFF7F2] font-Roboto '>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex items-start gap-24'>
                <div className='flex flex-col gap-8 max-w-[50%] '>
                  <FixedTitle title={"Top news"}/>
                  <div className='flex flex-col gap-8 pl-24'>
                      <div className='flex flex-col gap-4'>
                        <h2 className='text-primary font-bold text-[56px] leading-[67px] '>
                          Our goal is to make water available for everyone
                        </h2>
                        <p className='text-secondary'>
                          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                      </div>
                      <button className='self-baseline font-medium leading-[18px] py-4 px-8 rounded-sm cursor-pointer bg-[#70C174] transition duration-300 hover:bg-green-400 text-white '>Read more</button>
                  </div>
                </div>
                <div className='bg-white rounded-xl p-6 flex flex-col gap-6 max-w-[50%] w-full'>
                  {
                    MEDIA_GOALS?.map((item, inx) =>(
                      <div key={inx} className='flex items-center gap-6'>
                          <div className='max-w-[192px] shrink-0'>
                            <img src={item.img} alt="" />
                          </div>
                          <div>
                            <h3 className='font-bold text-xl text-primary'>{item.title}</h3>
                            <p className='text-secondary'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                            </p>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
    <div className='w-full py-24 bg-white font-Roboto'>
        <div className="container max-w-7xl mx-auto">
            <div className='flex flex-col gap-12'>
                <div className='text-center flex flex-col gap-4'>
                    <h2 className='text-primary font-bold text-5xl'>
                      Read our Recent News
                    </h2>
                    <p className='mx-auto text-secondary max-w-[50%] '>
                      Edit this text to make it your own. To edit, simply click directly on the text to start We are served
                    </p>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    {
                      MEDIA_RECENT_NEWS?.map((item, inx) => (
                        <div key={inx} className=''>
                            <div>
                              <img src={item.img} alt="" className='w-full h-[192px] object-cover rounded-lg ' />
                            </div>
                            <div className='py-4 flex flex-col gap-2'>
                              <h3 className='text-primary font-medium text-xl'>{item.title}</h3>
                              <p className='text-secondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                              </p>
                            </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Media