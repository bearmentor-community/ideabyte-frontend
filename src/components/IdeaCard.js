import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

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

const IdeaCard = ({ item }) => {
  return (
    <Link to="/ideas/1">
      <Card>
        <CardImage src={item.images[0]} alt="Card Image" />
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
            <Icon>⬤</Icon> {dayjs(item.date).format('DD MMMM YYYY')}
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
