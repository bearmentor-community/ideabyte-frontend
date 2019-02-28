import React from 'react'

const UserIdeas = props => {
  return (
    <div>
      <ul>
        {props.ideas.map((item, index) => {
          return <li>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

export default UserIdeas
