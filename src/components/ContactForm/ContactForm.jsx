import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";

import { selectContactsName } from "redux/contacts/selectors"

import { useState } from "react";
import { useTheme } from "styled-components";

import { useFormik } from "formik";
import * as Yup from 'yup';

import Box from "components/Box";

import { TextField, Button, Snackbar, Alert} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const nameReExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string().min(3, `Name must be at least 3 characters`).matches(nameReExp, 'Name is not valid').required('Name is required'),
  number: Yup.string().max(13, `Phone number must be at most 13 characters`).matches(phoneRegExp, 'Phone is not valid').required('Phone is required'),
});

const ContactForm = () => { 
  const theme = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = (event) => {
    if (event === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const contactsName = useSelector(selectContactsName);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    validationSchema : schema, 
    onSubmit: (values, { resetForm }) => {
      const contactName = values.name;
      if (contactsName.includes(contactName.toLowerCase()))
      { setOpen(true); setMessage(`${contactName} is already in contacts`)}//alert(`${contactName} is already in contacts`)
      else {
        dispatch(addContact(values));
        resetForm();
      }
    },
  });

  return (

    <Box as="form" display="flex"
    flexWrap= "wrap"
    justifyContent= "center"
    alignItems= "flex=start"  
    gridGap={theme.space.normal}
    p={theme.space.large}
    border={`1px solid ${theme.colors.accentAltenative}`}
    borderRadius={theme.radii.normal}

    autoComplete="off"
    onSubmit={formik.handleSubmit}>

      <Box display="flex">
        <PersonAddIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Name"
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
        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          label="Phone"
          type="tel"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={!!formik.errors.number}
          helperText={formik.touched.number && formik.errors.number ? 
            formik.errors.number : null}
          size="small"
          sx={{ width : '100%'}}
        />
      </Box>

      <Button variant="contained" type="submit" startIcon={<PersonAddIcon />} > Add contact </Button>

      {open && 
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        key='topright'
      > 
        <Alert onClose={handleClose} severity="warning">{message}</Alert> 
      </Snackbar>}
      
    </Box>
  );
}

export { ContactForm }