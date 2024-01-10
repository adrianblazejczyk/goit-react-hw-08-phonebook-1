import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    return dispatch(login({ email, password }));
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <form className={css.login} onSubmit={handleLogin}>
        <label className={css.label}>Email:</label>
        <input type="email" name="email" />
        <label className={css.label}>Password:</label>
        <input type="password" name="password" autoComplete="off" />
        <button className={css.btn} type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
