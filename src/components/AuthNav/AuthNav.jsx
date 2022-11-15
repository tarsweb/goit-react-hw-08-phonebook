
import { NavLink } from 'react-router-dom';

import Box from 'components/Box';

const AuthNav = () => {
  return (
    <Box display='flex' gridGap="8px">
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> LogIn </NavLink>
    </Box>
  )
}

export { AuthNav }