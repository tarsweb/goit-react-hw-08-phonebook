import { Navigate } from 'react-router-dom';

import { useSelector} from 'react-redux'
import { selectIsLoggedIn } from 'redux/auth/selectors'

const RestrictedRoute =({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  return isLogin ? <Navigate to= {redirectTo} /> : Component
}

export { RestrictedRoute }