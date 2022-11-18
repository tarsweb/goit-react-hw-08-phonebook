import { useTheme } from 'styled-components';

import { useAuth } from 'hooks';

import Box from 'components/Box';

import NavLinkButton from 'components/Custom/NavLinkButton';

const Navigation = () => {

  const {isLoggedIn} = useAuth();

  const theme = useTheme();

  return (
    <Box as="nav" display="flex" gridGap={theme.space.normal}>
      <NavLinkButton to="/" end size="small" sx={{color: "primary.contrastText"}}> Home </NavLinkButton>
      {isLoggedIn && <NavLinkButton to="/contacts" size="small" sx={{color: "primary.contrastText"}}> Contacts </NavLinkButton> }
    </Box>
  );
}

export { Navigation }