// import 'normalize.css/normalize.css';
// import 'styles/App.css';
import React, { Component } from 'react';

import GameStage from './GameStage';

class App extends Component {
  render() {
    return (
      <div>
        <GameStage
          width={500}
          height={500}
        />
      </div>
    );
  }
}
export default App;
