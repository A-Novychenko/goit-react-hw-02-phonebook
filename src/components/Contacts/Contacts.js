export const Contacts = ({ contacts }) => (
  <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <span>{`${name}: `}</span>
          <span>{number}</span>
        </li>
      ))}
    </ul>
  </>
);
