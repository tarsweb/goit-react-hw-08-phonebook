import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";

import { selectContactsName } from "redux/contacts/selectors"

import { useFormik } from "formik";
import * as Yup from 'yup';

import {AiOutlineUserAdd } from 'react-icons/ai';

import Box from "components/Box";
import {FormStyled, ErrorMessageStyled, LabelStyled, Input, ButtonStyled} from './ContactForm.styled'

const nameReExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string().min(3, `Name must be at least 3 characters`).matches(nameReExp, 'Name is not valid').required('Name is required'),
  number: Yup.string().max(13, `Phone number must be at most 13 characters`).matches(phoneRegExp, 'Phone is not valid').required('Phone is required'),
});

const ContactForm = () => { 
  const dispatch = useDispatch();

  const contactsName = useSelector(selectContactsName);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: ''
    },
    validationSchema : schema, 
    onSubmit: (values, { resetForm }) => {
      const contactName = values.name;
      if (contactsName.includes(contactName.toLowerCase())) alert(`${contactName} is already in contacts`)
      else {
        dispatch(addContact(values));
        resetForm();
      }
    },
  });

  return (
    // <Box
    //   as="form"
    //   autoComplete="off"
    //   display="flex"
    //   flexWrap="wrap"
    //   alignItems="flex-start"
    //   py={theme.space.normal}
    //   gridGap={theme.space.normal}
    //   onSubmit={formik.handleSubmit}
      
    // >
    <FormStyled onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column">
        <LabelStyled>
          Name
          <Input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
        </LabelStyled>
        {formik.touched.name && formik.errors.name ? 
           <ErrorMessageStyled> {formik.errors.name} </ErrorMessageStyled> : null}
      </Box>

      <Box display="flex" flexDirection="column">
        <LabelStyled>
          Phone
          <Input type="tel" name="number" value={formik.values.number} onChange={formik.handleChange} />
        </LabelStyled>
        {formik.touched.number && formik.errors.number ? 
           <ErrorMessageStyled> {formik.errors.number} </ErrorMessageStyled> : null}
      </Box>

      <ButtonStyled type="submit"> <AiOutlineUserAdd /> Add contact </ButtonStyled>
      
    </FormStyled>
    // </Box>
  );
}

export { ContactForm } 