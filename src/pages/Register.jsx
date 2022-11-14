import { useState } from "react";
import Modal from "components/Modal"
import RegisterForm from "components/RegisterForm"

const Register = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    console.log("Закрыть");
    setShowModal(prevState => !prevState)
  }

  return (
    <Modal onClose={toggleModal}> 
      <RegisterForm />
    </Modal> 
  )
}

export { Register as default}