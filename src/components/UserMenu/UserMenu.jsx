import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from "redux/auth/selectors"
import { logout } from 'redux/auth/operations'

import Box from "components/Box"

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <Box display="flex" gridGap="8px">
      <p> User : {user.name} </p>
      <button type="button" onClick={() => dispatch(logout())}> Logout </button>
    </Box>
  )
}

export { UserMenu }