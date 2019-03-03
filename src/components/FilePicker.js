import React, { Fragment } from 'react'
import ReactFilestack from 'filestack-react'

import { ButtonUpload } from './FormStyledComponents'

const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY || false

const filestackOptions = {
  accept: 'image/*',
  maxFiles: 5
}

const FormPost = props => {
  return (
    <Fragment>
      {filestackApiKey && (
        <ReactFilestack
          apikey={filestackApiKey} // preconfigured
          options={filestackOptions} // preconfigured
          onSuccess={props.onSuccess} // preconfigured
          onError={props.onError} // preconfigured
          preload={true}
          render={({ onPick }) => (
            <ButtonUpload onClick={onPick}>Pick Images</ButtonUpload>
          )}
        />
      )}
    </Fragment>
  )
}

export default FormPost
