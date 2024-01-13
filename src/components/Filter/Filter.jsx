import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/contacts/filtersSlice';
import { Box, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();
  const filtered = newFilterStatus => {
    const filterValue = newFilterStatus.target.value;
    dispatch(setFilterStatus(filterValue));
  };

  return (
    <Box sx={{}}>
      <Typography>Find contacts by name</Typography>
      <TextField
        size="small"
        variant="outlined"
        type="text"
        InputProps={{
          endAdornment: <SearchIcon position="end" />,
        }}
        onChange={filtered}
      />
      <br />
    </Box>
  );
};

export default Filter;
