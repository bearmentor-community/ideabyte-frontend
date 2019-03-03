import React, { useState } from 'react'
import { connect } from 'react-redux'

import Heading from './Heading'
import HorizontalRule from './HorizontalRule'
import FilePicker from './FilePicker'
// import PostEditor from './PostEditor'

import {
  FormContent,
  FormFieldSet,
  Label,
  Input,
  TextArea,
  InputSubmit
} from './FormStyledComponents'

import { postNewIdea } from '../redux/actions/post'

import { decodeToken } from '../helpers'
import browserStorage from '../redux/browserStorage'

const token = browserStorage.getKey('token')
const user = decodeToken(token)

////////////////////////////////////////////////////////////////////////////////

const FormPost = props => {
  const [state, setState] = useState({
    author: user.sub,
    title: '',
    description: '',
    location: '',
    slug: '', // first-second-third
    images: [], // array of objects
    details: `` // HTML string
  })

  const onChange = event => {
    const name = event.target.name // title, description, ...
    const value = event.target.value // 'The Title', 'The Description', ...
    setState({
      ...state,
      [name]: value
    })
  }

  const onSuccess = response => {
    // console.info('response', response)
    const files = response.filesUploaded.map(item => {
      return item.url
    })
    setState({
      ...state,
      images: files
    })
  }

  const onError = error => {
    console.error(error)
  }

  // const onPostEditor = event => {
  //   console.log('onPostEditor', event.target)
  //   setState({
  //     ...state
  //   })
  // }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        const payload = {
          author: state.author,
          title: state.title,
          description: state.description,
          date: new Date(),
          location: state.location, // City, Country
          slug: state.title.split(' ').join('-'), // first-second-third
          images: state.images, // array of objects
          details: state.details // HTML string
        }

        console.log(payload)

        // props.dispatch(postNewIdea(payload))
      }}
    >
      <Heading size={2} scheme="light">
        Any good idea, {props.user.name}?
      </Heading>
      <HorizontalRule color="green" />

      {/* //////////////////////////////////////////////////////////////// */}
      <FormContent>
        <FormFieldSet>
          <Label>Title:</Label>
          <Input
            name="title"
            type="text"
            placeholder="Your idea title"
            onChange={onChange}
          />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <FormFieldSet>
          <Label>Short description:</Label>
          <Input
            name="description"
            type="text"
            placeholder="Describe your idea in 140 characters"
            onChange={onChange}
          />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <FormFieldSet>
          <Label>Location:</Label>
          <Input
            name="location"
            type="text"
            placeholder="City, Country"
            onChange={onChange}
          />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <FormFieldSet>
          <Label>Images and photos:</Label>
          {/* File picker with Filestack service */}
          <FilePicker name="images" onSuccess={onSuccess} onError={onError} />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <FormFieldSet>
          <Label>Detailed description and steps to actualize the idea:</Label>
          {/* Draft.js WYSIWYG can replace TextArea */}
          {/* <PostEditor name="details" onPostEditor={onPostEditor} /> */}
          <TextArea name="details" cols="80" rows="20" onChange={onChange} />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <InputSubmit backgroundColor="green" type="submit" value="Post Idea" />
        {/* <InputSubmit color="red" type="button" value="Cancel" /> */}
      </FormContent>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user || 'Unknown'
  }
}

export default connect(mapStateToProps)(FormPost)
