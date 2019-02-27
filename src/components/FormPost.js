import React from 'react'
import ReactFilestack from 'filestack-react'

import Heading from './Heading'
import HorizontalRule from './HorizontalRule'
import PostEditor from './PostEditor'

import {
  FormContent,
  FormFieldSet,
  Label,
  Input,
  TextArea,
  ButtonUpload,
  InputSubmit
} from './FormStyledComponents'

const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY || false

const filestackOptions = {
  accept: 'image/*',
  maxFiles: 5
}

const handleSuccess = result => {
  console.log(result)
}
const handleError = error => {
  console.log(error) // an Object
}

const FormPost = () => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <Heading size={2} scheme="light">
        Post your idea
      </Heading>
      <HorizontalRule color="green" />

      <FormContent>
        <FormFieldSet>
          <Label>Title:</Label>
          <Input type="text" placeholder="Your idea title" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Short description:</Label>
          <Input
            type="text"
            placeholder="Describe your idea in 140 characters"
          />
        </FormFieldSet>

        {filestackApiKey && (
          <FormFieldSet>
            <Label>Images and photos:</Label>
            <ReactFilestack
              apikey={filestackApiKey} // preconfigured
              options={filestackOptions} // preconfigured
              onSuccess={handleSuccess} // preconfigured
              onError={handleError} // preconfigured
              preload={true}
              render={({ onPick }) => (
                <div>
                  <ButtonUpload onClick={onPick}>Pick Images</ButtonUpload>
                </div>
              )}
            />
          </FormFieldSet>
        )}

        <FormFieldSet>
          <Label>Detailed description and steps to actualize the idea:</Label>
          <TextArea name="idea-detail" cols="80" rows="20" />
          {/* Draft.js WYSIWYG will replace TextArea */}
          <PostEditor />
        </FormFieldSet>

        <InputSubmit backgroundColor="green" type="submit" value="Post Idea" />
        <InputSubmit color="red" type="button" value="Cancel" />
      </FormContent>
    </form>
  )
}

export default FormPost
