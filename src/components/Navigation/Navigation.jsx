import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch} from 'react-redux'

import { selectIsLoggedIn } from 'redux/auth/selectors'

const Navigation = () => {

  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogin && <NavLink to="/contacts" > Contacts </NavLink> }
    </nav>
  );
}

export { Navigation }