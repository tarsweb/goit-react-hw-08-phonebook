import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

import debounce from 'lodash.debounce';

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
// import { Label } from './Filter.styled';

const Filter = () => {

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  }

  const debouncedChangeFilter = debounce(handleChangeFilter, 500);

  return (
    // <Label>
    //   Find contact by name
    //   <input type='text' onChange={debouncedChangeFilter} />
    // </Label>
    <TextField
      // label="Find contact by name"
      type="text"
      onChange={debouncedChangeFilter}
      placeholder="Find contact by name"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export { Filter }