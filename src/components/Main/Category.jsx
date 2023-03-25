import React from 'react'
import HeroSwiper from '../../swiper/HeroSwiper'

const Category = () => {
  return (
    <div>
        <div className='px-[150px]'>
            <h1 className='pt-[100px] pb-[50px] text-3xl font-light'>Категорії</h1>
            <HeroSwiper/>
        </div>


        <div className='flex flex-col justify-center items-center'>
            <h1 className='pt-[100px] pb-[50px] text-3xl font-light'>Дізнайтесь першими про новинки</h1>
            <input type="text" placeholder='Ваш e-mail' className='px-4 w-[600px] h-[50px] border-2 border-[#E0BEA2] placeholder:text-center placeholder:text-base placeholder:items-center' />
            <button className='bg-[#E0BEA2] w-[600px] h-[50px] my-[20px] uppercase text-base text-white hover:bg-[#CCA88A] transition duration-100 ease-in-out'>підписатись</button>
            <div className='w-[600px] text-center'> 
                <p className='text-[#252525] font-extralight'>Натискаючи на кнопку "Підписатись", я погоджуюсь на обробку моїх персональних даних та ознайомлений(а) з умовами конфеденційності</p>
            </div>
        </div>
    </div>
  )
}

export default Category