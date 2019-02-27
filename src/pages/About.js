import React from 'react'

import PageSpecial from '../layouts/PageSpecial'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import AboutText from '../components/AboutText'

const About = () => {
  return (
    <PageSpecial>
      <Meta title="About Us" />

      <Center>
        <AboutText />
      </Center>
    </PageSpecial>
  )
}

export default About
