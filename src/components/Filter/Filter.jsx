import { useDispatch } from 'react-redux';
import { filterUserByName } from 'redux/contacts/filterSlice';
import { CssTextField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <CssTextField
      type="text"
      id="filter"
      name="filter"
      label="Find contacts by name"
      size="small"
      onChange={evt =>
        dispatch(filterUserByName(evt.target.value.toLowerCase()))
      }
    />
  );
};
