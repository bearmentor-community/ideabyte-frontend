import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import UserProfile from '../components/UserProfile'
import UserButtons from '../components/UserButtons'
import UserIdeas from '../components/UserIdeas'
import HorizontalRule from '../components/HorizontalRule'

import { logoutUser } from '../redux/actions/logout'
import { decodeToken } from '../helpers'

const fakeIdeas = [
  {
    title: 'My own idea 1'
  },
  {
    title: 'My own idea 2'
  },
  {
    title: 'My own idea 3'
  }
]

const Profile = props => {
  // only render is both isAuthenticated & token are exist
  if (props.user.isAuthenticated && props.user.token) {
    const navigateToPostPage = () => {
      // only navigate to post if the user isAuthenticated
      props.user.isAuthenticated && props.dispatch(push('/post'))
    }

    const logoutUserFromProfile = () => {
      // only logoutUser if the user isAuthenticated
      props.user.isAuthenticated && props.dispatch(logoutUser(props.user))
    }

    // only use helpers.decodeToken() when token is available
    const decodedUser = decodeToken(props.user.token)

    // actual render
    return (
      <PageSimple>
        <Meta title="My Profile" />

        <Center>
          {/* avatar, name, email */}
          <UserProfile name={decodedUser.name} email={decodedUser.email} />
          {/* go to post button, logout button */}
          <UserButtons
            navigateToPostPage={navigateToPostPage}
            logoutUserFromProfile={logoutUserFromProfile}
          />
          {/* user's posted ideas list */}
          <UserIdeas ideas={fakeIdeas} />

          <HorizontalRule color="yellow" />

          {/* decodedUser object */}
          <pre>
            decodedUser = {decodedUser && JSON.stringify(decodedUser, null, 2)}
          </pre>
        </Center>
      </PageSimple>
    )
  } else {
    return (
      <PageSimple>
        <Meta title="Redirecting..." />

        {props.dispatch(push('/'))}
      </PageSimple>
    )
  }
}

const mapStateToProps = state => {
  return {
    // might contain name, email, token, isAuthenticated
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
