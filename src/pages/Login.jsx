// import { useDispatch  } from 'react-redux'

// import { resetError } from 'redux/auth/slice' 

import Modal from "components/Modal"
import LoginForm from "components/LoginForm"

const Login = () => {

  // const dispatch = useDispatch();

  // dispatch(resetError())

  return (
    // <Modal> 
      <LoginForm />
    // </Modal>
  )
}

export { Login as default }