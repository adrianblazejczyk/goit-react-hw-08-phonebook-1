import { useDispatch, useSelector } from 'react-redux';
import css from './Register.module.css';
import { register } from '../../redux/auth/operations';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const name = event.currentTarget.username.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    return dispatch(register({ name, email, password }));
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <form className={css.register} onSubmit={handleRegister}>
        <label className={css.label}>User name:</label>
        <input name="username" />
        <label className={css.label}>Email:</label>
        <input type="email" name="email" />
        <label className={css.label}>Password:</label>
        <input type="password" name="password" autoComplete="off" />
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
