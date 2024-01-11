import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ElementsList from '../../components/ElementsList/ElementsList';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contact</h2>
      <Filter />
      {isLoading && error && <b>Loading...</b>}
      <ElementsList />
    </main>
  );
};

export default Contacts;
