import React from 'react'

import Meta from '../layouts/Meta'
import PageSimple from '../layouts/PageSimple'

const Post = () => {
  return (
    <PageSimple>
      <Meta title="Post New Idea" />
      <section>
        <h1>Post your idea</h1>

        <form>
          <div>
            <label>Title:</label>
            <input type="text" />
          </div>

          <div>
            <label>Short description:</label>
            <input type="text" />
          </div>

          <div>
            <label>Images and photos:</label>
            <input type="text" disabled />
          </div>

          <div>
            <label>Detailed description and steps to actualize the idea:</label>
          </div>
          <textarea name="idea-detail" cols="80" rows="20" />

          <div>
            <input type="submit" value="Post" />
            <input type="button" value="Cancel" />
          </div>
        </form>
      </section>
    </PageSimple>
  )
}

export default Post
