import styled from 'styled-components'

const ButtonStyled = styled.button`
  display : inline-flex;
  gap: ${({theme}) => theme.space.normal};

  &:hover, &:focus {
    color :  ${({theme}) => theme.colors.offline};
    background: ${({theme}) => theme.colors.primary};
    border-color: transparent;
  }
`

export { ButtonStyled }