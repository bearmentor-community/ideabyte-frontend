import React, { useState } from 'react'
import { connect } from 'react-redux'

import Heading from './Heading'
import HorizontalRule from './HorizontalRule'
import FilePicker from './FilePicker'
import FilePreview from './FilePreview'
// import PostEditor from './PostEditor'

import {
  FormContent,
  FormFieldSet,
  Label,
  Input,
  TextArea,
  InputSubmit
} from './FormStyledComponents'

import { decodeToken } from '../helpers'
import browserStorage from '../redux/browserStorage'
import { postNewIdea } from '../redux/actions/post'

const token = browserStorage.getKey('token')
const user = decodeToken(token)

////////////////////////////////////////////////////////////////////////////////

const FormPost = props => {
  const [state, setState] = useState({
    title: '',
    description: '',
    location: '',
    slug: '', // first-second-third
    images: [], // array of string
    imagesString: '',
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

  const onPostEditor = editorState => {
    setState({
      ...state,
      editorState: editorState
    })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        const payload = {
          title: state.title,
          description: state.description,
          date: new Date(),
          location: state.location, // City, Country
          slug: state.title
            .toLowerCase()
            .split(' ')
            .join('-'), // first-second-third
          images: state.images > 0 ? state.images : [state.imagesString], // array of strings
          details: state.details // HTML string
        }

        props.dispatch(postNewIdea(payload))
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
          <Label>Multiple Images or one Image URL:</Label>
          {/* File picker with Filestack service */}
          <FilePicker name="images" onSuccess={onSuccess} onError={onError} />
          <Input
            name="imagesString"
            type="text"
            placeholder="URL of one image"
            onChange={onChange}
          />
          <FilePreview
            images={state.images}
            imagesString={state.imagesString}
          />
        </FormFieldSet>

        {/* //////////////////////////////////////////////////////////////// */}
        <FormFieldSet>
          <Label>Detailed description and steps to actualize the idea:</Label>
          {/* Draft.js WYSIWYG can replace TextArea */}
          <TextArea name="details" cols="80" rows="20" onChange={onChange} />
          {/* <PostEditor name="details" onPostEditor={onPostEditor} /> */}
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
