import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'
import FormPost from '../components/FormPost'

const Post = () => {
  return (
    <PageSimple>
      <Meta title="Post New Idea" />
      <FormPost />
    </PageSimple>
  )
}

export default Post
