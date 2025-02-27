import React from 'react'
import headerLogo from "@/assets/logos/logo.png"
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '@/static/Index'

const Header = () => {

    const navigate = useNavigate()

    const {pathname} = useLocation()
    
  return (
    <header className={`w-full font-Roboto sticky z-10 left-0 top-0 py-3 ${pathname === '/media' ? 'bg-[#EFF7F2]' : pathname === '/contact' ? 'bg-[#EBF0F9]' : 'bg-white'}`}>
        <div className="container max-w-7xl mx-auto">
            <div className='flex items-center'>
                <div className='flex-1'>
                    <img src={headerLogo} alt="" className='max-w-[120px] cursor-pointer'  
                    onClick={() => navigate('./')}/>
                </div>
                <div className='flex items-center gap-10 flex-none font-medium'>
                    <ul className='flex items-center gap-10'>
                        {
                            NAV_LINKS?.map((item, inx) => (
                                <li key={inx} className='text-secondary text-base transition duration-300 hover:text-primary'>
                                    <NavLink to={item.linkUrl}>{item.linkName}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='text-white cursor-pointer text-base py-3 px-8 rounded-sm bg-primary transition duration-300 hover:bg-black'>
                        Donate
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header