import React from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  hanldeTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input"
        />
        <button className="btn create-task__btn" onClick={this.hanldeTaskCreate}>
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  value: PropTypes.string,
  onCreate: PropTypes.func.isRequired,
};

CreateTaskInput.defaltProps = {
  value: '',
};

export default CreateTaskInput;

// 1. Take text from input
// 2. Create task with this text
// 3. Add created task to the list
