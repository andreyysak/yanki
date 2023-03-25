import React from 'react'
import Logo from '../../img/goldLogo.svg' 
import {RxHamburgerMenu} from 'react-icons/rx'
// import {IoIosArrowDown} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {SlBasket} from 'react-icons/sl'
import {Link} from 'react-router-dom'


const CatalogNavbar = () => {
  return (
    <div className='flex px-[150px] py-6 text-black justify-between items-center'>
        <div className='flex items-center gap-24'>
          <RxHamburgerMenu size={40} color='#E0BEA2'/>
          <nav className='flex gap-8'>
              <li className='list-none'><a href="#">NEW</a></li>
              <Link to='/catalog'>
                <li className='list-none'><a href="#">КАТАЛОГ</a></li>
              </Link>
              <li className='list-none'><a href="#">ПРО НАС</a></li>
          </nav>
        </div>
        <Link to='/'>
            <img src={Logo} className='fill-black' alt="" />
        </Link>
        <div className='flex gap-16'>
          <nav className='flex gap-8'>
              <li className='list-none flex items-center gap-2'>
                {/* <a href="#">UA</a> */}
                <select className='text-black bg-transparent'>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>UA</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>EN</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>FR</option>
                </select>
                {/* <IoIosArrowDown/> */}
              </li>
              <li className='list-none flex items-center gap-2'>
                {/* <a href="#">USD</a>
                <IoIosArrowDown/> */}
                <select className='text-black bg-transparent'>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>UAN</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>USD</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>EUR</option>
                </select>
              </li>
          </nav>
          <nav className='flex gap-7'>
            <BsSearch size={25}/>
            <Link to='/login'>
              <AiOutlineUser size={25}/>
            </Link>
            <MdOutlineFavoriteBorder size={25}/>
            <Link to='/basket' className='flex'>
              <SlBasket size={25}/>
              <span className='text-[12px] bg-[#c58f64] text-white px-1 rounded-3xl ml-[2px] my-auto'>0</span>
            </Link>
          </nav>
        </div>
    </div>
  )
}

export default CatalogNavbar