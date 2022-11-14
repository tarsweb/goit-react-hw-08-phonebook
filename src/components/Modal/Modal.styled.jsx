import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 25%;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.8);
  outline: 1px solid red;
  z-index: 1200;
`
  
const ModalContent = styled.div` 
  //max-width: calc(50vw - 48px);
  //max-height: calc(50vh - 24px);
  max-width:50vw;
  max-height: 50vh;
;
`

export {Backdrop, ModalContent} 