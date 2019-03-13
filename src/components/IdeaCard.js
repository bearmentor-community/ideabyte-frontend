import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import PreloadImage from 'react-preload-image'
import dayjs from 'dayjs'

import Heading from './Heading'
import Paragraph from './Paragraph'

const CardOuter = styled.div``

const Card = styled.div`
  background: #fafafa;
  border-radius: 4px;
  width: 320px;
  max-height: 480px;
  margin: 10px;
  color: #333;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  }
`

const CardData = styled.div`
  padding: 20px;
`

const CardMetas = styled.div`
  padding: 20px;
  padding-top: 0;
  font-weight: bold;
`

const CardMeta = styled.p`
  margin: 4px 0;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-ideas: flex-end;
`

const Icon = styled.span`
  margin-right: 10px;
`

const IdeaCard = ({ idea }) => {
  return (
    <CardOuter>
      <Link to={`/ideas/${idea.id}`}>
        <Card>
          <PreloadImage
            style={{
              position: 'relative',
              width: '100%',
              height: '200px',
              backgroundColor: '#222222'
            }}
            src={idea.images[0]}
            alt={idea.title}
          />

          <CardData>
            <Heading size={3} align="left" margin="0">
              {idea.title}
            </Heading>
            <Paragraph>{idea.description}</Paragraph>
          </CardData>
          <CardMetas>
            <CardMeta>
              <Icon>
                <span role="img" aria-label="author">
                  👤
                </span>
              </Icon>{' '}
              {idea.author.name}
            </CardMeta>
            <CardMeta>
              <Icon>
                <span role="img" aria-label="date">
                  📅
                </span>
              </Icon>{' '}
              {dayjs(idea.datetime).format('D MMMM YYYY')}
            </CardMeta>
            <CardMeta>
              <Icon>
                <span role="img" aria-label="location">
                  📍
                </span>
              </Icon>{' '}
              {idea.location}
            </CardMeta>
          </CardMetas>
        </Card>
      </Link>
    </CardOuter>
  )
}

export default IdeaCard
