import React, { Fragment } from 'react'

import styled from '@emotion/styled'

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
`

const Image = styled.img`
  height: 30px;
`

const FilePreview = props => {
  const images = props.images > 0 ? props.imagesString : [props.imagesString]

  return (
    <Fragment>
      <StyledUl>
        {images[0] &&
          images.map((item, index) => {
            return (
              <li key={index}>
                <Image src={item} alt={`post-${index}`} />
              </li>
            )
          })}
      </StyledUl>
    </Fragment>
  )
}

export default FilePreview
