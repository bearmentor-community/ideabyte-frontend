import styled from '@emotion/styled'

export const Form = styled.form`
  width: 800px;
`

export const FormContent = styled.div`
  margin: 30px;
  margin-top: 30px;
`

export const FormFieldSet = styled.div`
  margin: 20px 0;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  padding: 10px;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
  width: 100%;
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  padding: 10px;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
  width: 100%;
`

export const ButtonUpload = styled.button`
  background: hsla(0, 0%, 20%, 1);
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  padding: 15px 20px;
  transition: 0.2s;

  &:hover {
    transform: translate(0, -1px);
  }
`

export const InputSubmit = styled.input`
  background: ${props =>
    props.backgroundColor === 'green'
      ? 'hsla(145, 50%, 62%, 1)'
      : props.backgroundColor === 'yellow'
      ? 'hsla(45, 86%, 62%, 1)'
      : props.backgroundColor === 'red'
      ? 'hsla(0, 79%, 63%, 1)'
      : props.backgroundColor === 'black'
      ? 'hsla(0, 0%, 20%, 1)'
      : 'none'};
  color: ${props =>
    props.color === 'green'
      ? 'hsla(145, 50%, 62%, 1)'
      : props.color === 'yellow'
      ? 'hsla(45, 86%, 62%, 1)'
      : props.color === 'red'
      ? 'hsla(0, 79%, 63%, 1)'
      : props.color === 'black'
      ? 'hsla(0, 0%, 20%, 1)'
      : 'none'};
  padding: 15px 20px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 10px;
  transition: 0.2s;
  cursor: pointer;
  width: ${props => (props.block ? '100%' : '')};
  margin-right: ${props => (!props.block ? '30px' : '')};

  &:hover {
    transform: translate(0, -1px);
    background: ${props =>
      props.backgroundColor === 'green'
        ? 'hsla(145, 50%, 72%, 1)'
        : props.backgroundColor === 'yellow'
        ? 'hsla(45, 86%, 72%, 1)'
        : props.backgroundColor === 'red'
        ? 'hsla(0, 79%, 73%, 1)'
        : props.backgroundColor === 'black'
        ? 'hsla(0, 0%, 30%, 1)'
        : 'none'};
  }
`

export const Extra = styled.div`
  font-size: 12px;
  margin: 10px 0;
  text-align: center;
  color: #333;
`
