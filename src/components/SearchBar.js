import React from 'react'

import styled from '@emotion/styled'

const SearchBarForm = styled.form`
  background: #333;
  display: flex;
  justify-content: center;
`

const SearchSubmit = styled.input`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
`

const SearchText = styled.input`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 20px;
  width: 400px;
`

const SearchBar = () => {
  return (
    <SearchBarForm
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <SearchSubmit type="submit" value="🔍" />
      <SearchText type="text" name="search" placeholder="Search for ideas..." />
    </SearchBarForm>
  )
}

export default SearchBar
