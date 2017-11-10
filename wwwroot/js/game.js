var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyGame;
(function (MyGame) {
    var PhaserGame = /** @class */ (function (_super) {
        __extends(PhaserGame, _super);
        function PhaserGame() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, "content", undefined) || this;
            _this.state.add("GameState", MyGame.GameState);
            _this.state.start("GameState");
            return _this;
        }
        return PhaserGame;
    }(Phaser.Game));
    MyGame.PhaserGame = PhaserGame;
})(MyGame || (MyGame = {}));
window.onload = function () {
    var game = new MyGame.PhaserGame();
};
var MyGame;
(function (MyGame) {
    var GameState = /** @class */ (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.preload = function () {
            this.game.load.image("logo", "assets/phaser-logo-small.png");
        };
        GameState.prototype.create = function () {
            this.mySprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
            this.mySprite.anchor.setTo(0.5, 0.5);
        };
        GameState.prototype.update = function () {
            this.mySprite.rotation += 0.01;
        };
        return GameState;
    }(Phaser.State));
    MyGame.GameState = GameState;
})(MyGame || (MyGame = {}));
//# sourceMappingURL=game.js.map