import React from 'react'
import heroBgImg from "@/assets/home/hero.png"
import infoVideoImg from "@/assets/home/BG.png"
import { useNavigate } from 'react-router-dom'
import { IoPlay } from "react-icons/io5";
import FixedTitle from '@/components/fixedTitle/FixedTitle';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full font-Roboto'>
        {/* Hero */}
      <section className={`w-full min-h-[calc(100vh-72px)] relative text-white`}>
          <div className='w-full h-full top-0 left-0 absolute'>
              <img src={heroBgImg} alt="" className='bg-center object-cover w-full h-full' />
          </div>
          <div className='w-full h-full absolute top-0 left-0 z-1'>
              <div className="container max-w-7xl mx-auto h-full">
                  <div className='h-full w-full pt-[128px] pb-[64px] flex flex-col'>
                      <div className='flex flex-col gap-12 flex-1 '>
                          <h1 className='max-w-[640px] font-bold text-[64px] leading-[77px] '>
                              Save the environment today for a better tomorrow
                          </h1>
                          <div className='flex gap-6 items-center '>
                              <button className=' font-medium text-base text-primary py-4 px-8 rounded-sm bg-white cursor-pointer transition duration-300 hover:bg-white/80 ' onClick={() => navigate('/role')}>What we do</button>
                              <div className='flex items-center gap-2'>
                                <div className="relative flex w-6 h-6">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                                  <span className='z-2 w-6 h-6 rounded-full bg-white flex  items-center justify-center cursor-pointer '>
                                    <IoPlay className='text-xs text-primary'/>
                                  </span>
                                </div>
                                <span className='font-medium text-base'>Play Video</span>
                              </div>
                          </div>
                      </div>
                      <div className='flex items-center gap-6 w-full flex-none '>
                          <p className=' text-lg flex-none font-medium '>23,800 trees planted</p>
                          <hr className='flex-1 border-t border-white '/>
                          <p className=' text-lg flex-none font-medium '>5840 donations collected</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* More Info */}
      <section className='w-full bg-white pt-24 pb-16'>
          <div className='container max-w-7xl mx-auto'>
              <div className='flex items-center gap-24'>
                  <div className='flex flex-col gap-12'>
                    <div className='flex flex-col gap-8'>
                      <FixedTitle title={"Know About us"}/>
                      <h2 className='pl-24 font-bold text-5xl leading-14 '>We help nature smile and survive everywhere</h2>
                      <div className='flex flex-col gap-8 pl-24'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <p>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                      </div>
                    </div>
                    <div className='pl-24'>
                        <button className='font-bold text-white py-4 px-8 rounded-sm bg-[#70C174] cursor-pointer transition duration-300 hover:bg-green-600 '>Learn more</button>
                    </div>
                  </div>
                  <div className='max-w-[480px] w-full rounded-xl relative overflow-hidden'>
                    <div>
                      <img src={infoVideoImg} alt="" className='w-full' />
                    </div>
                    <div className='absolute w-full h-full z-2 bg-[#0009] top-0 left-0 flex items-center justify-center '>
                        <div className="relative flex w-16 h-16">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                          <span className='z-2 w-16 h-16 rounded-full bg-white flex  items-center justify-center cursor-pointer '>
                                <IoPlay className='text-2xl text-primary'/>
                          </span>
                        </div>
                    </div>
                  </div>
              </div> 
          </div>
      </section>
    </div>
  )
}

export default Home