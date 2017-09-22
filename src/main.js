import 'phaser';
import BootScene from './scenes/Boot';
import BootMenu from './scenes/BootMenu';
import PlayerScene from './scenes/examples/PlayerScene';
import MushroomScene from './scenes/examples/MushroomScene';


let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 768,
    height: 432,
    scene: [
      BootScene,
      BootMenu,
      MushroomScene,
      PlayerScene
    ]
};

let game = new Phaser.Game(config);
