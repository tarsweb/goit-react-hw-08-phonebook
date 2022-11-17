import { useState } from "react";

import Box from "components/Box"

import ContactForm from "components/ContactForm"
import Filter from "components/Filter"
import ContactList from "components/ContactList"
import Button from '@mui/material/Button';

import Modal from "components/ModalAddContact"

import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Portal from '@mui/material/Portal';

const Contacts = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <Box as="main">
      {/* <ContactForm /> */}
      <Box display="flex" pt='8px' justifyContent="space-between" alignItems="center">
        <Filter />
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={toggleModal}
          startIcon={<PersonAddIcon />}
        >
          Add contact
        </Button>
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm />
          </Modal>
        )}
      </Box>

      <ContactList />
    </Box>
  );
}

export { Contacts as default }