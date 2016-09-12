export default {
  newKeyHandler(keyCode) {
    const key = {
      code   : keyCode,
      isDown : false,
      isUp   : true,
      downHandler(event) {
        console.info('**down ', this.code, event.keyCode);
        if (event.keyCode === this.code) {
          if (this.isUp && this.press) this.press();
          if (this.longPress) this.longPress();
          this.isDown = true;
          this.isUp = false;
        }
        event.preventDefault();
      },
      upHandler(event) {
        console.info('**up ', this.code, event.keyCode);
        if (event.keyCode === this.code) {
          if (this.isDown && this.release) this.release();
          this.isDown = false;
          this.isUp = true;
        }
      },
      press() {
      },
      longPress() {
      },
      release() {
      },
    };

    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );

    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );

    return key;
  }
}
