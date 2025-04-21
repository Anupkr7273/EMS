import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const header = () => {       
    // const [username, setUsername] = useState('') 
    // if (!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstname)
    // }

    const logOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>username👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-white font-medium text-lg px-5 py-2 rounded-sm'>Log out</button>
        </div>
    )
}

export default header