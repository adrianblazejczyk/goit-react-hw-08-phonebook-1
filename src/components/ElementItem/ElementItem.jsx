import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';

const ElementItem = ({ contact }) => {
  const dispatch = useDispatch();
  const delateContact = () => dispatch(removeContact(contact.id));

  return (
    <li>
      {contact.name} {contact.number}{' '}
      <button type="button" onClick={delateContact}>
        Delete
      </button>
    </li>
  );
};

export default ElementItem;
