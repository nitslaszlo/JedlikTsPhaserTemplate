namespace MyGame {

    export class GameState extends Phaser.State {

        private mySprite: Phaser.Sprite;

        preload(): void {
            this.game.load.image("logo", "assets/phaser-logo-small.png");
        }

        create(): void {
            this.mySprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
            this.mySprite.anchor.setTo(0.5);
        }

        update(): void {
            this.mySprite.rotation += 0.01;
        }

    }
}