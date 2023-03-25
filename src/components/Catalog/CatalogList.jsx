import React from 'react'
import CatalogNavbar from './CatalogNavbar'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

const Catalog = () => {
  
  return (
    <div className=''>
        <CatalogNavbar/>
        <div className='px-[150px] py-[30px]'>
            <nav className='flex items-center gap-2 text-[16px] font-light'>
                <Link to='/'>
                    <p>Головна</p>
                </Link>
                <MdKeyboardArrowRight size={20} color='#c58f64'/>
                <p>Каталог</p>
            </nav>
        </div>

        <ProductItem />
        <div>
        </div>
        
    </div>
  )
}

export default Catalog