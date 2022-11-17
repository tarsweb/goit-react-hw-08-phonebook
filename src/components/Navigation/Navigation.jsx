import { useAuth } from 'hooks';

import Box from 'components/Box';

import NavLinkButton from 'components/Custom/NavLinkButton';

const Navigation = () => {

  const {isLoggedIn} = useAuth();

  return (
    <Box as="nav" display="flex" gridGap="8px">
      <NavLinkButton to="/" end size="small"> Home </NavLinkButton>
      {isLoggedIn && <NavLinkButton to="/contacts" size="small"> Contacts </NavLinkButton> }
    </Box>
  );
}

export { Navigation }