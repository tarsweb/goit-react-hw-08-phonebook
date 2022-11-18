import { useState } from "react";

import Box from "components/Box"

import ContactForm from "components/ContactForm"
import Filter from "components/Filter"
import ContactList from "components/ContactList"

import { Button, IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { Dialog, DialogContent } from '@mui/material';

const Contacts = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box as="main" minHeight="calc(100vh - 80px)">
      <Box
        display="flex"
        pt="8px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Filter />
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={handleToggle}
          startIcon={<PersonAddIcon />}
        >
          Add contact
        </Button>
        {open && (
          <Dialog
            sx={{
              color: 'primary.ligth',
              zIndex: theme => theme.zIndex.drawer + 1,
            }}
            open={open}
            onClose={handleToggle}
          >
            <IconButton
              aria-label="close"
              onClick={handleToggle}
              sx={{
                position: 'absolute',
                padding:"0",
                top: '0',
                right: '0',
                transform: 'translate(-10%, 1%)',
              }}
            >
              <HighlightOffIcon />
            </IconButton>
            <DialogContent>
              <ContactForm />
            </DialogContent>
          </Dialog>
        )}
      </Box>

      <ContactList />
    </Box>
  );
};

export { Contacts as default }