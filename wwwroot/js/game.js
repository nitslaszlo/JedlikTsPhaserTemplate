var MyGame;
(function (MyGame) {
    class GameState extends Phaser.State {
        preload() {
            this.game.load.image("logo", "assets/phaser-ce-293.png");
        }
        create() {
            this.mySprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
            this.mySprite.scale.set(0.5);
            this.mySprite.anchor.setTo(0.5);
        }
        update() {
            this.mySprite.rotation += 0.01;
        }
    }
    MyGame.GameState = GameState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    class PhaserGame extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, "content", undefined);
            this.state.add("GameState", MyGame.GameState);
            this.state.start("GameState");
        }
    }
    MyGame.PhaserGame = PhaserGame;
})(MyGame || (MyGame = {}));
window.onload = () => {
    const game = new MyGame.PhaserGame();
};
//# sourceMappingURL=game.js.map