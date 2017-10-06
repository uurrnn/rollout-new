class BootMenu extends Phaser.Scene {
  constructor () {
    super({
      key: 'BootMenu'
    })
  }

  create () {
    let config = {
      x: 100,
      y: 100,
      text: 'Rollout',
      style: {
        font: '64px Arial',
        fill: '#ff00ff',
        align: 'center',
        stroke: '#ffffff',
        strokeThickness: '4'
      }
    }
    this.make.text(config)

    config = {
      x: 100,
      y: 180,
      text: '[A] Play',
      style: {
        font: '48px Arial',
        fill: '#88aa88',
        align: 'center'
      }
    }
    this.make.text(config)

    this.input = [
      {key: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A), scene: 'PlayerScene'}
    ]
  }

  update () {
    for (let input of this.input) {
      if (input.key.isDown) {
        this.scene.start(input.scene)
      }
    }
  }
}

export default BootMenu
