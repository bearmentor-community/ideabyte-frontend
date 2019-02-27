import styled from '@emotion/styled'

const StyledButton = styled.button`
  background: ${props =>
    props.backgroundColor === 'green'
      ? 'hsla(145, 50%, 62%, 1)'
      : props.backgroundColor === 'yellow'
      ? 'hsla(45, 86%, 62%, 1)'
      : props.backgroundColor === 'red'
      ? 'hsla(0, 79%, 63%, 1)'
      : 'hsla(0, 0%, 20%, 1)'};
  color: ${props =>
    props.color === 'white' ? 'hsla(0, 100%, 100%, 1)' : 'hsla(0, 0%, 20%, 1)'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  padding: 10px 40px;
  transition: 0.2s;

  &:hover {
    background: ${props =>
      props.backgroundColor === 'green'
        ? 'hsla(145, 50%, 72%, 1)'
        : props.backgroundColor === 'yellow'
        ? 'hsla(45, 86%, 72%, 1)'
        : props.backgroundColor === 'red'
        ? 'hsla(0, 79%, 73%, 1)'
        : 'hsla(0, 0%, 30%, 1)'};
  }
`

export default StyledButton
