import React from 'react'

import Link from './Link'

const UserIdeas = props => {
  return (
    <div>
      <ul>
        {props.ideas.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/ideas/${item.id}`}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UserIdeas
