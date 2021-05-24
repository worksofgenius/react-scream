import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AHHHHHHHHHHHH!');
  }

  render() {
    return (
      <div>
        <h1>
          How are you feeling today?
        </h1>
        <button onClick={this.scream}>
          Reveal
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));
