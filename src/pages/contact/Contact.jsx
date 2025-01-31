import FixedTitle from '@/components/fixedTitle/FixedTitle'
import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin  } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <div className='w-full py-24 font-Roboto bg-[#EBF0F9]'>
            <div className="container max-w-7xl mx-auto">
                <div className='flex items-start gap-24'>
                    <div className='flex flex-col gap-8 max-w-[50%]'>
                      <FixedTitle title={"Contact us"}/>
                      <div className='flex flex-col gap-4 pl-24 '>
                        <h2 className='font-bold text-primary text-[56px] leading-[67px] '>
                          We'd love to hear from you
                        </h2>
                        <p className='text-secondary'>
                            Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                      <div className='flex flex-col gap-2 border-b border-[#E5E5E5] pb-8'>
                        <h3 className='text-primary font-bold text-2xl'>
                          Let's talk! 
                        </h3>
                        <div className='flex gap-8 text-secondary'>
                          <p>+1 23 456 789</p>
                          <p>hello@finsweet.com</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h3 className='text-primary font-bold text-2xl'>
                        Headoffice
                        </h3>
                        <div className='max-w-[90%] text-secondary'>
                          <p>8 Brewery Drive, Hudson, NH 03051
                          USA</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h3 className='text-primary font-bold text-2xl'>
                        Branch Office
                        </h3>
                        <div className='max-w-[80%] text-secondary'>
                          <p>178 Marconi St., Venice, 34293
                          Italy</p>
                        </div>
                      </div>
                      <ul className='flex items-center gap-5'>
                        <li>
                          <a href="#">
                            <FaFacebook className='size-5 text-secondary'/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaTwitter className='size-5 text-secondary'/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaLinkedin className='size-5 text-secondary'/>
                          </a>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full py-24 font-Roboto'>
          <div className='container max-w-7xl mx-auto'>
              <form action='' className='max-w-[60%] w-full mx-auto flex flex-col gap-8'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-xs text-primary font-bold'>First Name</label>
                      <input type="text" className='outline-none border-b border-[#E5E5E5] py-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-xs text-primary font-bold'>Last Name</label>
                      <input type="text" className='outline-none border-b border-[#E5E5E5] py-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-xs text-primary font-bold'>Email Id</label>
                      <input type="email" className='outline-none border-b border-[#E5E5E5] py-2' />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="" className='text-xs text-primary font-bold'>Subject</label>
                      <input type="text" className='outline-none border-b border-[#E5E5E5] py-2' />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="" className='text-xs text-primary font-bold'>Message</label>
                    <textarea name="" id="" className='w-full p-5 text-primary rounded-sm border outline-none resize-none h-40 border-[#E5E5E5]' placeholder='Type your Messege'></textarea>
                </div>
                <button onClick={(e) => e.preventDefault() } className='self-baseline text-base font-medium text-white py-4 px-8 rounded-sm cursor-pointer bg-[#70C174] transition duration-300 hover:bg-green-400 mx-auto '>Send message</button>
              </form>
          </div>
        </div>
    </>
  )
}

export default Contact