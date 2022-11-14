import { useSelector, useDispatch } from 'react-redux'

import Navigation from "components/Navigation"
import AuthNav from 'components/AuthNav';

import Box from 'components/Box';

import { selectIsLoggedIn } from 'redux/auth/selectors'


export const AppBar = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as='header' display='flex' justifyContent="space-between">
      <Navigation />
      {isLoggedIn ? <>Login</> : <AuthNav/ >}
    </Box>
  )
}