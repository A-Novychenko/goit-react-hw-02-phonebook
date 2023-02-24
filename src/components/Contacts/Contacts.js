export const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, id }) => (
      <li key={id}>
        <span>{name}</span>
      </li>
    ))}
  </ul>
);
