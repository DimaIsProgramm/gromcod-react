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
  outLeaveCoral = () => {
    this.setState({
      text: null,
    });
  };

  onEnterAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };
  outLeaveAqua = () => {
    this.setState({
      text: null,
    });
  };

  onEnterBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };
  outLeaveBisque = () => {
    this.setState({
      text: null,
    });
  };

  render() {
    return (
      <div>
           <div class="picker__title">{this.state.text}</div>
        <div>
          <button
            class="picker__button picker__button_coral"
            onMouseEnter={this.onEnterCoral}
            onMouseLeave={this.outLeaveCoral}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            onMouseEnter={this.onEnterAqua}
            onMouseLeave={this.outLeaveAqua}
          ></button>
          <button
            class="picker__button picker__button_bisque"
            onMouseEnter={this.onEnterBisque}
            onMouseLeave={this.outLeaveBisque}
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
