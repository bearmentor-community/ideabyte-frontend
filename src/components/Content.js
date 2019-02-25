import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

const ContentCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src= "https://unsplash.com/photos/UZzZt2zeFzc&w=318&&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Tripvesto</CardTitle>
          <CardText>App to plan and gather your friends to travel</CardText>
        </CardBody>
      </Card>
    </div>
  )
}




export default class Content extends React.Component {
  render() {
    return <div> this is content </div>
  }
}

export default Content