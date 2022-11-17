// import { useState } from "react";
// import { useSelector, useDispatch  } from 'react-redux'

// import { resetError } from 'redux/auth/slice'

import Modal from "components/Modal"
import RegisterForm from "components/RegisterForm"

import Box from "components/Box"

import { Backdrop, Portal} from "@mui/material";


const Register = () => {
  // const [showModal, setShowModal] = useState(false);

  // const dispatch = useDispatch();

  // dispatch(resetError())

  // const toggleModal = () => {
  //   console.log("Закрыть");
  //   setShowModal(prevState => !prevState)
  // }

  return (
    // <Backdrop> 
    //   <Portal>
        
    //   </Portal>
    // </Backdrop>
    <Modal>
      <Box mx="auto" px="20px" maxWidth="960px" display="flex"
      alignItems="center"
      justifyContent="center"
     >
        <RegisterForm />
      </Box>
    </Modal> 
  )
}

export { Register as default }