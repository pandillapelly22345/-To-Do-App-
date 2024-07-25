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
        console.log(res.data)
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
      
      <Link to={"/addtask"} state={{ email: email }}>
        <button>
          Add Task +
        </button>
      </Link>

      <table>
        <thead>
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-200">Task</th>
            <th className="px-4 py-2 border-b-2 border-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((data, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg mb-10">
                <tr>
                  <td className="px-4 py-4 border-b border-gray-200">{data.task}</td>
                  <td className="px-4 py-4 border-b border-gray-200">{data.datee}</td>
                </tr>
              </div>
            ))
          }
        </tbody>
      </table>

      {/* <h3>To-Do</h3> */}

      {/* <div>
        {tasks.map((task) => {
          <Cards key={task.id} task={task}/>
        })}
      </div> */}
    </div>
  )
}

export default Dashboard