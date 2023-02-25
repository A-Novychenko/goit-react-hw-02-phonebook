import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ filteredArr, onDelete }) => (
  <>
    <List>
      {filteredArr.map(({ name, id, number }) => (
        <Item key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          ></Contact>
        </Item>
      ))}
    </List>
  </>
);
