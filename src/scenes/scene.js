export class MyScene extends Phaser.Scene {
  preload() {
    this.load.image('snake', 'assets/snake.png')
  }

  create() {
    this.add.image(15, 20, 'snake')
    this.add.text(10, 10, 'Hi there!', { fill: '#0f0' })
  }
}
