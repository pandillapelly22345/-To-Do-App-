import React from 'react'

const Dashboard = ({userName}) => {

  
  return (
    <div>
      <div>
        <h2>Welcome, {userName}</h2>
      </div>
      
      <button>Add Task +</button>

      <h3>To-Do</h3>

      <div>
        {/* cards */}
      </div>
    </div>
  )
}

export default Dashboard