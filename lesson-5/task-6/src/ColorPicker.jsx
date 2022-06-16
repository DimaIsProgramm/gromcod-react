import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  onEnterCoral = () => {
    this.setState({
      text: 'Coral',
    });
  };

  onEnterAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };

  onEnterBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };

  outLeave = () => {
    this.setState({
      text: null,
    });
  };
  render() {
    return (
      <div>
        {this.state.text && <div className="picker__title">{this.state.text}</div>}
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.onEnterCoral}
            onMouseLeave={this.outLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onEnterAqua}
            onMouseLeave={this.outLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onEnterBisque}
            onMouseLeave={this.outLeave}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// algo
// навесить 2 обработчика на кнопку
// при попадании курсора в квадрат показивать текст
// при покидании кнопки очищать текст
