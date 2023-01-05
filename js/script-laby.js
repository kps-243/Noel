document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // créer un canvas et obtenir son contexte de dessin
    const canvas = document.querySelector('#jeu');
    const ctx = canvas.getContext('2d');
    const Iclef = new Image();
    Iclef.src = "./images/png/clef.png";
    const Evictoire = document.querySelector('#victoire');
    const suivant = document.querySelector('#suivant');
    const bulle = document.querySelector('#bulle');



    var clef = 0;
    var victoire = 0;
    var dialogue = 0;

    let playerX = 1; // position initiale du joueur en x
    let playerY = 0; // position initiale du joueur en y

    document.querySelector('#btn').addEventListener('click', () => {
        playerX = 1;
        playerY = 0;
        Evictoire.classList.add('caché');
        clef = 0;
        victoire = 0;
        maze[12][4] = 3;
    });

    suivant.addEventListener('click', () => {
        
        if (dialogue == 0) {
            canvas.classList.remove('caché');
            dialogue = 1;
        }
    });

    document.addEventListener('keydown', (event) => {
        if (dialogue !== 0) {
            if (victoire == 0) {
                if (event.code === 'ArrowUp') {
                    // vérifie si le mouvement vers le haut est valide
                    if (maze[playerY - 1][playerX] !== 1) {
                        playerY--;
                    }
                } else if (event.code === 'ArrowDown') {
                    // vérifie si le mouvement vers le bas est valide
                    if (maze[playerY + 1][playerX] == 2) {
                        clef = 1;
                        playerY++;
                    }
                    else if (maze[playerY + 1][playerX] == 0) {
                        playerY++;
                    }
                } else if (event.code === 'ArrowLeft') {
                    // vérifie si le mouvement vers la gauche est valide
                    if (maze[playerY][playerX - 1] == 4) {
                        victoire = 1;
                        playerX--;
                    }
                    else if (maze[playerY][playerX - 1] == 0) {
                        playerX--;
                    }
                } else if (event.code === 'ArrowRight') {
                    // vérifie si le mouvement vers la droite est valide
                    if (maze[playerY][playerX + 1] !== 1) {
                        playerX++;
                    }
                }
            }
            else {
                Evictoire.classList.remove('caché');
            }
        }
    });

    function drawMaze(maze, cellSizeX, cellSizeY) {
        // dessinez le labyrinthe comme dans l'étape 4
        for (let y = 0; y < maze.length; y++) {
            for (let x = 0; x < maze[y].length; x++) {
                if (maze[y][x] === 1) {
                    ctx.fillStyle = '#58b3f4';
                    ctx.fillRect(x * cellSizeX, y * cellSizeY, cellSizeX, cellSizeY);
                }
                if (maze[y][x] === 3 && clef == 1) {
                    maze[y][x] = 0;
                }
                if (maze[y][x] === 3 && clef == 0) {
                    ctx.fillStyle = 'orange';
                    ctx.fillRect(x * cellSizeX, y * cellSizeY, cellSizeX, cellSizeY);
                }
                if (maze[y][x] === 2 && clef == 0) {
                    ctx.arc(x * cellSizeX + cellSizeX / 2, y * cellSizeY + cellSizeY / 2, 4, 0, 2 * Math.PI);
                    ctx.fillStyle = 'orange';
                    ctx.fill();
                    // Iclef.onload = () => {
                    //     ctx.drawImage(Iclef, x, y);
                    // }
                }
            }
        }
    }

    function drawPlayer() {
        // dessinez un cercle pour représenter le joueur à la position actuelle du joueur
        ctx.beginPath();
        ctx.arc(playerX * cellSizeX + cellSizeX / 2, playerY * cellSizeY + cellSizeY / 2, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    const cellSizeX = 20; // taille de chaque case en pixels
    const cellSizeY = 11; // taille de chaque case en pixels
    const maze = [
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
        [4, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 3, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    // définissez l'intervalle de temps en milisecondes (par exemple, 60 FPS = 1000 / 60 = 16.66 ms)
    const interval = 1000 / 60;

    function update() {
        // mettez à jour les éléments du jeu ici (par exemple, la position des ennemis)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // définissez la fonction de rendu qui sera exécutée à chaque frame
    function render() {
        // dessinez tous les éléments du jeu ici (labyrinthe, joueur, ennemis, etc.)
        drawMaze(maze, cellSizeX, cellSizeY);
        drawPlayer();
    }

    function loop() {
        update();
        render();
    }

    // définissez la fonction de boucle de jeu qui met à jour et rend tous les éléments du jeu

    // lancez la boucle de jeu en utilisant setInterval
    setInterval(loop, interval);
});