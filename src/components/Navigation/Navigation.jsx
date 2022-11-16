import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';

import { Button } from '@mui/material';



const Navigation = () => {

  const {isLoggedIn} = useAuth();

  return (
    <nav>
      <Button variant="contained" component={NavLink} to="/" end >Home</Button>
      {isLoggedIn && <Button variant="outlined" component={NavLink} to="/contacts" > Contacts </Button> }
    </nav>
  );
}

export { Navigation }