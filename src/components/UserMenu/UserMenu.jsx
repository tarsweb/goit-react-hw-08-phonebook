import { useDispatch } from 'react-redux'

import { useAuth } from 'hooks'

import { logout } from 'redux/auth/operations'

import Box from "components/Box"
import { Button } from '@mui/material'

const UserMenu = () => {
  const dispatch = useDispatch();

  const {user} = useAuth();

  return (
    <Box display="flex" gridGap="8px">
      <p> User : {user.name} </p>
      <Button variant="outlined" size="small" type="button" onClick={() => dispatch(logout())}> Logout </Button>
    </Box>
  )
}

export { UserMenu }