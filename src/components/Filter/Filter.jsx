import { useDispatch } from 'react-redux';
import { setFilterStatus } from '../../redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filtered = newFilterStatus => {
    const filterValue = newFilterStatus.target.value;
    dispatch(setFilterStatus(filterValue));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={filtered} />
      <br />
    </>
  );
};

export default Filter;
