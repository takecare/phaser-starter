import 'phaser'
import { MyScene } from './scenes/scene'

const gameConfig = {
  width: 680,
  height: 400,
  scene: MyScene
}

new Phaser.Game(gameConfig)
