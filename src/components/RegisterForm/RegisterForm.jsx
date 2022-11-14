import { useFormik } from "formik";

import Box from "components/Box"

// const RegisterForm = () => {
//   return (
//     <Box as="label" width="100%" height="100%" bg="white"> Register Form </Box>
//   )
// }

const RegisterForm = () => {
  
  const formik = useFormik({
    initialValues: {
      userName : "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);
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
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
      </Box>
      <Box as="label" display="flex" flexDirection="column">
        Email
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Box>
      <Box as="label" display="flex" flexDirection="column">
        Password
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Box>
      <button type="submit"> Register </button>
    </Box>
  );
}

export { RegisterForm }