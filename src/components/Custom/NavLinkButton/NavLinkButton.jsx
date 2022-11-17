import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import { Button } from '@mui/material';

const NavLinkButton = (props) => {
  const {to, end, children, ...otherProps} = props;

  const resolvedPath = useResolvedPath(to);
  
  //use location
  //const location = useLocation();
  // const variant = resolvedPath.pathname === location.pathname ? "contained" : "outlined"

  //use match
  const variant = useMatch(resolvedPath.pathname) ? "contained" : "outlined";

  return <Button variant={variant} component={NavLink} to={to} end={end} {...otherProps} > {children} </Button>

}

export { NavLinkButton }