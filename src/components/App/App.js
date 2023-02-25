import { PhonebookForm } from 'components/PhonebookForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { Component } from 'react';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  // contacts: [],
  name: '',
  number: '',
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

  reset = () => {
    this.setState(prevState => ({ ...prevState, name: '', number: '' }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <>
        <PhonebookForm
          onChange={this.handleChange}
          onChangeName={this.handleChangeName}
          reset={this.reset}
          name={name}
          number={number}
          filter={filter}
          contacts={contacts}
        />

        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}
