import React from 'react'

const Cards = ({tasks}) => {
  const task = tasks.task;
  const date = tasks.date;
  return (
    <div>
        <p>{task}</p>

        <div>
            <p></p>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Cards