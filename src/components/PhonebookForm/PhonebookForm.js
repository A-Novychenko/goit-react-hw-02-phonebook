import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Contacts } from 'components/Contacts';

export class PhonebookForm extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.props.onChangeName(name, value);
  };

  handleForm = e => {
    e.preventDefault();

    const id = nanoid();
    const {
      elements: { name, number },
    } = e.currentTarget;

    this.props.onChange({ id, name: name.value, number: number.value });
    this.props.reset();
  };

  render() {
    const { name, number, filter, contacts } = this.props;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              //   required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <Contacts
          contacts={contacts}
          filter={filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
