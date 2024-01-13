import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import styled from 'styled-components';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

const StyledLink = styled(NavLink)`
  color: white;
  &.active {
    color: #d32f2f;
  }
`;

const MenuBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <>
      <AppBar
        sx={{
          marginBottom: '20px',
        }}
        position="relative"
        component="nav"
      >
        <Container
          sx={{
            padding: 0,
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {isLoggedIn ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'white',
                }}
              >
                <div>Welcome {userName}</div>
                <StyledLink to="/">CONTACTS</StyledLink>
                <LogoutBtn />
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'white',
                }}
              >
                <StyledLink to="/login">LOGIN</StyledLink>
                <StyledLink to="/register">REGISTER</StyledLink>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense>
        <Container
          sx={{
            '@media (min-width: 600px)': {
              padding: '0 48px',
            },
          }}
        >
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default MenuBar;
