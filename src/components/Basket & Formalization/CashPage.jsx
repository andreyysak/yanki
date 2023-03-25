import React from 'react'
import CatalogNavbar from '../Catalog/CatalogNavbar'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight} from 'react-icons/md'
import MainFooter from '../Main/MainFooter'
import Basket from './Basket'

const CashPage = () => {
  return (
    <div className='bg-white'>
      <CatalogNavbar/>
      <div className='px-[150px] py-[30px]'>
            <nav className='flex items-center gap-2 text-[16px] font-light'>
                <Link to='/'>
                    <p>Головна</p>
                </Link>
                <MdKeyboardArrowRight size={20} color='#c58f64'/>
                <p>Кошик</p>
            </nav>
          
          <div className='pt-[30px]'>
            <Basket/>
          </div>

            <div className='pt-[70px] pb-[100px]'>
              <h1 className='text-[20px] font-light text-[#252525]'>Оформлення замовлення</h1>
              <p className='text-[16px] font-light text-[#252525] pt-[30px] pb-[20px]'>Персональні дані</p>
              <div className='flex gap-5 pb-[20px]'>
                <input type="text" placeholder="Ваше ім'я" className='w-[400px] h-[50px] border-[1px] border-[#252525] pl-[20px] py-[15px] text-[16px] font-extralight' />
                <input type="text" placeholder="Ваше прізвище" className='w-[400px] h-[50px] border-[1px] border-[#252525] pl-[20px] py-[15px] text-[16px] font-extralight' />
              </div>
              <div className='flex gap-5'>
                <input type="text" placeholder="Ваш e`mail" className='w-[400px] h-[50px] border-[1px] border-[#252525] pl-[20px] py-[15px] text-[16px] font-extralight' />
                <input type="text" placeholder="Ваш телефон" className='w-[400px] h-[50px] border-[1px] border-[#252525] pl-[20px] py-[15px] text-[16px] font-extralight' />
              </div>
            </div>
      </div>



      

      <MainFooter/>
      <p className='pt-[50px] pb-[10px] text-center'>©️ 2021 Yanki. All rights reserved</p>
    </div>
  )
}

export default CashPage