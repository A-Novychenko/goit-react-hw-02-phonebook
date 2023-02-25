import { Component } from 'react';
import { ContactForm } from 'components/ContactForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  // contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChangeName = (name, value) => this.setState({ ...{ [name]: value } });

  handleChange = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  handleFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onChange={this.handleChange} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeName={this.handleChangeName} />
        <ContactList filteredArr={this.handleFilter()} />

        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}
