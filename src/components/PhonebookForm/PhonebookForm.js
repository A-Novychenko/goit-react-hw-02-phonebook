import { Component } from 'react';
import { nanoid } from 'nanoid';

export class PhonebookForm extends Component {
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.props.onChangeName(name, value);
  };

  handleForm = e => {
    e.preventDefault();

    const id = nanoid();
    const {
      elements: {
        name: { value },
      },
    } = e.currentTarget;

    this.props.onChange({ id, name: value });
    this.props.reset();
  };

  render() {
    const { value } = this.props;
    return (
      <form onSubmit={this.handleForm}>
        <label>
          Phonebook
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            value={value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
