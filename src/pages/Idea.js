import React from 'react'
import styled from '@emotion/styled'

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

const Idea = () => {
  return (
    <PageSimple width="100%">
      <Meta title="Idea Name" />

      <IdeaCover>
        <IdeaHeader>
          <IdeaHeading>Idea Name</IdeaHeading>
          <IdeaMeta>
            <li>Joen Doe</li>
            <li>25 February 2019</li>
            <li>Jakarta, Indonesia</li>
          </IdeaMeta>
        </IdeaHeader>
      </IdeaCover>

      <Section>
        <div>
          <p>
            App to plan and gather your friends to travel. So it would be a very
            fun experience.
          </p>
          <p>
            <ol>
              <li>1. Search for existing trip plans</li>
              <li>2. Create your own planned trip</li>
              <li>3. Determine how many people can join</li>
              <li>4. Set up the place and list of activities</li>
              <li>5. Schedule for date and time</li>
              <li>6. Post the trip to Tripvesto</li>
              <li>
                7. Wait and watch until anyone’s interested join your trip
              </li>
              <li>8. Enjoy your trip with new friends</li>
            </ol>
          </p>
          <p>Hopefully this idea really resonates with you!</p>
          <p>Please send a feedback to tripvesto@gmail.com</p>
        </div>
      </Section>
    </PageSimple>
  )
}

export default Idea
