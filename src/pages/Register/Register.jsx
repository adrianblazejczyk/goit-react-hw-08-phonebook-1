import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Helmet } from 'react-helmet-async';
import { Button, Box, TextField, FormControl } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const name = event.currentTarget.username.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    return dispatch(register({ name, email, password }));
  };

  return (
    <main>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form onSubmit={handleRegister}>
        <FormControl sx={{ display: 'flex', gap: '20px', minWidth: '300px' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <PersonIcon fontSize="large" />
            <TextField name="username" variant="standard" label="User Name" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <EmailIcon fontSize="large" />
            <TextField
              type="email"
              name="email"
              variant="standard"
              label="Email"
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <LockIcon fontSize="large" />
            <TextField
              type="password"
              name="password"
              variant="standard"
              label="Password"
              autoComplete="off"
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
              Register
            </Button>
          </Box>
        </FormControl>
      </form>
    </main>
  );
};

export default Register;
