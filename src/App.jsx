import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from 'pages/NotFound/NotFound';
const MenuBar = lazy(() => import('./components/MenuBar/MenuBar'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<MenuBar />}>
            <Route index element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
