import React from 'react'
import styled from '@emotion/styled'

import Heading from './Heading'

const Card = styled.div`
  background: #fafafa;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 300px;
  margin: 10px;
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

const IdeaCard = ({ id }) => {
  return (
    <Card>
      <CardImage src={`/assets/images/traveling.jpg`} alt="Card Image" />
      <CardData>
        <Heading size={3} align="left" margin="0">
          Tripvesto {id}
        </Heading>
        <p>App to plan and gather your friends to travel. Let's join us!</p>
      </CardData>
      <CardMetas>
        <CardMeta>
          <Icon>⬤</Icon> Joen Doe
        </CardMeta>
        <CardMeta>
          <Icon>⬤</Icon> 25 February 2019
        </CardMeta>
        <CardMeta>
          <Icon>⬤</Icon> Jakarta, Indonesia
        </CardMeta>
      </CardMetas>
    </Card>
  )
}

export default IdeaCard
