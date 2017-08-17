namespace MyGame {

	export class MenuState extends Phaser.State {

		preload(): void {
		}

		create(): void {
			this.game.state.start("GameState");
		}
	}
}