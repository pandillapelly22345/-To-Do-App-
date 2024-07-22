import React from 'react'

const Addtask = () => {
  return (
    <div>
      <div>
        <form>
          <h2>
            Add Task
          </h2>
          <div>
            <label>Task</label>
            <input type='text' placeholder='Enter Task'/>
          </div>

          <div>
            <label>Date</label>
            <input type='date' placeholder='Enter Date'/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Addtask