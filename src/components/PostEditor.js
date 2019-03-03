import React, { Fragment } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'

import { TextArea } from './FormStyledComponents'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onChange = editorState => {
    this.setState({
      editorState: editorState
    })
  }

  render() {
    return (
      <Fragment>
        <Editor
          // editorState={this.state.editorState}
          toolbarClassName="rdw-editor-toolbar"
          wrapperClassName="rdw-editor-wrapper"
          editorClassName="rdw-editor-main"
          onEditorStateChange={this.onChange}
        />
        <TextArea
          cols="80"
          disabled
          value={draftToHtml(
            convertToRaw(this.state.editorState.getCurrentContent())
          )}
        />
      </Fragment>
    )
  }
}

export default PostEditor
