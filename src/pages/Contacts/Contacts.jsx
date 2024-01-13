import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ElementsList from '../../components/ElementsList/ElementsList';
import { Typography, Box } from '@mui/material';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '300px' }}>
        <Typography variant="h4">Phonebook</Typography>
        <ContactForm />
        <Typography variant="h4">Contact</Typography>
        <Filter />
        {isLoading && error && <b>Loading...</b>}
        <ElementsList />
      </Box>
    </main>
  );
};

export default Contacts;
