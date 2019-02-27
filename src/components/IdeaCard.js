import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import ObjectID from 'bson-objectid'

import Heading from './Heading'
import Paragraph from './Paragraph'

const Card = styled.div`
  background: #fafafa;
  border-radius: 4px;
  width: 300px;
  margin: 10px;
  color: #333;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  }
`

const CardImage = styled.img`
  border-radius: 4px 4px 0 0;
`

const CardData = styled.div`
  padding: 20px;
`

const CardMetas = styled.div`
  padding: 20px;
  padding-top: 0;
`

const CardMeta = styled.p`
  margin: 4px 0;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Icon = styled.span`
  color: hsla(45, 86%, 62%, 1);
  margin-right: 10px;
`

const IdeaCard = ({ index }) => {
  const item = {
    _id: ObjectID(),
    id: index + 1,
    title: `Tripvesto ${index}`,
    short: `App to plan and gather your friends to travel. Let's join us!`,
    author: 'Joen Doe',
    date: '25 February 2019',
    location: 'Jakarta, Indonesia',
    slug: 'tripvesto-trip-planner'
  }

  return (
    <Link to="/ideas/1">
      <Card>
        <CardImage src={`/assets/images/traveling.jpg`} alt="Card Image" />
        <CardData>
          <Heading size={3} align="left" margin="0">
            {item.title}
          </Heading>
          <Paragraph>{item.short}</Paragraph>
        </CardData>
        <CardMetas>
          <CardMeta>
            <Icon>⬤</Icon> {item.author}
          </CardMeta>
          <CardMeta>
            <Icon>⬤</Icon> {item.date}
          </CardMeta>
          <CardMeta>
            <Icon>⬤</Icon> {item.location}
          </CardMeta>
        </CardMetas>
        {/* <p>{JSON.stringify(item)}</p> */}
      </Card>
    </Link>
  )
}

export default IdeaCard
