import { useSelector, useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations'
import { selectError } from 'redux/auth/selectors';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import Box from 'components/Box';

const schema = Yup.object().shape({
  email: Yup.string().min(3, `Name must be at least 3 characters`).matches("", 'E-mail is not valid').required('E-mail is required'),
  password: Yup.string().min(7,`Password must be at least 7 characters`).required('Password is required'),
});

const LoginForm = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema : schema,
    onSubmit: (values, { resetForm }) => {
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
      <Box display="flex" flexDirection="column">
        <Box as="label" display="flex" flexDirection="column">
          E-mail
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Box>
        {error && error?.email && <>{error.email}</>}
        {formik.touched.email && formik.errors.email ? 
            <> {formik.errors.email} </> : null}
      </Box>
      <Box display="flex" flexDirection="column">
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
      {formik.touched.password && formik.errors.password ? 
           <> {formik.errors.password} </> : null}
      </Box>
      <button type="submit"> Log In </button>
      {error && <p>{error.message}</p>}
    </Box>
  );
};

export { LoginForm };