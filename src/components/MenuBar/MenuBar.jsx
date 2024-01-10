import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import styled from 'styled-components';
import css from './MenuBar.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

const MenuBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <>
      <header className={css.menuBar}>
        {isLoggedIn ? (
          <>
            <StyledLink to="/">Contacts</StyledLink>
            <div>Welcome {userName}</div>
            <LogoutBtn />
          </>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MenuBar;
