import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('email is', email)
        console.log('password is', password)

        setemail("")
        setpassword("")
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form action="" className='flex flex-col items-center justify-center'
                    onSubmit={(e) =>
                        submitHandler(e)
                    }>
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                        required className='border-2 text-black text-xl outline-none bg-transparent border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }} required className='border-2 text-black text-xl outline-none bg-transparent border-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />
                    <button className='border-none mt-5 text-white text-xl outline-none bg-emerald-600 py-4 px-5 rounded-full placeholder:text-gray-400'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login