import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

const Section = styled.section`
  width: 100%;
`

const IdeaCover = styled.section`
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url(${props => (props.image ? props.image : '/assets/images/picture.jpg')})
      no-repeat center;
  background-size: cover;
  padding-top: 100px;
  border-radius: 0 0 10px 10px;
  @media all and (max-width: 480px) {
    border-radius: 0;
  }
`

const IdeaHeading = styled.h2`
  text-align: left;
  color: #fff;
  padding-left: 20px;
  padding-bottom: 20px;
  margin: 0;
`

const IdeaMetas = styled.div`
  padding: 20px;
  padding-top: 0;
  font-weight: bold;
  color: #fff;
`

const IdeaMeta = styled.p`
  margin: 4px 0;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Icon = styled.span`
  margin-right: 10px;
`

const IdeaHeader = styled.div``

const IdeaBody = styled.section``

const IdeaDetail = styled.section`
  padding: 10px;
`

const IdeaContent = ({ idea, isLoading }) => {
  if (!isLoading && idea.author) {
    return (
      <Section>
        {/* Cover image */}
        <IdeaCover image={idea.images[0]}>
          {/* Actual content such as title, author, date, location */}
          <IdeaHeader>
            <IdeaHeading>{idea.title}</IdeaHeading>
            <IdeaMetas>
              <IdeaMeta>
                <Icon>
                  <span role="img" aria-label="author">
                    👤
                  </span>
                </Icon>{' '}
                {idea.author.name}
              </IdeaMeta>
              <IdeaMeta>
                <Icon>
                  <span role="img" aria-label="date">
                    📅
                  </span>
                </Icon>{' '}
                {dayjs(idea.datetime).format('D MMMM YYYY')}
              </IdeaMeta>
              <IdeaMeta>
                <Icon>
                  <span role="img" aria-label="location">
                    📍
                  </span>
                </Icon>{' '}
                {idea.location}
              </IdeaMeta>
            </IdeaMetas>
          </IdeaHeader>
        </IdeaCover>

        <IdeaBody>
          {/* Detailed description of the idea */}
          <IdeaDetail>
            <p>{JSON.stringify(idea.details)}</p>
          </IdeaDetail>
        </IdeaBody>
      </Section>
    )
  } else {
    return (
      <Section>
        <h1>LOADING ONE IDEA</h1>
      </Section>
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
