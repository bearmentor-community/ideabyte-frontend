import React from 'react'
import { connect } from 'react-redux'
import { DotLoader } from 'react-spinners'

import Meta from '../layouts/Meta'
import Center from '../layouts/Center'
import UserProfile from '../components/UserProfile'
import UserIdeas from '../components/UserIdeas'

const UserContent = ({ user, isLoading }) => {
  if (!isLoading) {
    return (
      <section>
        <Meta title={user.name} />
        <Center>
          <UserProfile name={user.name} email={user.email} />
          <UserIdeas ideas={user.ideas} />
        </Center>
      </section>
    )
  } else {
    return (
      <section>
        <DotLoader
          sizeUnit={'px'}
          size={100}
          color={'#f1c84b'}
          loading={true}
        />
        <h1>Loading User's Profile...</h1>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    isLoading: state.user.isLoading
  }
}

export default connect(mapStateToProps)(UserContent)
