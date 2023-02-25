import { Contact } from 'components/Contact';

export const ContactList = ({ filteredArr, onDelete }) => (
  <>
    <ul>
      {filteredArr.map(({ name, id, number }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          ></Contact>
        </li>
      ))}
    </ul>
  </>
);
