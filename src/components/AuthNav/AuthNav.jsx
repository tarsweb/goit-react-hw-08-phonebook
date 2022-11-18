import Box from 'components/Box';

import NavLinkButton from 'components/Custom/NavLinkButton';

import { useState } from 'react';


import { IconButton, Menu, MenuItem, Avatar} from '@mui/material';
import { useTheme } from 'styled-components';

const AuthNav = () => {
  const theme = useTheme()

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box display='flex' gridGap={theme.space.normal}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar/>
      </IconButton>
      <Menu
        sx={{ mt: '45px'}}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key="register" onClick={handleCloseUserMenu} sx={{ justifyContent: "center"}}>
          <NavLinkButton to="/register" size="small"> Register </NavLinkButton>
        </MenuItem>
        <MenuItem key="login" onClick={handleCloseUserMenu} sx={{ justifyContent: "center"}}>
          <NavLinkButton  to="/login" size="small" > LogIn </NavLinkButton>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export { AuthNav }