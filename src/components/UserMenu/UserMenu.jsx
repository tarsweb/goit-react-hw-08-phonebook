import { useState } from 'react';
import { useDispatch } from 'react-redux'

import { useAuth } from 'hooks'

import { logout } from 'redux/auth/operations'

import Box from "components/Box"

import { Button, IconButton, Menu, MenuItem, Avatar, Typography } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from 'styled-components';


const UserMenu = () => {
  const dispatch = useDispatch();

  const theme =useTheme();

  const {user: {name}} = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box display="flex" alignItems="center" gridGap={theme.space.normal}>
      <Typography display='inline-flex' gap={theme.space.normal}>
          {name}
      </Typography>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar sx={{ bgcolor:'common.white'}}>
          <PersonIcon sx={{ color:'primary.main'}}/>
        </Avatar>  
      </IconButton>
      <Menu
        sx={{ mt: '50px' }}
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
        <MenuItem>
          <Button variant="outlined" size="small" type="button" onClick={() => dispatch(logout())}> Logout </Button>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export { UserMenu }