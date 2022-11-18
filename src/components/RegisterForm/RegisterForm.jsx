import { useState } from 'react';

import { useDispatch  } from 'react-redux'

import { register } from 'redux/auth/operations'
// import { selectError } from 'redux/auth/selectors'

import { useTheme } from 'styled-components';

import { useFormik } from "formik";
import * as Yup from 'yup';

import Box from "components/Box"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import IconButton from '@mui/material/IconButton';

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().min(3, `Name must be at least 3 characters`).matches("", 'E-mail is not valid').required('E-mail is required'),
  password: Yup.string().min(7,`Password must be at least 7 characters`).required('Password is required'),
});

const RegisterForm = () => {

  const dispatch = useDispatch();

  const theme = useTheme();
  // const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      name : "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      setShowPassword(false);
      resetForm();
    }
  })

  return (
    <Box
      as="form"
      display="flex"
      gridGap={theme.space.normal}
      flexDirection="column"
      py="16px"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Box display="flex">
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="User name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name ? 
            formik.errors.name : null}
          size="small"
          sx={{ width : '100%'}}
        />
      </Box>

      <Box display="flex">
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="E-mail"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? 
            formik.errors.email : null}
          size="small"
          sx={{ width : '100%'}}
        />
      </Box>
      
      <Box display="flex">
        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Password"
         type={showPassword ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={!!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password ? 
                formik.errors.password : null}
          size="small"
          sx={{ width : '100%'}}
          InputProps={{
            endAdornment : <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(event) => {event.preventDefault();}}
                edge="end"
                sx={showPassword ? {color: 'warning.main'} : null}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }}
        />
      </Box>
      
      <Button variant='contained' type="submit"> Register </Button>
      
    </Box>
  );
}

export { RegisterForm }