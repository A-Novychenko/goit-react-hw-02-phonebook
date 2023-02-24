import { Contacts } from 'components/Contacts';
import { PhonebookForm } from 'components/PhonebookForm';
import { GlobalStyle } from 'constants/GlobalStyles';
import { Component } from 'react';

const INITIAL_STATE = {
  contacts: [],
  name: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleChangeName = (name, value) => this.setState({ [name]: value });

  handleChange = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  reset = () => {
    this.setState(prevState => ({ ...prevState, name: '' }));
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <PhonebookForm
          onChange={this.handleChange}
          onChangeName={this.handleChangeName}
          reset={this.reset}
          value={name}
        />
        <Contacts contacts={contacts} />
        <GlobalStyle></GlobalStyle>
      </>
    );
  }
}
