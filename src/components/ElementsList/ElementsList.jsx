import ElementItem from '../ElementItem/ElementItem';
import { selectFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ElementsList = () => {
  const filter = useSelector(selectFilteredContacts);

  const list = filter.map(contact => (
    <ElementItem key={contact.id} contact={contact} />
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default ElementsList;
