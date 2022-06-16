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

  onClickCoral = () => {
    this.setState({
      text: 'Coral',
    });
  };
  outClickCoral = () => {
    this.setState({
      text: '',
    });
  };

  onClickAqua = () => {
    this.setState({
      text: 'Aqua',
    });
  };
  outClickAqua = () => {
    this.setState({
      text: '',
    });
  };

  onClickBisque = () => {
    this.setState({
      text: 'Bisque',
    });
  };
  outClickBisque = () => {
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
            onMouseEnter={this.onClickCoral}
            onMouseLeave={this.outClickCoral}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            style={{ backgroundColor: AQUA }}
            onMouseEnter={this.onClickAqua}
            onMouseLeave={this.outClickAqua}
          ></button>
          <button
            class="picker__button picker__button_bisque"
            style={{ backgroundColor: BISQUE }}
            onMouseEnter={this.onClickBisque}
            onMouseLeave={this.outClickBisque}
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
