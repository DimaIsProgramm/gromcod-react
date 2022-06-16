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
  outLeave = () => {
    this.setState({
      text: null,
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

  render() {
    return (
      <div>
        {this.state.text && <div class="picker__title">{this.state.text}</div>}
        <div>
          <button
            class="picker__button picker__button_coral"
            onMouseEnter={this.onEnterCoral}
            onMouseLeave={this.outLeave}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            onMouseEnter={this.onEnterAqua}
            onMouseLeave={this.outLeave}
          ></button>
          <button
            class="picker__button picker__button_bisque"
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
// навесить 2 оюработчика на кнопку
// при попадании курсора в квадрат показівать текст
// при покидании кнопки очищать текст
