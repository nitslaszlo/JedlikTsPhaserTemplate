namespace MyGame {
    export class BootState extends Phaser.State {

        preload(): void { }

        create(): void {
            // Use this if you don't need multitouch
            this.input.maxPointers = 1;

            // Desktop specific settings go here
            if (this.game.device.desktop) {
            }

            // If the device is not a desktop, so it's a mobile device
            if (!this.game.device.desktop) {
                // Set the type of scaling to 'USER_SCALE'
                this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
                this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
                this.game.scale.setResizeCallback(this.gameResized, this);

                // Add a color to the page, to hide the white borders we might have
                document.body.style.backgroundColor = "#abcd00";

                // Center the game on the screen
                this.game.scale.pageAlignHorizontally = true;
                this.game.scale.pageAlignVertically = true;

                // Apply the scale changes
                this.game.scale.refresh();
            }

            this.game.state.start("PreloaderState");
        }

        gameResized(manager: Phaser.ScaleManager, bounds: Phaser.Rectangle): void {
            const scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);
            manager.setUserScale(scale, scale, 0, 0);
        }
    }
}