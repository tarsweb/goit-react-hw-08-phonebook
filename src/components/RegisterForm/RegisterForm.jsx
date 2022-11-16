import { useDispatch  } from 'react-redux'

import { register } from 'redux/auth/operations'
// import { selectError } from 'redux/auth/selectors'

import { useFormik } from "formik";
import * as Yup from 'yup';

import Box from "components/Box"

import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

import Button from '@mui/material/Button';

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().min(3, `Name must be at least 3 characters`).matches("", 'E-mail is not valid').required('E-mail is required'),
  password: Yup.string().min(7,`Password must be at least 7 characters`).required('Password is required'),
});

const RegisterForm = () => {

  const dispatch = useDispatch();

  // const error = useSelector(selectError);
  
  const formik = useFormik({
    initialValues: {
      name : "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      dispatch(register(values));
      resetForm();
      //if (!error) resetForm();
    }
  })
  return (
    <Box
      as="form"
      display="flex"
      gridGap="16px"
      flexDirection="column"
      py="16px"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Box display="flex">
        <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Username"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
          helperText={formik.touched.name && formik.errors.name ? 
            formik.errors.name : null}
          size="small"
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
          error={formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? 
            formik.errors.email : null}
          size="small"
        />
      </Box>
      
      <Box display="flex">
        <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          helperText={formik.touched.password && formik.errors.password ? 
                formik.errors.password : null}
          size="small"
        />
      </Box>
      
      <Button variant='contained' type="submit"> Register </Button>
      
    </Box>
  );
}

export { RegisterForm }