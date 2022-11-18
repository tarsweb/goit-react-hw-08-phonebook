import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

import debounce from 'lodash.debounce';

import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  }

  const debouncedChangeFilter = debounce(handleChangeFilter, 500);

  return (
    <TextField
      type="text"
      onChange={debouncedChangeFilter}
      placeholder="Find contact by name"
      variant="standard"
      sx={{ flexGrow : '1'}}
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