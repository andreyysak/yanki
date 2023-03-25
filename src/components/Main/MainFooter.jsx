import React from 'react'
import {RiTelegramLine} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'
import {Link} from 'react-router-dom'

const MainFooter = () => {
  return (
    <div className='px-[150px] py-[100px] font-light'>
      <div className='flex justify-between'>

        <div>
          <h1 className='uppercase text-[20px] pb-5'>компанія</h1>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>Про нас</a>
          </li>
          <Link to='/contact'>
            <li className='list-none font-extralight text-[16px] hover:text-[#E0BEA2] duration-150'>
             <a>Контакти</a>
            </li>
          </Link>
        </div>

        <div>
          <h1 className='uppercase text-[20px] pb-5'>корисне</h1>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>Оплата та доставка</a>
          </li>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>Умови повернення</a>
          </li>
          <li className='list-none font-extralight text-[16px] hover:text-[#E0BEA2] duration-150'>
            <a>Бонусна система</a>
          </li>
        </div>

        <div>
          <h1 className='uppercase text-[20px] pb-5'>покупцю</h1>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>Улюблене</a>
          </li>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>Публічна оферта</a>
          </li>
          <li className='list-none font-extralight text-[16px] hover:text-[#E0BEA2] duration-150'>
            <a>Політика конфеденційності</a>
          </li>
        </div>

        <div>
          <h1 className='uppercase text-[20px] pb-5'>контакти</h1>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            {/* <a>Про нас</a> */}
            <div className="flex gap-3">
              <FiInstagram size={20} className='text-[#E0BEA2]'/>
              <RiTelegramLine size={20} className='text-[#E0BEA2]'/>
            </div>
          </li>
          <li className='list-none font-extralight text-[16px] pb-2 hover:text-[#E0BEA2] duration-150'>
            <a>andreyysak17@gmail.com</a>
          </li>
          <li className='list-none font-extralight text-[16px] hover:text-[#E0BEA2] duration-150'>
            <a>+380 (067) 848 16 57</a>
          </li>
        </div>
      </div>
      {/* <p>©️ 2021 Yanki. All rights reserved</p> */}
    </div>
  )
}

export default MainFooter