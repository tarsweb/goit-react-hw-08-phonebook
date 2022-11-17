import { useTheme } from 'styled-components';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { selectError, selectIsLoading, selectShowContacts } from "redux/contacts/selectors"
import { fetchContacts, deleteContact } from 'redux/contacts/operations';

// import { ButtonStyled } from './ContactList.styled'

// import {AiOutlineUserDelete } from 'react-icons/ai';
import Button from '@mui/material/Button';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';


import Box from 'components/Box';

const ContactList = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const contacts = useSelector(selectShowContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="ul"
      py={theme.space.large}
      display="flex"
      gridGap={theme.space.small}
      flexDirection="column"
    >
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length
        ? contacts.map(({ id, name: contactName, number: phoneNumber }) => (
            <Box
              key={id}
              as="li"
              p={theme.space.normal}
              fontWeight={theme.fontWeights.bold}
              display="flex"
              justifyContent="space-between"
              aligItems="flex-start"
              border={`1px solid ${theme.colors.border}`}
            >
              <Box display="inline-flex" alignItems="center" gridGap={theme.space.normal} flexGrow="1">
                <Box as="span" flexGrow="1" maxWidth="50%"> {contactName} </Box>
                <span> {phoneNumber} </span>
              </Box>
              {/* <ButtonStyled type="button" onClick={() => dispatch(deleteContact(id))}>
              <AiOutlineUserDelete/>
              Delete
            </ButtonStyled> */}
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
                variant="outlined"
                size='small'
                color="error"
                startIcon={<PersonRemoveIcon />}
              >
                Delete
              </Button>
            </Box>
          ))
        : null}
    </Box>
  );
};

export { ContactList }