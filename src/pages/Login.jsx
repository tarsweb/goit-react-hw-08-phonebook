import LoginForm from "components/LoginForm"
import Box from "components/Box"

import {Dialog, DialogContent} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  return (
    <Box
      as="main"
      display="flex"
      mx="auto"
      justifyContent="center"
      minHeight="calc(100vh - 80px)"
    >
      <Dialog open={true} onClose={() => navigate('/')}>
        <DialogContent>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export { Login as default }