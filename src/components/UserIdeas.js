import React, { Fragment } from 'react'
import styled from '@emotion/styled'

import Link from './Link'

const IdeaListItem = styled.div`
  background: #fafafa;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  color: #333;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  }
`

const IdeaTitle = styled.h3`
  margin: 0;
`

const UserIdeas = ({ ideas }) => {
  return (
    <div>
      <h2>My Ideas:</h2>
      {ideas ? (
        <Fragment>
          {ideas.map((idea, index) => {
            return (
              <Link to={`/ideas/${idea.id}`}>
                <IdeaListItem key={index}>
                  {idea.images[0] && (
                    <img src={idea.images[0]} alt={idea.title} />
                  )}
                  <IdeaTitle>{idea.title}</IdeaTitle>
                </IdeaListItem>
              </Link>
            )
          })}
        </Fragment>
      ) : (
        <span>This user doesn't have any idea yet.</span>
      )}
    </div>
  )
}

export default UserIdeas
