namespace MyGame {

    export class PhaserGame extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, "content", undefined);

            this.state.add("BootState", BootState);
            this.state.add("PreloaderState", PreloaderState);
            this.state.add("MenuState", MenuState);
            this.state.add("GameState", GameState);

            this.state.start("BootState");
        }

    }

}

// when the page has finished loading, create our game
window.onload = () => {
    const game = new MyGame.PhaserGame();
};