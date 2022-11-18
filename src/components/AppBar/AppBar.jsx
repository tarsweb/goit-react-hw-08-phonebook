import { useAuth } from 'hooks';

import Navigation from "components/Navigation"
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

import Box from 'components/Box';

import { AppBar as MUIAppBar, Toolbar} from '@mui/material';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    // <Box as='header' display='flex' justifyContent="space-between">
    <MUIAppBar position="static">
      <Toolbar>
        <Navigation />
        <Box flexGrow="1" />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </MUIAppBar>
    // </Box>
  );
};