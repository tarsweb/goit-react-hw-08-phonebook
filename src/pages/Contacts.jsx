import Box from "components/Box"

import ContactForm from "components/ContactForm"
import Filter from "components/Filter"
import ContactList from "components/ContactList"

const Contacts = () => {
  return (
    <Box >
      <ContactForm />
      <Filter/>
      <ContactList />
    </Box>
  )
}

export { Contacts as default}