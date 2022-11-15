import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

import debounce from 'lodash.debounce';

import { Label } from './Filter.styled';

const Filter = () => {

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  }

  const debouncedChangeFilter = debounce(handleChangeFilter, 500);

  return (
    <Label>
      Find contact by name
      <input type='text' onChange={debouncedChangeFilter} />
    </Label>
  )
}

export { Filter }