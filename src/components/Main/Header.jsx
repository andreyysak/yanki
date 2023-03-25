import React from 'react'
import Logo from '../../img/logo.svg' 
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosArrowDown} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {SlBasket} from 'react-icons/sl'
import {Link} from 'react-router-dom'
// import Auth from '../components/Auth/Auth'


const Header = () => {
  return (
    <div className='flex px-[150px] py-6 text-white justify-between items-center'>
        <div className='flex items-center gap-24'>
          <RxHamburgerMenu size={40} className='text-white hover:text-[#E0BEA2] duration-150'/>
          <nav className='flex gap-8'>
              <li className='list-none hover:text-[#E0BEA2] duration-150'><a href="#" className=''>NEW</a></li>
              <Link to='/catalog'>
                <li className='list-none hover:text-[#E0BEA2] duration-150'><a href="#">КАТАЛОГ</a></li>
              </Link>
              <li className='list-none hover:text-[#E0BEA2] duration-150'><a href="#">ПРО НАС</a></li>
          </nav>
        </div>
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        <div className='flex gap-16'>
          <nav className='flex gap-8'>
              <li className='list-none flex items-center gap-2'>
                {/* <a href="#">UA</a> */}
                <select className='text-white bg-transparent'>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>UA</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>EN</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>FR</option>
                </select>
                {/* <IoIosArrowDown/> */}
              </li>
              <li className='list-none flex items-center gap-2'>
                {/* <a href="#">USD</a>
                <IoIosArrowDown/> */}
                <select className='text-white bg-transparent'>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>UAN</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>USD</option>
                  <option className='bg-white text-black border-b-2 border-[#c58f64]'>EUR</option>
                </select>
              </li>
          </nav>
          <nav className='flex gap-7'>
            <BsSearch size={25} className='hover:text-[#E0BEA2] duration-150'/>
            <Link to='/login'>
              <AiOutlineUser className='hover:text-[#E0BEA2] duration-150' size={25}/>
            </Link>
            <MdOutlineFavoriteBorder size={25} className='hover:text-[#E0BEA2] duration-150'/>
            <Link to='/basket'>
              <SlBasket size={25} className='hover:text-[#E0BEA2] duration-150'/>
            </Link>
          </nav>
        </div>
    </div>
  )
}

export default Header