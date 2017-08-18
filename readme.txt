HTML5 játékfejlesztés VS Code + Node.js + TypeScript + Phaser
==============================================================
1.  Node.js letöltése, telepítése:
    https://nodejs.org/en/download/
2.  Node.js command prompt, globális Node.js csomagok telepítése:
    "npm install -g typescript"
    "npm install -g typings"
    "npm install -g tslint"
    parancsokkal
3.  Git for windows telepítése:
    https://git-for-windows.github.io/
4.  Visual Studio Code telepítése
    https://code.visualstudio.com/docs/setup/setup-overview
5.  Visual Studio Extensions (Ctrl-Shift-X) telepítése:
     - Debugger for Chrome
     - TSLint
6.  https://github.com/nitslaszlo/JedlikTsPhaserTemplate.git
    JedlikTsPhaserTemplate-master.zip letöltése, kicsomagolása
    vagy:
    CMD ablak
    "cd projekt_szülőmappa"
    "git clone https://github.com/nitslaszlo/JedlikTsPhaserTemplate.git"
7.  JedlikTsPhaserTemplate-master mappa átnevezése tetszőlegesen
    Átnevezett mappa helyi menüből: Open with Code
8.  VS Code új terminál ablak aktiválása: Ctrl-Shift-ö (vagy a "+" ikon)
    Node lokális modulok telepítése:
    terminál ablakból "npm install" paraccsal
    (phaser-ce és node-static modulokat telepíti, lsd.: package.json)
9.  ts mappában typescript források létrehozása, szerkesztése
10. Ctrl-Shift-B *.ts források átalakítása JavaScript-re (wwwroot/js/game.js)
    (watch üzemmód, az első fordítás után már automatikus a fordítás)
    (VS Code bezárása előtt Ctrl-C -vel a task "kilövése" ajánlott)
11. VS Code új terminál ablak aktiválása: Ctrl-Shift-ö (vagy a "+" ikon)
    Node.js webszerver indítása:
    terminál ablakból "node server.js" paranccsal
    (VS Code bezárása előtt Ctrl-C -vel a task "kilövése" ajánlott)
12. Chrome: http://localhost:8080/ 
    vagy debug üzemmód: F5 -el

Hasznos linkek:
===============
http://www.phaser.io/
https://github.com/photonstorm/phaser
https://photonstorm.github.io/phaser-ce/
http://www.html5gamedevs.com/forum/14-phaser/
http://pgl.ilinov.eu/
https://git-scm.com/book/en/v2
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

Verziókezelés Git-el:
=====================
1. Github account létrehozása:
   https://github.com/
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:
   pl.: GitHub asztali alkalmazással vagy github.com-on
   (JedlikTsPhaserTemplate a repository neve a pédában)
3. Visual Studio Code indítása - project betöltése
4. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G
   majd "Initialize Repository"-ra kattínt (felül)
5. Remote repository megadása terminál (Ctr-Shift-ö) ablakból
   "git remote add origin https://github.com/nitslaszlo/JedlikTsPhaserTemplate.git"
6. ".gitignore" fájl létrehozása:
   Ctrl-N -el új fájl létrehozása
   A fájl tartalma: node_modules
   (További mappák és fájlok megadhatóak, melyek nem kerülnek "feltöltésre")
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
7. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el

   

Verziók lekérdezése terminálablakból:
=====================================
TypeScript: tsc -v
Node.js: node -v
npm: npm -v
Phaser: npm v phaser-ce