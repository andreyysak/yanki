import React, { useState } from 'react'
import {data} from '../../data/data'
import MainFooter from '../Main/MainFooter'

const ProductItem = () => {
  // console.log(data)

  const [products, setProducts] = useState(data)
  const [card, setCard] = useState([])

  // Filter Type
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  
  const sortToHighPrice = () => {
    const sortedProduct = [...products].sort((a, b) => a.price - b.price)
    setProducts(sortedProduct)
  }

  const sortToLowPrice = () => {
    const sortedProduct = [...products].sort((a, b) => b.price - a.price)
    setProducts(sortedProduct)
  }

  const handleClick = (item) => {
    setCard([...card, item])
    console.log(card)
  }

   const btnPrice = 'w-[70px] bg-trasperent rounded-full text-slate-800 border-[1px] border-slate-800 hover:border-trasperent hover:border-none hover:scale-105 hover:bg-[#E0BEA2] hover:text-gray-900 duration-150'
   const btnCategory = 'font-light text-base color-[#252525] hover:text-[#E0BEA2] duration-150 hover:scale-105'

  return (
    <div>
    <div className='px-[150px] text-[#252525] flex justify-between'>
      <div>
        {/* Filter type */}
        <h1 className='font-light text-xl pb-[30px]'>Каталог</h1>
        <div className='flex flex-col float-left gap-2 items-start'>
          <button className={btnCategory} onClick={() => filterType()}>New</button>
          <button className={btnCategory}>Bestsellers</button>
          <button className={btnCategory} onClick={() => filterType('Верхній одяг')}>Верхній одяг</button>
          <button className={btnCategory} onClick={() => filterType('Шуби')}>Шуби</button>
          <button className={btnCategory} onClick={() => filterType('Тренчи')}>Тренчи</button>
          <button className={btnCategory} onClick={() => filterType('Пальто')}>Пальто</button>
          <button className={btnCategory} onClick={() => filterType('Пуховики та желетки')}>Пуховики та желетки</button>
          <button className={btnCategory} onClick={() => filterType('Костюми')}>Костюми</button>
          <button className={btnCategory} onClick={() => filterType('Жакети')}>Жакети</button>
          <button className={btnCategory} onClick={() => filterType('Плаття')}>Плаття</button>
          <button className={btnCategory} onClick={() => filterType('Рубашки та блузки')}>Рубашки та блузки</button>
          <button className={btnCategory} onClick={() => filterType('Спідниці')}>Спідниці</button>
          <button className={btnCategory} onClick={() => filterType('Футболки та топи')}>Футболки та топи</button>
          <button className={btnCategory} onClick={() => filterType('Аксесуари')}>Аксесуари</button>
          <button className={btnCategory}>Sale</button>
          <button className={btnCategory}>Summer</button>
          <button className={btnCategory} onClick={() => setProducts(data)}>Дивитись все</button>
        </div>
      </div>
      

      {/* Display food */}
      <div>
        <div className='pb-[30px] flex gap-8 items-center justify-center'>
           
              <p className='text-[20px] font-light text-[#252525]'>Сортування за ціною:</p>
              <button onClick={sortToHighPrice} className={btnPrice}>A - Z</button>
              <button onClick={sortToLowPrice} className={btnPrice}>Z - A</button>
           
        </div>

            {/* animate-spin */}
        <div className='grid grid-cols-3 gap-4 owerflow-hidden relative'>
          {products.map((item, index) => (
            <div key={index} >
              <img src={item.image} alt={item.name} className='w-[310px] h-[360px] object-cover object-center hover:scale-105 duration-150'/>
              <div className='pt-[15px] text-center pb-7'>
                <div className='flex gap-2 justify-center'>
                  <p className='pb-[5px] font-light text-base'>{item.name}</p>
                  <p className='font-light text-base text-[#E0BEA2]'>{item.new}</p>
                </div>
                <p>
                  <span className='font-bold text-base'>{item.price}грн</span>
                </p>
                <p>
                  <span className='uppercase text-base text-[#252525] font-light'>{item.size}</span>
                </p>
                <div className='flex gap-2 justify-center pt-[5px]'>
                  <div className='h-[14px] w-[14px] rounded-full border border-slate-600 bg-white'></div>
                  <div className='h-[14px] w-[14px] rounded-full bg-[#6F83A4]'></div>
                  <div className='h-[14px] w-[14px] rounded-full bg-[#F1DDAA]'></div>
                </div>
                <button onClick={() => handleClick(item)} className='mt-[8px] w-full h-[30px] bg-[#E0BEA2] text-white font-light text-lg items-center active:bg-[#c6a78e] active:scale-75'>Купити</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <MainFooter/>
      <p className='pt-[50px] pb-[10px] text-center'>©️ 2021 Yanki. All rights reserved</p>
    </div>
  )
}

export default ProductItem