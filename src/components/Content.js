import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const ContentCard = props => {
  return (
    <div>
      <img
        width="300px"
        src="/assets/card-image.jpg"
        alt="Card image caption"
      />
      <div>
        <h3>Tripvesto</h3>
        <p>App to plan and gather your friends to travel</p>
      </div>
    </div>
  )
}

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    )
  }
}
