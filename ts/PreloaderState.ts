namespace MyGame {

	export class PreloaderState extends Phaser.State {

		preload(): void {
			this.game.load.image("logo", "assets/logo.jpg");
		}

		create(): void {
			this.game.state.start("MenuState");
		}
	}
}