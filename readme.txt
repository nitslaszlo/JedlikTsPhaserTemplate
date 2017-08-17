HTML5 játékfejlesztés VS Code + Node.js + TypeScript + Phaser
==============================================================
1.  Node.js letöltése, telepítése:
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális csomagok telepítése:
    npm install -g typescript
    npm install -g typings
    npm install -g tslint
3.  Visual Studio Code telepítése
    https://code.visualstudio.com/docs/setup/setup-overview
4.  Visual Studio Extensions (Ctrl-Shift-X) telepítése:
     - Debugger for Chrome
     - TSLint
5.  https://github.com/nitslaszlo/JedlikTsPhaserTemplate.git
    JedlikTsPhaserTemplate-master.zip letöltése, kicsomagolása
    vagy : git clone https://github.com/nitslaszlo/JedlikTsPhaserTemplate.git
    JedlikTsPhaserTemplate mappa átnevezése tetszőlegesen
6.  Átnevezett mappa helyi menüből: Open with Code
7.  VS Code új terminál ablak aktiválása: Ctrl-Shift-ö (vagy a "+" ikon)
8.  Node lokális modulok telepítése:
    npm install
    (pharser-ce és node-static modulokat telepíti, lsd.: package.json)
9.  ts/*.* mappában typescript források létrehozása, szerkesztése
10. Ctrl-Shift-B források fordítása (ts/*.ts -> wwwroot/js/game.js)
    (watch üzemmód, az első fordítás után már automatikus a fordítás)
    (VS Code bezárása előtt Ctrl-C -vel a task "kilövése" ajánlott)
11. VS Code új terminál ablak aktiválása: Ctrl-Shift-ö (vagy a "+" ikon)
    Node.js webszerver indítása: node server.js
    (VS Code bezárása előtt Ctrl-C -vel a task "kilövése" ajánlott)
12. Chrome: http://localhost:8080/ vagy debug üzemmód: F5

Hasznos linkek:
===============
http://www.phaser.io/
https://github.com/photonstorm/phaser
https://photonstorm.github.io/phaser-ce/
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
http://www.html5gamedevs.com/forum/14-phaser/
http://pgl.ilinov.eu/

Verziók lekérdezése terminálablakból:
=====================================
TypeScript: tsc -v
Node.js: node -v
npm: npm -v
Phaser: npm v phaser-ce
