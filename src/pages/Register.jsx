import RegisterForm from "components/RegisterForm"

import Box from "components/Box"

const Register = () => {

  return (
    <Box as='main' display="flex" mx='auto' justifyContent="center" minHeight="calc(100vh - 80px)">
      <RegisterForm />
    </Box>
  )
}

export { Register as default }