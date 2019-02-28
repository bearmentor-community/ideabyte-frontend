import React, { Fragment } from 'react'
import styled from '@emotion/styled'

import Button from './Button'

const Section = styled.section`
  display: flex;
`

const UserButtons = props => {
  return (
    <Fragment>
      <Section>
        <Button
          onClick={props.navigateToPostPage}
          backgroundColor="green"
          color="white"
        >
          Post Idea
        </Button>
        <Button
          onClick={props.logoutUserFromProfile}
          backgroundColor="red"
          color="white"
        >
          Logout
        </Button>
      </Section>
    </Fragment>
  )
}

export default UserButtons
