import { addContact } from '../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // próbowałem logie newContact przenieś do pliku selektors ale miałem problem
  // z eventem który przekazuje i wszystko zaczeło mi sie sypać

  const newContact = event => {
    event.preventDefault();
    const name = event.currentTarget['name'].value;
    const number = event.currentTarget['number'].value;

    if (contacts.some(check => check.name === name)) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.some(check => check.number === number)) {
      alert(`This number ${number} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
    event.currentTarget.reset();

    return;
  };

  return (
    <>
      <form onSubmit={newContact}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
