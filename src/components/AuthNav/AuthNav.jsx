import Box from 'components/Box';

import NavLinkButton from 'components/Custom/NavLinkButton';

const AuthNav = () => {
  return (
    <Box display='flex' gridGap="8px">
      <NavLinkButton to="/register" size="small"> Register </NavLinkButton>
      <NavLinkButton  to="/login" size="small" > LogIn </NavLinkButton>
    </Box>
  )
}

export { AuthNav }