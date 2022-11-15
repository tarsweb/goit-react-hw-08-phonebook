import { useSelector, useDispatch  } from 'react-redux'

import { register } from 'redux/auth/operations'
import { selectError } from 'redux/auth/selectors'

import { useFormik } from "formik"

import Box from "components/Box"

// const RegisterForm = () => {
//   return (
//     <Box as="label" width="100%" height="100%" bg="white"> Register Form </Box>
//   )
// }

const RegisterForm = () => {

  const dispatch = useDispatch();

  const error = useSelector(selectError);
  
  const formik = useFormik({
    initialValues: {
      name : "vdv",
      email: "vano@ukr.net",
      password: "1234567",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      dispatch(register(values));
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
      {error && error?.name && <>{error.name}</>}
      <Box as="label" display="flex" flexDirection="column">
        Email
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Box>
      {error && error?.email && <>{error.email}</>}
      <Box as="label" display="flex" flexDirection="column">
        Password
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Box>
      {error && error?.password && <>{error.password}</>}
      <button type="submit"> Register </button>
      {error && <p>{error?.message}</p>}
    </Box>
  );
}

export { RegisterForm }