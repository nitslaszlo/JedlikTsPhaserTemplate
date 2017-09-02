namespace MyGame {

    export class GameState extends Phaser.State {

        preload(): void {}

        create(): void {
            const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
            logo.anchor.setTo(0.5, 0.5);
            logo.scale.setTo(0.7, 0.7);
        }

        update(): void {
        }
    }
}