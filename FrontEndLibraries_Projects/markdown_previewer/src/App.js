import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <textarea id="editor" type='text' />
        <div id='preview' />
      </div>
    );
  }
}

export default App;
