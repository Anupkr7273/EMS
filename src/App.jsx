import React, { useContext,useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
          const userData=JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data) 
      }
  },[])  

  

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }));
      }
     } else {
        alert('Invalid credentials');
      }
    } 
  
    
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user=='admin'? <AdminDashboard/>:(user=='employee'? <EmployeeDashboard data={loggedInUserData}/>:null)}
    </>
  )
}
