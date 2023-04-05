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
    isSaveButtonDisabled: true,
  };

  onChange = (event) => {
    const { name, value, type, checked } = event.target;
    // console.log(name, value, type, checked);
    const newState = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newState }, this.validation);
  };

  validation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const isSaveButtonDisabled = !cardName || !cardDescription || !cardImage || !cardRare;

    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const MAX_ATTR = 90;
    const MAX_SUM_ATTR = 210;

    if (
      sum > MAX_SUM_ATTR
      || Number(cardAttr1) < 0
      || Number(cardAttr2) < 0
      || Number(cardAttr3) < 0
      || Number(cardAttr1) > MAX_ATTR
      || Number(cardAttr2) > MAX_ATTR
      || Number(cardAttr3) > MAX_ATTR
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled });
    }
  };

  render() {
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          values={ this.state }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
