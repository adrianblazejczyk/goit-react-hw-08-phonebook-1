import ElementItem from '../ElementItem/ElementItem';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';

const ElementsList = () => {
  const filter = useSelector(selectFilteredContacts);

  const list = filter.map(contact => (
    <ElementItem key={contact.id} contact={contact} />
  ));
  return (
    <>
      <List>{list}</List>
    </>
  );
};

export default ElementsList;
