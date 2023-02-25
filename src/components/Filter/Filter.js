import { FilterBox, Label, Search } from './Filter.styled';

export const Filter = ({ filter, onChangeName }) => (
  <FilterBox>
    <Label>
      Find contacts by name
      <Search
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={filter}
        onChange={onChangeName}
      ></Search>
    </Label>
  </FilterBox>
);
