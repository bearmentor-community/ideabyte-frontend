import React from 'react'
import styled from '@emotion/styled'
import ObjectID from 'bson-objectid'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'

const IdeaCover = styled.section`
  margin-bottom: 40px;
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url('/assets/images/traveling.jpg') no-repeat center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 5px;
`

const IdeaHeader = styled.div`
  width: 600px;
  margin: 0 auto;
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

const Section = styled.section`
  width: 600px;
  margin: 0 auto;
`

const item = {
  _id: ObjectID(),
  id: 1,
  title: `Tripvesto`,
  short: `App to plan and gather your friends to travel. Let's join us!`,
  author: 'Joen Doe',
  date: '25 February 2019',
  location: 'Jakarta, Indonesia',
  slug: 'tripvesto-trip-planner',
  detail: `<p>
            App to plan and gather your friends to travel. So it would be a very
            fun experience.
          </p>
          <ol>
            <li>Search for existing trip plans</li>
            <li>Create your own planned trip</li>
            <li>Determine how many people can join</li>
            <li>Set up the place and list of activities</li>
            <li>Schedule for date and time</li>
            <li>Post the trip to Tripvesto</li>
            <li>Wait and watch until anyone’s interested join your trip</li>
            <li>Enjoy your trip with new friends</li>
          </ol>
          <p>Hopefully this idea really resonates with you!</p>
          <p>Please send a feedback to tripvesto@gmail.com</p>
          <p>
            Visit <a href="https://tripvesto.com">Tripvesto.com</a> to learn
            more.
          </p>`
}

const Idea = () => {
  return (
    <PageSimple width="100%">
      <Meta title={item.title} />

      <IdeaCover>
        <IdeaHeader>
          <IdeaHeading>{item.title}</IdeaHeading>
          <IdeaMeta>
            <li>{item.author}</li>
            <li>{item.date}</li>
            <li>{item.location}</li>
          </IdeaMeta>
        </IdeaHeader>
      </IdeaCover>

      <Section>
        <div>
          <p>
            App to plan and gather your friends to travel. So it would be a very
            fun experience.
          </p>
          <ol>
            <li>Search for existing trip plans</li>
            <li>Create your own planned trip</li>
            <li>Determine how many people can join</li>
            <li>Set up the place and list of activities</li>
            <li>Schedule for date and time</li>
            <li>Post the trip to Tripvesto</li>
            <li>Wait and watch until anyone’s interested join your trip</li>
            <li>Enjoy your trip with new friends</li>
          </ol>
          <p>Hopefully this idea really resonates with you!</p>
          <p>Please send a feedback to tripvesto@gmail.com</p>
          <p>
            Visit <a href="https://tripvesto.com">Tripvesto.com</a> to learn
            more.
          </p>
        </div>
      </Section>
    </PageSimple>
  )
}

export default Idea
