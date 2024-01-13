import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
//import css from './Login.module.css';
import { Helmet } from 'react-helmet-async';
import { Button, TextField, Box, FormControl } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    return dispatch(login({ email, password }));
  };

  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form onSubmit={handleLogin}>
        <FormControl sx={{ display: 'flex', gap: '20px', minWidth: '300px' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <EmailIcon fontSize="large" />
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <LockIcon fontSize="large" />
            <TextField
              type="password"
              name="password"
              label="Password"
              autoComplete="off"
              variant="standard"
            />
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'right', marginTop: '50px' }}
          >
            <Button
              sx={{
                maxWidth: '100px',
                float: 'left',
              }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </form>
    </main>
  );
};

export default Login;
