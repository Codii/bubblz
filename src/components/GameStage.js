import React, { Component } from 'react';

import { Stage, Sprite, Text } from 'react-pixi';

import keyboardUtils from '../game/utils/keyboard';

const assetPath = function (filename) {
  return require(`../../assets/${filename}`);
};

export default class GameStage extends Component {
  state = {
    loopCount : 0,
    marioPosX : 0,
    marioPosY : 0,
  };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.loop = this.loop.bind(this);
    this.loopId = null;
  }

  loop() {
    this.play();
    window.requestAnimationFrame(this.loop);
  }

  setup() {
    const upkeyHandler = keyboardUtils.newKeyHandler(38);
    const downkeyHandler = keyboardUtils.newKeyHandler(40);

    upkeyHandler.longPress = () => {
      console.info('**Up pressed');
      this.setState({
        ...this.state,
        marioPosY : this.state.marioPosY + 10,
      })
    };

    downkeyHandler.longPress = () => {
      this.setState({
        ...this.state,
        marioPosY : this.state.marioPosY - 10,
      })
    };
  }

  componentDidMount() {
    this.setup();
    this.loopId = this.loop();
  }

  play() {
    const newLoopCount = this.state.loopCount + 1;
    this.setState({
      ...this.state,
      marioPosX : Math.abs(Math.sin(newLoopCount / 90) * 500),
      loopCount : newLoopCount,
    });
  }

  render() {
    return (
      <Stage
        className="GameStage"
      >
        <Sprite
          image={assetPath('mario-sprite.png')}
          x={this.state.marioPosX}
          y={this.state.marioPosY}
          rotation={0}
        />
      </Stage>
    );
  }
}
