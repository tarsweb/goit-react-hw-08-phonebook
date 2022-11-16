import { useSelector, useDispatch  } from 'react-redux'

import { register } from 'redux/auth/operations'
import { selectError } from 'redux/auth/selectors'

import { useFormik } from "formik";
import * as Yup from 'yup';

import Box from "components/Box"

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().min(3, `Name must be at least 3 characters`).matches("", 'E-mail is not valid').required('E-mail is required'),
  password: Yup.string().min(7,`Password must be at least 7 characters`).required('Password is required'),
});

const RegisterForm = () => {

  const dispatch = useDispatch();

  const error = useSelector(selectError);
  
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
    // <form autoComplete="off" onSubmit={formik.handleSubmit}>
    <Box
      as="form"
      display="flex"
      gridGap="16px"
      flexDirection="column"
      py="16px"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Box as="label" display="flex" flexDirection="column">
        Username
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Box>
      {/* {error && error?.name && <>{error.name}</>} */}
      {formik.touched.name && formik.errors.name ? 
           <> {formik.errors.name} </> : null}
      <Box as="label" display="flex" flexDirection="column">
        Email
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Box>
      {/* {error && error?.email && <>{error.email}</>} */}
      {formik.touched.email && formik.errors.email ? 
            <> {formik.errors.email} </> : null}
      <Box as="label" display="flex" flexDirection="column">
        Password
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Box>
      {/* {error && error?.password && <>{error.password}</>} */}
      {formik.touched.password && formik.errors.password ? 
           <> {formik.errors.password} </> : null}
      <button type="submit"> Register </button>
      {error && <p>{error?.message}</p>}
    </Box>
  );
}

export { RegisterForm }