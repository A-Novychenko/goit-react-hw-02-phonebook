export const Contacts = ({ contacts, filter, onChange }) => {
  const handleFilter = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          //   required
          value={filter}
          onChange={onChange}
        ></input>
      </label>
      <ul>
        {handleFilter.map(({ name, id, number }) => (
          <li key={id}>
            <span>{`${name}: `}</span>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
