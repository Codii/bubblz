import React, { Component } from 'react';

import pixi from 'pixi.js';

import { Stage, Sprite, Text } from 'react-pixi';

const assetPath = function (filename) {
  return require(`../../assets/${filename}`);
};

export default class GameStage extends Component {
  state = {
    loopCount : 0,
    marioPosX : 0,
  };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.loop = this.loop.bind(this);
    this.loopId = null;
  }

  loop() {
    this.play();
    requestAnimationFrame(this.loop);
  }

  componentDidMount() {
    this.loopId = this.loop();
  }

  play() {
    const newLoopCount = this.state.loopCount + 1;
    this.setState({
      ...this.state,
      marioPosX : Math.abs(Math.sin(newLoopCount / 50) * 500),
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
          y={0}
          rotation={0}
        />
      </Stage>
    );
  }
}
