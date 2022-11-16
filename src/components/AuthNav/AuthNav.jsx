
import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';

import Box from 'components/Box';

const AuthNav = () => {
  return (
    <Box display='flex' gridGap="8px">
      <Button variant="outlined" size="small" component={NavLink} to="/register"> Register </Button>
      <Button variant="outlined" size="small" component={NavLink} to="/login"> LogIn </Button>
    </Box>
  )
}

export { AuthNav }