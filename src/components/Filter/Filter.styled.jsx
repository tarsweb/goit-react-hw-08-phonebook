import styled from 'styled-components';

const Label = styled.label`
  display:flex;
  gap:${({theme}) => theme.space.normal};
  padding-top: ${({theme}) => theme.space.normal};
`
const Input = styled.input`
  border-color:transparent;
`

export { Label,  Input}