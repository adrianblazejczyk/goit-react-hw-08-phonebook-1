import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';

const ElementItem = ({ contact }) => {
  const dispatch = useDispatch();
  const delateContact = () => dispatch(removeContact(contact.id));

  return (
    <ListItem sx={{ maxWidth: '300px' }} disablePadding>
      <ListItemButton>
        <ListItemText primary={contact.name} secondary={contact.number} />
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={delateContact}
        >
          Delete
        </Button>
      </ListItemButton>
    </ListItem>
  );
};

export default ElementItem;
