import { useDispatch } from 'react-redux'

import { useAuth } from 'hooks'

import { logout } from 'redux/auth/operations'

import Box from "components/Box"

import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

const UserMenu = () => {
  const dispatch = useDispatch();

  const {user: {name}} = useAuth();

  return (
    <Box display="flex" alignItems="center" gridGap="8px">
      <>
        <PersonIcon color="primary" size="small"/>
        <Typography display='inline-flex' gap='8px'>
          {name}
        </Typography>
      </>
      <Button variant="outlined" size="small" type="button" onClick={() => dispatch(logout())}> Logout </Button>
    </Box>
  )
}

export { UserMenu }