import React, { useEffect, useState } from 'react'
import Logo from '../../img/logo.svg' 
import handleSubmit from './Auth'
import { Link } from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'

const Login = () => {
    
    // const {setName, setPassword} = props
    // console.log(name)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => console.log(name), [name])
    // useEffect(() => console.log(password), [password])

  return (
    // bg-[#E0BEA2],
    // to-[#CCA88A]
    // FFA4A4
    // <div className='bg-gradient-to-t from-[#E0BEA2] to-[#FFA4A4]  h-[100vh] flex flex-col justify-center items-center'>
    //     <div className='flex justify-center'> 
    //         <Link to='/'>
    //             <img src={Logo} alt="" />
    //         </Link>
    //     </div>
    //     <div className='mt-[70px]'>
    //         <div className='flex justify-center'>
    //             <input type="text" placeholder='USERNAME' 
    //             className='bg-transparent text-white pl-[12px] w-[300px] h-[45px] placeholder:text-gray-900 rounded-md border-2 border-white  shadow-sm focus:outline-none focus:border-[#CCA88A] focus:ring-[#CCA88A] focus:ring-1'
    //             onChange={(event) => setName(event.target.value)}
    //             />
    //         </div>
    //         <div className='flex flex-col items-center justify-center mt-[20px]'>
    //             <input type="text" placeholder='PASSWORD'
    //              className='bg-transparent text-white pl-[12px] w-[300px] h-[45px] placeholder:text-gray-900 rounded-md border-2 border-white focus:outline-none focus:border-[#CCA88A] focus:ring-[#CCA88A] focus:ring-1'
    //              onChange={(event) => setPassword(event.target.value)}
    //              />
    //         <button onClick={() => console.log(name, password)} type='submit'  className='mt-[40px] w-[300px] h-[45px]  items-center bg-white rounded-md text-base font-semibold'>LOGIN</button>
            
    //         </div>
    //     </div>
    // </div>
    //bg-slate-500 
    <div className='h-[100vh] flex justify-center items-center bg-white'>
        <div className='w-[600px] h-[382px] border-[#E0BEA2]  border-2 relative'>
                    <Link to='/'>
                      <RxCross1 size={40} color='#E0BEA2' className='text-[40px] mt-[20px] mr-[20px] absolute right-2'/>
                    </Link>
                <div className='pt-[50px] text-[#252525] flex flex-col items-center'>
                    <h1 className='capitalize text-[20px] font-light'>авторизація</h1> 
                    <input type="text" placeholder='Ваш e-mail' className='w-[400px] h-[50px] border-[1px] border-[#252525] mt-[30px] pl-[20px] py-[15px] ' />
                    <input type="text" placeholder='Ваш пароль' className='w-[400px] h-[50px] border-[1px] border-[#252525] mt-[30px] pl-[20px] py-[15px] ' />
                    <div className='flex justify-between pt-[20px]'>
                      <p className='mr-[155px] hover:underline font-light text-base'>Немає акаунту?</p>
                      <p className='hover:underline font-light text-base'>Забули Пароль?</p>
                    </div>
                    <button className='w-[400px] h-[50px] bg-[#E0BEA2] text-white mt-5 uppercase font-light'>увійти</button>
                </div>
        </div>
    </div>
  )

    
    
}

export default Login