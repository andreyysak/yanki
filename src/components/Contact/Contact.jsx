import React from 'react'
import CatalogNavbar from '../Catalog/CatalogNavbar'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {RiTelegramLine} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import MainFooter from '../Main/MainFooter'

const Contact = () => {
  return (
    <div className='bg-white'>
        <CatalogNavbar/>
        <div className='px-[150px] py-[30px]'>
            <nav className='flex items-center gap-2 text-[16px] font-light'>
                <Link to='/'>
                    <p>Головна</p>
                </Link>
                <MdKeyboardArrowRight size={20} color='#c58f64'/>
                <p>Контакти</p>
            </nav>
        </div>
        <div className='px-[150px]'>
            <h1 className='text-[20px] font-light text-[#252525]'>Зв'яжіться з нами</h1>
            <div className='flex justify-between'>
                <div className='pt-[30px] '>
                    <p className='text-[16px] font-light text-[#252525]'>В соціальних мережах</p>
                    <div className='flex pt-5 gap-4'>
                        <FiInstagram size={25} className='text-[#E0BEA2]'/>
                        <RiTelegramLine size={25} className='text-[#E0BEA2]'/>
                    </div>
                </div>
                <div className='pt-[30px] '>
                    <p className='text-[16px] font-light text-[#252525]'>По телефону</p>
                    <p className='py-[20px] text-[16px] font-light text-[#252525]'>+38(067) 158 82 66</p>
                    <p className='text-[16px] font-light text-[#252525]'>+38(073) 226 39 81</p>
                </div>
                <div className='pt-[30px] '>
                    <p className='text-[16px] font-light text-[#252525]'>По пошті</p>
                    <p className='text-[16px] font-light text-[#252525] pt-[20px]'>example@gmail.com</p>
                </div>
                <div className='pt-[30px] '>
                    <p className='text-[16px] font-light text-[#252525]'>Наш офіс</p> 
                    <p className='text-[16px] font-light text-[#252525] pt-[20px]'>м.Київ, вул.Батунська 18</p> 
                </div>
            </div>

            <div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='pt-[100px] pb-[50px] text-3xl font-light'>Дізнайтесь першими про новинки</h1>
                    <input type="text" placeholder='Ваш e-mail' className='px-4 w-[600px] h-[50px] border-2 border-[#E0BEA2] placeholder:text-center placeholder:text-base placeholder:items-center' />
                    <button className='bg-[#E0BEA2] w-[600px] h-[50px] my-[20px] uppercase text-base text-white hover:bg-[#CCA88A] transition duration-100 ease-in-out'>підписатись</button>
                    <div className='w-[600px] text-center'> 
                        <p className='text-[#252525] font-extralight'>Натискаючи на кнопку "Підписатись", я погоджуюсь на обробку моїх персональних даних та ознайомлений(а) з умовами конфеденційності</p>
                    </div>
                </div>
            </div>
        </div>
        <MainFooter/>
        <p className='pt-[50px] pb-[10px] text-center'>©️ 2021 Yanki. All rights reserved</p>
    </div>
  )
}

export default Contact