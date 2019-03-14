import React, { Fragment } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'

import { TextAreaPreview } from './FormStyledComponents'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../styles/draft.css'
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
    // convert to HTML string
    const HTMLString = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    )
    this.props.onPostEditor(HTMLString)
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
        <TextAreaPreview
          cols="80"
          rows="10"
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
