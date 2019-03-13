import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import PageSimple from '../layouts/PageSimple'

import UserContent from '../components/UserContent'

import { getOneUser } from '../redux/actions/user'

const User = ({ match, dispatch }) => {
  // asynchronous get ideas from backend API
  // just like in componentDidUpdate()
  useEffect(() => {
    dispatch(
      getOneUser({
        id: match.params.id
      })
    )
  }, []) // prevent multiple data update

  return (
    <PageSimple>
      <UserContent />
    </PageSimple>
  )
}

export default connect()(User)
