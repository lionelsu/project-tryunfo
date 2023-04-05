import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" data-testid="name-input" />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </div>
        <div>
          <label htmlFor="attr1">Attr01</label>
          <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
          <label htmlFor="attr2">Attr02</label>
          <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
          <label htmlFor="attr3">Attr03</label>
          <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        </div>
        <div>
          <label htmlFor="image">Imagem</label>
          <input type="text" name="image" id="image" data-testid="image-input" />
        </div>
        <div>
          <label htmlFor="rare">Raridade</label>
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="trunfo">Super Trybe Trunfo</label>
          <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
          <button data-testid="save-button">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;
