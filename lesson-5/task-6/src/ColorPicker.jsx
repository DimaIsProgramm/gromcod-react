import React, { Component } from 'react';

const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onEnterCoral = () => {
    this.setState({
      text: 'Coral',
    });
  };
  outLeaveCoral = () => {
    this.setState({
      text: '',
    });
  };

  onEnterAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };
  outLeaveAqua = () => {
    this.setState({
      text: '',
    });
  };

  onEnterBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };
  outLeaveBisque = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div class="picker__title">{this.state.text}</div>
        <div>
          <button
            class="picker__button picker__button_coral"
            style={{ backgroundColor: CORAL }}
            onMouseEnter={this.onEnterCoral}
            onMouseLeave={this.outLeaveCoral}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            style={{ backgroundColor: AQUA }}
            onMouseEnter={this.onEnterAqua}
            onMouseLeave={this.outLeaveAqua}
          ></button>
          <button
            class="picker__button picker__button_bisque"
            style={{ backgroundColor: BISQUE }}
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
