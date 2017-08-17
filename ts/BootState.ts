namespace MyGame {

	export class BootState extends Phaser.State {

		preload(): void { }

		create(): void {
			// Use this if you don't need multitouch
			this.input.maxPointers = 1;

			// Desktop specific settings go here
			if (this.game.device.desktop) {
			}

			this.game.state.start("PreloaderState", true, false);
		}
	}
}