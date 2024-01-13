import { useState } from 'react';
import { addContact } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { Button, TextField, Box, FormControl } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [userError, setUserError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleUserError = event => {
    const name = event.target.value;
    const pattern = new RegExp(
      '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$'
    );
    if (!pattern.test(name)) {
      setUserError(true);
    } else {
      setUserError(false);
    }
  };

  const handleNumberError = event => {
    const number = event.target.value;
    const pattern = new RegExp(
      '\\+?\\d{1,4}?[-.\\s]?(\\d{1,3}?)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}'
    );
    if (!pattern.test(number)) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };

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
        <FormControl sx={{ display: 'flex', gap: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <PersonIcon fontSize="large" />
            <TextField
              onChange={handleUserError}
              noValidate
              autoComplete="off"
              label="Name"
              variant="standard"
              error={userError}
              type="text"
              name="name"
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '15px' }}>
            <LocalPhoneIcon fontSize="large" />
            <TextField
              onChange={handleNumberError}
              noValidate
              autoComplete="off"
              label="Number"
              variant="standard"
              type="tel"
              error={numberError}
              name="number"
              required
            />
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'right', margin: '20px 0' }}
          >
            <Button
              sx={{
                maxWidth: '165px',
                float: 'left',
              }}
              variant="contained"
              endIcon={<PersonAddAlt1Icon />}
              type="submit"
            >
              Add contact
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default ContactForm;
