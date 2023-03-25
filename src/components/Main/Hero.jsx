import React from 'react'
import Header from './Header'
import Line from '../../img/line.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Category from './Category'
import MainFooter from './MainFooter'

const Hero = () => {
  return (
    <div>
      <div className='bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
        <Header/>
        
        <div className='py-[330px] flex-col '>
                <h1 className='text-white text-center text-5xl mb-[20px] font-light'>Нова колекція</h1>
                <div className='flex justify-center mb-[20px]'>
                    <img src={Line} alt="" className='items-center'/>
                </div>
                <div className='flex items-center justify-center text-center text-white'>
                    <p className='text-base font-light uppercase'>ДИВИТИСЬ НОВИНКИ</p>
                    <div className='hover:rotate-90'>
                      <MdKeyboardArrowRight/>
                    </div>
                </div>
        </div>
      </div>
      <div className='bg-white'>
        <Category/>
        <MainFooter/>
      </div>
    </div>
  )
}

export default Hero