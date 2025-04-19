import React, { useContext,useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setuser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setuser(loggedInUser.role)
      }
    }
  }, [authData])
  

  const handleLogin=(email,password)=>{
    if(email== 'admin@example.com' && password=='123'){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.employees.find((e) => email == e.email && e.password == password)){
      setuser('employee')    
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert('Invalid credentials')
    }
    
  }
    
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user=='admin'? <AdminDashboard/>: <EmployeeDashboard/>}
    </>
  )
}
