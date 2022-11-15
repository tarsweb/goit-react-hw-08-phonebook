import { useAuth } from 'hooks';

import Navigation from "components/Navigation"
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

import Box from 'components/Box';

export const AppBar = () => {

  const {isLoggedIn} = useAuth();

  return (
    <Box as='header' display='flex' justifyContent="space-between">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav/ >}
    </Box>
  )
}