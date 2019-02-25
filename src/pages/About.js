import React from 'react'

import PageSpecial from '../layouts/PageSpecial'
import Meta from '../layouts/Meta'

import Heading from '../components/Heading'

const About = () => {
  return (
    <PageSpecial>
      <Meta title="About Us" />
      <Heading size={1}>About Idea Byte</Heading>
      <div>
        <p>
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte helps ideators, innovators, developers, and any other humans
          to find and share ideas for inspiration. To date, there has been
          plenty of ideas — big and small — have come to be shared in the
          community.
        </p>
        <p>
          Welcome to{' '}
          <span role="img" aria-label="bulb">
            💡
          </span>
          Idea Byte!
        </p>
      </div>
      <hr />
      <div>
        <p>
          This web application is developed in just 5 days in Impact Byte, the
          fastest intensive full stack web with JavaScript technologies coding
          bootcamp on Earth. Visit https://impactbyte.com
        </p>
        <p>
          To see the whole source code of this application, visit
          https://github.com/ideabyte
        </p>
      </div>
    </PageSpecial>
  )
}

export default About
