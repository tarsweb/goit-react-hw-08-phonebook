import { useSelector, useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations'
import { selectError } from 'redux/auth/selectors';

import { useFormik } from 'formik';

import Box from 'components/Box';

const LoginForm = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log('values', values);
      dispatch(login(values));
      resetForm();
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
      <button type="submit"> Log In </button>
      {error && <p>{error.message}</p>}
    </Box>
  );
};

export { LoginForm };