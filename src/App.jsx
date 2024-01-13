import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import NotFound from 'pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
const RestrictedRoute = lazy(() =>
  import('components/RestrictedRoute/RestrictedRoute')
);
const PrivateRoute = lazy(() => import('components/PrivateRoute/PrivateRoute'));
const MenuBar = lazy(() => import('./components/MenuBar/MenuBar'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }

  return (
    <div sx={{ backgroundColor: '#f9f9f9', height: '100vh', width: '100vw' }}>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<MenuBar />}>
            <Route
              index
              element={<PrivateRoute component={Contacts} path="/login" />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={Login} path="/" />}
            />
            <Route
              path="register"
              element={<RestrictedRoute component={Register} path="/" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
