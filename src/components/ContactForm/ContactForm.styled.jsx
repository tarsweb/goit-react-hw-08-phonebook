import styled from 'styled-components'

const Input = styled.input``

const LabelStyled = styled.label`
  display:flex;
  gap:${({theme}) => theme.space.normal}
`

const ButtonStyled = styled.button`
  display : inline-flex;
  gap: ${({theme}) => theme.space.normal};

  &:hover, &:focus {
    color :  ${({theme}) => theme.colors.accentAltenative};
    background: ${({theme}) => theme.colors.primary};
    border-color: transparent;
  }
`

const FormStyled = styled.form`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;  
  gap:${({theme}) => theme.space.normal};
  padding: ${({theme}) => theme.space.large};
  border: 1px solid ${({theme}) => theme.colors.accentAltenative};
  border-radius: ${({theme}) => theme.radii.normal};
`

const ErrorMessageStyled = styled.div`
  color:${({theme}) => theme.colors.offline};
  font-size: ${ ({theme}) => theme.fontSizes["12"]};
  text-align: end
`

export {FormStyled, ErrorMessageStyled, LabelStyled, Input, ButtonStyled}