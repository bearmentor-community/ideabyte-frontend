import React, { Fragment } from 'react'
import ReactFilestack from 'filestack-react'

import { ButtonUpload } from './FormStyledComponents'

const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY || false

const filestackOptions = {
  accept: 'image/*',
  maxFiles: 5
}

const handleSuccess = result => {
  console.log(result)
}

const handleError = error => {
  console.log(error)
}

const FormPost = () => {
  return (
    <Fragment>
      {filestackApiKey && (
        <ReactFilestack
          apikey={filestackApiKey} // preconfigured
          options={filestackOptions} // preconfigured
          onSuccess={handleSuccess} // preconfigured
          onError={handleError} // preconfigured
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
