import React from 'react'

import Heading from './Heading'
import HorizontalRule from './HorizontalRule'

import {
  FormContent,
  FormFieldSet,
  Label,
  Input,
  TextArea,
  InputSubmit
} from './FormStyledComponents'

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

        <FormFieldSet>
          <Label>Images and photos:</Label>
          <Input disabled type="text" />
        </FormFieldSet>

        <FormFieldSet>
          <Label>Detailed description and steps to actualize the idea:</Label>
          <TextArea name="idea-detail" cols="80" rows="20" />
        </FormFieldSet>

        <InputSubmit backgroundColor="green" type="submit" value="Post Idea" />
        <InputSubmit backgroundColor="red" type="button" value="Cancel" />
      </FormContent>
    </form>
  )
}

export default FormPost
