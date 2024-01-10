import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    return dispatch(logout());
  };
  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutBtn;
