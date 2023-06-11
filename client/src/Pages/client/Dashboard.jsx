import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const {user} = useSelector((state)=> state.auth)
  return (
    <div>
      <h1>Dashboard</h1>
      <h6>Good day, {user.first_name}</h6>
    </div>
  )
}

export default Dashboard;