document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var jeu = 0;

    function alea(tab) { //Mélange d'un tableau
        let i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

    function prefix(tab, x) {//Ajout du préfixe "#btn" ou "#btn2" devant chaque valeur du tableau
        let i;
        let tab2 = [5, 5, 5, 5];
        if (x == 0) {
            for (i = 0; i < 4; i++) {
                tab2[i] = "#btn" + tab[i];
            }
        }
        else {
            for (i = 0; i < 4; i++) {
                tab2[i] = "#btn2" + tab[i];
            }
        }
        return tab2;
    }

    function couleur() { //Association de deux boutons par la couleur

        btn2.src = '../images/png/sapin2.png';
        btn22.src = '../images/png/sapin2.png';

        btn3.src = '../images/png/sapin3.png';
        btn23.src = '../images/png/sapin3.png';

        btn4.src = '../images/png/sapin4.png';
        btn24.src = '../images/png/sapin4.png';
    }

    //Déclaration de deux tableaux
    var tab = [1, 2, 3, 4];
    var tab2 = [4, 3, 2, 1];

    //Mélange des tableaux
    var assoc = alea(tab);
    var assoc2 = alea(tab2);

    // Ajout du préfixe devant les éléments des tableaux

    assoc = prefix(assoc, 0);
    assoc2 = prefix(assoc2, 1);

    // Déclaration des variables en les associant à leur sélecteur HTML aléatoire

    var btn1 = document.querySelector(assoc[0]);
    var btn2 = document.querySelector(assoc[1]);
    var btn3 = document.querySelector(assoc[2]);
    var btn4 = document.querySelector(assoc[3]);

    var btn21 = document.querySelector(assoc2[0]);
    var btn22 = document.querySelector(assoc2[1]);
    var btn23 = document.querySelector(assoc2[2]);
    var btn24 = document.querySelector(assoc2[3]);

    //ajout des couleurs sur les boutons
    couleur();

    //Ajout d'un curseur personnalisé qui suit la souris
    const curseur = document.querySelector("#curseur");

    //déctection des paires au clic

    var actif = 0;
    var victoire = 0;
    var bordure = '';

    btn1.addEventListener('click', () => {
        actif = 1;
        curseur.style.display = "block";
        bordure = '#ff0200';
    });

    btn21.addEventListener('click', () => {
        if (actif == 1) {
            btn1.style.border = '0px';
            btn21.style.border = '0px';
            victoire++;
            curseur.style.display = "none";
            btn1.style.transform = "scale(0.5)";
            btn21.style.transform = "scale(0.5)";
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#rejouer').style.display = 'block';
        }
    });

    btn2.addEventListener('click', () => {
        actif = 2;
        curseur.style.display = "block";
        bordure = '#2f39ec';
    });

    btn22.addEventListener('click', () => {
        if (actif == 2) {
            btn2.style.border = '0px';
            btn22.style.border = '0px';
            victoire++;
            curseur.style.display = "none";
            btn2.style.transform = "scale(0.5)";
            btn22.style.transform = "scale(0.5)";
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#rejouer').style.display = 'block';
        }
    });

    btn3.addEventListener('click', () => {
        actif = 3;
        curseur.style.display = "block";
        bordure = '#4af305';
    });

    btn23.addEventListener('click', () => {
        if (actif == 3) {
            btn3.style.border = '0px';
            btn23.style.border = '0px';
            victoire++;
            curseur.style.display = "none";
            btn3.style.transform = "scale(0.5)";
            btn23.style.transform = "scale(0.5)";
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#rejouer').style.display = 'block';
        }
    });

    btn4.addEventListener('click', () => {
        actif = 4;
        curseur.style.display = "block";
        bordure = '#ffe701';
    });

    btn24.addEventListener('click', () => {
        if (actif == 4) {
            btn4.style.border = '0px';
            btn24.style.border = '0px';
            victoire++;
            curseur.style.display = "none";
            btn4.style.transform = "scale(0.5)";
            btn24.style.transform = "scale(0.5)";
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#dialogue').style.display = 'block';;
        }
    });

    document.addEventListener('mousemove', e => {
        curseur.style.top = e.pageY - 13 + 'px';
        curseur.style.left = e.pageX - 17 + 'px';

        // Récupère les dimensions et la position de la div1
        const rect1 = curseur.getBoundingClientRect();

        // Récupère les dimensions et la position de la div2
        const rect2 = btn1.getBoundingClientRect();
        const rect3 = btn21.getBoundingClientRect();
        const rect4 = btn2.getBoundingClientRect();
        const rect5 = btn22.getBoundingClientRect();
        const rect6 = btn3.getBoundingClientRect();
        const rect7 = btn23.getBoundingClientRect();
        const rect8 = btn4.getBoundingClientRect();
        const rect9 = btn24.getBoundingClientRect();

        // Vérifie si les rectangles se chevauchent
        if ((rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) || (rect1.left < rect3.right && rect1.right > rect3.left && rect1.top < rect3.bottom && rect1.bottom > rect3.top) || (rect1.left < rect4.right && rect1.right > rect4.left && rect1.top < rect4.bottom && rect1.bottom > rect4.top) || (rect1.left < rect5.right && rect1.right > rect5.left && rect1.top < rect5.bottom && rect1.bottom > rect5.top) || (rect1.left < rect6.right && rect1.right > rect6.left && rect1.top < rect6.bottom && rect1.bottom > rect6.top) || (rect1.left < rect7.right && rect1.right > rect7.left && rect1.top < rect7.bottom && rect1.bottom > rect7.top) || (rect1.left < rect8.right && rect1.right > rect8.left && rect1.top < rect8.bottom && rect1.bottom > rect8.top) || (rect1.left < rect9.right && rect1.right > rect9.left && rect1.top < rect9.bottom && rect1.bottom > rect9.top)) {
            curseur.style.borderColor = "black";
        }
        else {
            curseur.style.borderColor = bordure;
        }

    });

    const rejouer = document.querySelector("#rejouer");

    //Mélange à nouveau les boutons lorsqu'on clique sur 'Rejouer'
    rejouer.addEventListener("click", () => {
        window.location.reload();
    });

});