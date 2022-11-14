
import { NavLink } from 'react-router-dom';

import Box from 'components/Box';

const AuthNav = () => {
  return (
    <Box>
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> LogIn </NavLink>
    </Box>
  )
}

export { AuthNav }