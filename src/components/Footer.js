import React from 'react'
import styled from '@emotion/styled'
import { toast } from 'react-toastify'

const StyledFooter = styled.footer`
  background: #333;
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 200px;
`

const Footer = () => {
  const notify = () => {
    toast('💡 Brilliant idea!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false
    })
  }

  return (
    <StyledFooter>
      <p>
        <button onClick={notify}>
          <span role="img" aria-label="notify-bulb">
            💡
          </span>
        </button>
      </p>
      <p>Idea Byte (PT. Ideabyte Teknologi Edukasi) &copy; 2019 </p>
    </StyledFooter>
  )
}

export default Footer
