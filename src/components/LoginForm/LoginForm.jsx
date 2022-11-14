import { useFormik } from 'formik';

import Box from 'components/Box';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log('values', values);
    },
  });
  return (
    <Box
      as="form"
      display="flex"
      gridGap="16px"
      flexDirection="column"
      py="16px"
      autocomplete="off"
      onSubmit={formik.handleSubmit}
    >
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
      <button type="submit"> Log In </button>
    </Box>
  );
};

export { LoginForm };