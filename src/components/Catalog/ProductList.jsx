import React from 'react'
import {data} from '../../data/data'
import CardProduct from '../ProductItem/CardProduct'

const ProductList = () => {
  return (
    <section className='px-[150px]'>
       {
        data.map((item) => <CardProduct key={item.id} />)
       }
    </section>
  )
}

export default ProductList