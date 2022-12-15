document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // créer un canvas et obtenir son contexte de dessin
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    // définir la position initiale du personnage
    var x = 0;
    var y = 0;

    // définir la vitesse de déplacement du personnage
    var speed = 10;

    // créer un tableau qui représente le labyrinthe
    // 1 = mur, 0 = chemin
    var maze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    // dessiner le labyrinthe dans le canvas
    function drawMaze() {
        // parcourir chaque élément du labyrinthe
        for (var row = 0; row < maze.length; row++) {
            for (var col = 0; col < maze[row].length; col++) {
                // si l'élément est un mur, dessiner un carré noir
                if (maze[row][col] == 1) {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(col * 50, row * 50, 50, 50);
                }
            }
        }
    }

    // dessiner le personnage dans le canvas
    function drawCharacter() {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, 50, 50);
    }

    // dessiner le labyrinthe et le personnage dans le canvas
    function draw() {
        // effacer le contenu du canvas
        ctx.clearRect
    };

    drawMaze();
    drawCharacter();
});
