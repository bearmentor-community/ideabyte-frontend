import React, { Fragment } from 'react'
import styled from '@emotion/styled'

import Heading from '../components/Heading'
import HorizontalRule from '../components/HorizontalRule'

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Section = styled.section``

const AboutText = () => {
  return (
    <Fragment>
      <Heading size={2} scheme="light">
        About Idea Byte
      </Heading>

      <Sections>
        <Section>
          <p>
            <span role="img" aria-label="bulb">
              💡
            </span>
            Idea Byte helps ideators, innovators, developers, and any other
            humans to find and share ideas for inspiration. To date, there has
            been plenty of ideas — big and small — have come to be shared in the
            community.
          </p>
          <p>
            Welcome to{' '}
            <span role="img" aria-label="bulb">
              💡
            </span>
            Idea Byte!
          </p>
        </Section>
        <Section>
          <HorizontalRule />
        </Section>
        <Section>
          <p>
            This full stackweb application is developed in just 5 days at{' '}
            <a href="https://impactbyte.com">Impact Byte</a>, the fastest
            intensive full stack web with JavaScript technologies coding
            bootcamp on Earth. Visit{' '}
            <a href="https://impactbyte.com">https://impactbyte.com</a>
          </p>
          <p>
            To see the whole source code of this application, visit{' '}
            <a href="https://github.com/ideabyte">
              https://github.com/ideabyte
            </a>
          </p>
          <p>
            We use Git, GitHub, Figma, VS Code, HTML5, CSS3, JavaScript, React,
            React Hot Reload, React Router, React Helmet, Emotion, Redux,
            Netlify, Node.js, Express, MongoDB, Mongoose, MySQL, Knex.js,
            Objection.js, Heroku, Google Cloud Platform, and variety of other
            tools on Linux and macOS.
          </p>
        </Section>
      </Sections>
    </Fragment>
  )
}

export default AboutText
