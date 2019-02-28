import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import PageSimple from '../layouts/PageSimple'
import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import UserProfile from '../components/UserProfile'
import UserIdeas from '../components/UserIdeas'

import { logoutUser } from '../redux/actions/logout'

const Profile = props => {
  const logout = () => {
    // only logoutUser if the user is actually authenticated
    if (props.user.isAuthenticated) {
      props.dispatch(logoutUser(props.user))
    }
  }

  // actual render
  if (props.user.isAuthenticated) {
    return (
      <PageSimple>
        <Meta title="My Profile" />

        <Center>
          <UserProfile user={props.user} logout={logout} />
          <UserIdeas />
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
