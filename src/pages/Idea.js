import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import request from '../redux/request'

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
    width: 1000px;
  }
  @media all and (min-width: 768px) and (max-width: 1024px) {
    width: 600px;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 500px;
  }
  @media all and (max-width: 480px) {
    width: 400px;
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

class Idea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {}
    }
  }

  componentDidMount = async () => {
    const response = await request({
      method: 'get',
      url: `/ideas/${this.props.match.params.id}`
    })
    const item = response.data.item

    this.props.dispatch()
    this.setState({
      item: item
    })
  }

  render() {
    if (this.state.item) {
      return (
        <PageSimple width="100%">
          <Meta title={this.state.item.title} />

          <Center>
            {/* Cover image */}
            {/* <IdeaCover image={this.state.item.images[0]}> */}
            <IdeaCover image="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
              {/* Actual content such as title, author, date, location */}
              <IdeaHeader>
                <IdeaHeading>{this.state.item.title}</IdeaHeading>
                <IdeaMeta>
                  <li>
                    by <b>{this.state.item.author}</b>
                  </li>
                  <li>
                    on <b>{this.state.item.date}</b>
                  </li>
                  <li>
                    at <b>{this.state.item.location}</b>
                  </li>
                </IdeaMeta>
              </IdeaHeader>
            </IdeaCover>

            <IdeaBody>
              {/* Detailed description of the idea */}
              <IdeaDetail>
                <p>{JSON.stringify(this.state.item.details)}</p>
              </IdeaDetail>
            </IdeaBody>
          </Center>
        </PageSimple>
      )
    } else {
      return (
        <PageSimple>
          <h1>IDEA DOESN'T EXIST</h1>
        </PageSimple>
      )
    }
  }
}

export default Idea
