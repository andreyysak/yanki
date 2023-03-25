import React, { useState, useEffect } from 'react'
import Logo from '../../img/logo.svg' 
import { Link } from 'react-router-dom'

const Register = () => {
    
    // const {setName, setPassword, setEmail} = props
    // console.log(name)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // useEffect(() => console.log(name), [name])
    // useEffect(() => console.log(password), [password])
    // useEffect(() => console.log(email), [email])
  return (
    <div className='bg-[#E0BEA2] h-[100vh] flex flex-col justify-center items-center'>
        <div className='flex justify-center'> 
            <Link to='/'>
                <img src={Logo} alt="" />
            </Link>
        </div>
        <div className='mt-[70px]'>
            <div className='flex flex-col justify-center'>
                <input type="text" placeholder='EMAIL' 
                className='mb-[20px] bg-transparent text-white pl-[12px] w-[300px] h-[45px] placeholder:text-gray-900 rounded-md border-2 border-white  shadow-sm focus:outline-none focus:border-[#CCA88A] focus:ring-[#CCA88A] focus:ring-1'
                onChange={(event) => setEmail(event.target.value)}
                />
                <input type="text" placeholder='USERNAME' 
                className='bg-transparent text-white pl-[12px] w-[300px] h-[45px] placeholder:text-gray-900 rounded-md border-2 border-white  shadow-sm focus:outline-none focus:border-[#CCA88A] focus:ring-[#CCA88A] focus:ring-1'
                onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className='flex flex-col items-center justify-center mt-[20px]'>
                <input type="text" placeholder='PASSWORD'
                 className='bg-transparent text-white pl-[12px] w-[300px] h-[45px] placeholder:text-gray-900 rounded-md border-2 border-white focus:outline-none focus:border-[#CCA88A] focus:ring-[#CCA88A] focus:ring-1'
                 onChange={(event) => setPassword(event.target.value)}
                 />
            <button onClick={() => console.log(email, name, password)} type='submit' className='mt-[40px] w-[300px] h-[45px]  items-center bg-white rounded-md text-base font-semibold'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Register