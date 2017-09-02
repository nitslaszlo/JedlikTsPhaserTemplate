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
    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BootState.prototype.preload = function () { };
        BootState.prototype.create = function () {
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
        };
        BootState.prototype.gameResized = function (manager, bounds) {
            var scale = Math.min(window.innerWidth / this.game.width, window.innerHeight / this.game.height);
            manager.setUserScale(scale, scale, 0, 0);
        };
        return BootState;
    }(Phaser.State));
    MyGame.BootState = BootState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameState.prototype.preload = function () { };
        GameState.prototype.create = function () {
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
            logo.anchor.setTo(0.5, 0.5);
            logo.scale.setTo(1.0, 1);
            logo.position.x = 0;
        };
        GameState.prototype.update = function () {
        };
        return GameState;
    }(Phaser.State));
    MyGame.GameState = GameState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var MenuState = (function (_super) {
        __extends(MenuState, _super);
        function MenuState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuState.prototype.preload = function () {
        };
        MenuState.prototype.create = function () {
            this.game.state.start("GameState");
        };
        MenuState.prototype.update = function () {
        };
        return MenuState;
    }(Phaser.State));
    MyGame.MenuState = MenuState;
})(MyGame || (MyGame = {}));
var MyGame;
(function (MyGame) {
    var PhaserGame = (function (_super) {
        __extends(PhaserGame, _super);
        function PhaserGame() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, "content", undefined) || this;
            _this.state.add("BootState", MyGame.BootState);
            _this.state.add("PreloaderState", MyGame.PreloaderState);
            _this.state.add("MenuState", MyGame.MenuState);
            _this.state.add("GameState", MyGame.GameState);
            _this.state.start("BootState");
            return _this;
        }
        return PhaserGame;
    }(Phaser.Game));
    MyGame.PhaserGame = PhaserGame;
})(MyGame || (MyGame = {}));
// when the page has finished loading, create our game
window.onload = function () {
    var game = new MyGame.PhaserGame();
};
var MyGame;
(function (MyGame) {
    var PreloaderState = (function (_super) {
        __extends(PreloaderState, _super);
        function PreloaderState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PreloaderState.prototype.preload = function () {
            this.game.load.image("logo", "assets/logo.jpg");
        };
        PreloaderState.prototype.create = function () {
            this.game.state.start("MenuState");
        };
        return PreloaderState;
    }(Phaser.State));
    MyGame.PreloaderState = PreloaderState;
})(MyGame || (MyGame = {}));
//# sourceMappingURL=game.js.map