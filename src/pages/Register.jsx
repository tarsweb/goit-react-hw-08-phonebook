import RegisterForm from "components/RegisterForm"

import Box from "components/Box"

import {Dialog, DialogContent} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Register = () => {
  
  const navigate = useNavigate();

  return (
    <Box as='main' display="flex" mx='auto' justifyContent="center" minHeight="calc(100vh - 80px)">
      <Dialog open={true}
      onClose={() => navigate("/")}>
        <DialogContent> 
          <RegisterForm />
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export { Register as default }