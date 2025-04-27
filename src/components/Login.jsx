import { useState, React } from 'react'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHanlder = (e) => {
        e.preventDefault();
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 rounded-xl p-20 border-emerald-600 flex flex-col justify-center items-center'>
                <h1 className="text-2xl font-semibold p-3">Login</h1>
                <form onSubmit={(e) => { submitHanlder(e) }} className='flex flex-col items-center justify-center'>
                    <input value={email} required onChange={(e) => {
                        setEmail(e.target.value)
                    }} className='border-2 border-emerald-600 py-3  px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 rounded-full' type="email" placeholder='Enter your email' name="" id="" />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required className='border-2 border-emerald-600 py-3  px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400 rounded-full mt-3' type="password" placeholder='Enter your password' name="" id="" />
                    <button className=' border-emerald-600 py-3 px-5 text-xl text-black  placeholder:text-gray-400 rounded-full mt-5 cursor-pointer w-56'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
