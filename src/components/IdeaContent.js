import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

const IdeaCover = styled.section`
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url(${props => props.image}) no-repeat center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 5px;
  border-radius: 0 0 10px 10px;
  @media all and (max-width: 480px) {
    border-radius: 0;
  }
`

const IdeaHeading = styled.h2`
  text-align: left;
  color: #fff;
  padding-left: 20px;
  margin: 0;
`

const IdeaMeta = styled.ul`
  color: #fff;
`

const base = css`
  width: 600px;
  margin: 0 auto;

  @media all and (min-width: 1024px) {
    width: 1200px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 800px;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 600px;
  }
  @media all and (max-width: 480px) {
    width: 420px;
  }
`

const IdeaHeader = styled.div`
  ${base}
`

const IdeaBody = styled.section`
  ${base}
`

const IdeaDetail = styled.section`
  padding: 10px;
`

const IdeaContent = ({ idea, isLoading }) => {
  console.log(idea)

  if (isLoading) {
    return (
      <div>
        <h1>LOADING ONE IDEA...</h1>
      </div>
    )
  } else {
    return (
      <Fragment>
        {/* Cover image */}
        <IdeaCover image={idea.images[0]}>
          {/* Actual content such as title, author, date, location */}
          <IdeaHeader>
            <IdeaHeading>{idea.title}</IdeaHeading>
            <IdeaMeta>
              <li>
                <b>{idea.author.name}</b>
              </li>
              <li>
                <b>{idea.datetime}</b>
              </li>
              <li>
                <b>{idea.location}</b>
              </li>
            </IdeaMeta>
          </IdeaHeader>
        </IdeaCover>

        <IdeaBody>
          {/* Detailed description of the idea */}
          <IdeaDetail>
            <p>{JSON.stringify(idea.details)}</p>
          </IdeaDetail>
        </IdeaBody>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    idea: state.idea.data,
    isLoading: state.idea.isLoading
  }
}

export default connect(mapStateToProps)(IdeaContent)
