import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { Button } from '@mui/material';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    return dispatch(logout());
  };
  return (
    <Button
      variant="outlined"
      size="small"
      type="button"
      onClick={handleLogout}
      color="error"
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
