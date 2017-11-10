namespace MyGame {

    export class PhaserGame extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, "content", undefined);
            this.state.add("GameState", GameState);
            this.state.start("GameState");
        }

    }

}

window.onload = () => {
    const game = new MyGame.PhaserGame();
};