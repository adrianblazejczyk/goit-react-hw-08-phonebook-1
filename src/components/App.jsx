import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ElementsList from './ElementsList/ElementsList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading && error && <b>Loading...</b>}
      <ElementsList />
    </>
  );
};

export default App;
