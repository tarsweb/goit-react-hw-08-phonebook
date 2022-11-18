import LoginForm from "components/LoginForm"
import Box from "components/Box"

const Login = () => {

  return (
    <Box as='main' display="flex" mx='auto' justifyContent="center" minHeight="calc(100vh - 80px)">
      <LoginForm />
    </Box>
    
  )
}

export { Login as default }