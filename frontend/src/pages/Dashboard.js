import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom'

const Dashboard = ({userName}) => {
  const location = useLocation();
  const email = location.state?.email || '';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(email){
      Axios.get('http://localhost:4001/tasks', {
        params: { email }
      })
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
    }
  }, [email]);
  

  
  return (
    <div>
      <div>
        <h2>Welcome, {userName}</h2>
      </div>
      
      <Link to="/addtask">
        <button>
          Add Task +
        </button>
      </Link>

      <h3>To-Do</h3>

      <div>
        {tasks.map((task) => {
          <Cards key={task.id} task={task}/>
        })}
      </div>
    </div>
  )
}

export default Dashboard