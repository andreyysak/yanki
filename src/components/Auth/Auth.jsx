import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Auth = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const location = useLocation()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (location.pathname === '/login') {
            const userData = {
                name: name,
                password: password
            }
        console.log(userData)
        } else if (location.pathname === '/register') {
            const userData = {
                name: name,
                password: password,
                email: email,
            }
        console.log(userData)
        }
    }

  return (
    <div>
        {location.pathname === '/login' ? <Login setName={setName} setPassword={setPassword} /> : location.pathname = '/register' ? <Register
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
        /> : null}
    </div>
  )
}

export default Auth