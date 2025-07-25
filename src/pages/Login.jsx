import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../AuthProvider'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useContext(AuthContext)

  const navigate = useNavigate()

  const loginHandler = (form)=>{
    form.preventDefault();
    if(!email){
      toast.warn('Enter Email Address');
    }else if(!password){
      toast.warn('Enter Password');
    }else{
      login(email,password)
      setEmail('')
      setPassword('')
      toast.success('LoggedIn Successfully');
      navigate('/products')
    }
  }

  return (
    <main>
      <section className="bg-main-bg w-full min-h-dvh p-4 md:p-8">
        <div className="bg-milk flex flex-col md:flex-row rounded-lg h-dvh overflow-hidden">
          <div className='basis-2/3 md:basis-2/4 lg:basis-1/3 p-6 h-full mt-10'>
            <div className='flex-center'>
              <Link to='/'>
                <img src="/images/nav-logo.webp" alt="nav-logo" className="md:w-44 w-26" />
              </Link>
            </div>
            <form onSubmit={loginHandler} className='flex flex-col gap-2 mt-10'>
              <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Enter Email' className="w-full placeholder:font-sans px-5 py-4 outline-none bg-milk-yellow rounded-lg" />
              <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Enter Password' className="w-full placeholder:font-sans px-5 py-4 outline-none bg-milk-yellow rounded-lg" />
              <input type='submit' className='button text-center mt-10 w-full' value='Login'/>
            </form>
          </div>
          <div className='basis-2/3 md:basis-2/4 lg:basis-2/3 h-full'>
            <img
              src="/images/login.webp"
              className="w-full h-full object-center md:object-cover lg:object-center"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login