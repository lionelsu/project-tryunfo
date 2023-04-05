import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  };

  onChange = (event) => {
    const { name, value, type, checked } = event.target;
    // console.log(name, value, type, checked);
    const newState = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newState });
  };

  render() {
    return (
      <div>
        <Form
          onInputChange={ this.onChange }
          values={ this.state }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
