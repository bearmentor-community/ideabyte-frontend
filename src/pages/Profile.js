import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'

import UserProfile from '../components/UserProfile'
import UserButtons from '../components/UserButtons'
import UserIdeas from '../components/UserIdeas'

import { logoutUser } from '../redux/actions/logout'

const Profile = props => {
  const navigateToPostPage = () => {
    // only navigate to post if the user isAuthenticated
    props.user.isAuthenticated && props.dispatch(push('/post'))
  }

  const logoutUserFromProfile = () => {
    // only logoutUser if the user isAuthenticated
    props.user.isAuthenticated && props.dispatch(logoutUser(props.user))
  }

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

  // actual render
  if (props.user.isAuthenticated) {
    return (
      <PageSimple>
        <Meta title="My Profile" />

        <Center>
          {/* avatar, name, email */}
          <UserProfile user={props.user} />
          {/* go to post button, logout button */}
          <UserButtons
            navigateToPostPage={navigateToPostPage}
            logoutUserFromProfile={logoutUserFromProfile}
          />
          {/* user's posted ideas list */}
          <UserIdeas ideas={fakeIdeas} />
        </Center>
      </PageSimple>
    )
  } else {
    props.dispatch(push('/'))

    return (
      <PageSimple>
        <Meta title="Redirecting..." />
      </PageSimple>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
