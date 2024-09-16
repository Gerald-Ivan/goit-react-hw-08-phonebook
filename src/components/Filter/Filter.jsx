import PropTypes from 'prop-types';
import css from './filter.module.css';
import { Input } from '@chakra-ui/react'

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
  
      <Input
       maxW="lg"
       borderWidth={1}
       borderRadius="md"
       boxShadow="lg"
      mb="30"
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};