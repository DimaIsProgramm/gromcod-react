import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };
  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="app">
        <Expand
          title="Awsome title"
          onClose={this.hideContent}
          isOpen={this.state.isOpen}
          onOpen={this.showContent}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
