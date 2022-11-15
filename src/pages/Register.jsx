import { useState } from "react";
import { useSelector, useDispatch  } from 'react-redux'

import { resetError } from 'redux/auth/slice'

import Modal from "components/Modal"
import RegisterForm from "components/RegisterForm"

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  // const dispatch = useDispatch();

  // dispatch(resetError())

  const toggleModal = () => {
    console.log("Закрыть");
    setShowModal(prevState => !prevState)
  }

  return (
    // <Modal onClose={toggleModal}> 
      <RegisterForm />
    // </Modal> 
  )
}

export { Register as default}