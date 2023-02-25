import { Contact } from 'components/Contact';

export const ContactList = ({ filteredArr }) => (
  <>
    <ul>
      {filteredArr.map(({ name, id, number }) => (
        <li key={id}>
          <Contact name={name} number={number}></Contact>
        </li>
      ))}
    </ul>
  </>
);
