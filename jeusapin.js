document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    const div = document.getElementById("maDiv");
    const div2 = document.getElementById("maDiv2");
    const div3 = document.getElementById("maDiv3");
    const div4 = document.getElementById("maDiv4");

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
        btn1.style.backgroundColor = 'red';
        btn21.style.backgroundColor = 'red';
        var couleur1 = 'red';

        btn2.style.backgroundColor = 'blue';
        btn22.style.backgroundColor = 'blue';
        var couleur2 = 'blue';

        btn3.style.backgroundColor = 'green';
        btn23.style.backgroundColor = 'green';
        var couleur3 = 'green';

        btn4.style.backgroundColor = 'yellow';
        btn24.style.backgroundColor = 'yellow';
        var couleur4 = 'yellow';
    }

    //Création d'un fil qui suit la souris
    function fil(fil, btn) {
        let dernierX = 0;
        let dernierY = 0;
        fil.style.backgroundColor = btn.style.backgroundColor;

        document.addEventListener('mousemove', (event) => {
            //On détecte si l'utilisateur a cliqué sur un bouton
            if (!dessin) {
                return;
            }
            
            //On empêche la largeur du fil de dépasser la souris quand on se déplace à droite
            fil.style.width = Math.min(event.clientX, fil.offsetWidth) + 'px';
    
            //Même chose pour le déplacement vers la gauche
            fil.style.width = Math.max(event.clientX, fil.offsetLeft) + 'px';
    
            //Détection du déplacement horizontal de la souris
            const actuelX = event.clientX;
            if (actuelX < dernierX) { //Vers la gauche
                fil.style.width = (fil.offsetWidth - 5) + 'px'; //Réduction largeur du fil quand la souris se déplace vers la gauche
            }
            if (actuelX > dernierX) { //Vers la droite
                fil.style.width = (fil.offsetWidth + 5) + 'px'; //Augmentation quand elle se déplace vers la droite
            }
            dernierX = actuelX;
    
            //Détection du déplacement vertical de la souris
            const actuelY = event.clientY;
            if (actuelY !== dernierY) {
                // alert('vertical');
                fil.style.top = event.clientY + 40 + 'px';
            }
            // dernierX = actuelY;
        });
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

    const btn1 = document.querySelector(assoc[0]);
    const btn2 = document.querySelector(assoc[1]);
    const btn3 = document.querySelector(assoc[2]);
    const btn4 = document.querySelector(assoc[3]);

    const btn21 = document.querySelector(assoc2[0]);
    const btn22 = document.querySelector(assoc2[1]);
    const btn23 = document.querySelector(assoc2[2]);
    const btn24 = document.querySelector(assoc2[3]);

    //ajout des couleurs sur les boutons
    couleur();

    //déctection des paires au clic

    var actif = 0;
    var victoire = 0;
    var dessin = false;

    btn1.addEventListener('click', () => {
        actif = 1;
        dessin = true;
        document.style.cursor = 'red';
        fil(div, btn1);
    });

    btn21.addEventListener('click', () => {
        if (actif == 1) {
            btn1.style.border = '0px';
            btn21.style.border = '0px';
            victoire++;
            dessin = false;
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#victoire').innerHTML = 'VOUS AVEZ GAGNÉ !!'
        }
    });

    btn2.addEventListener('click', () => {
        actif = 2;
        dessin = true;
        fil(div2, btn2);
        
    });

    btn22.addEventListener('click', () => {
        if (actif == 2) {
            btn2.style.border = '0px';
            btn22.style.border = '0px';
            victoire++;
            dessin = false;
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#victoire').innerHTML = 'VOUS AVEZ GAGNÉ !!'
        }
    });

    btn3.addEventListener('click', () => {
        actif = 3;
        dessin = true;
        fil(div3, btn3);
    });

    btn23.addEventListener('click', () => {
        if (actif == 3) {
            btn3.style.border = '0px';
            btn23.style.border = '0px';
            victoire++;
            dessin = false;
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#victoire').innerHTML = 'VOUS AVEZ GAGNÉ !!'
        }
    });

    btn4.addEventListener('click', () => {
        actif = 4;
        dessin = true;
        fil(div4, btn4);
    });

    btn24.addEventListener('click', () => {
        if (actif == 4) {
            btn4.style.border = '0px';
            btn24.style.border = '0px';
            victoire++;
            dessin = false;
            actif = 0;
        }
        if (victoire == 4) {
            document.querySelector('#victoire').innerHTML = 'VOUS AVEZ GAGNÉ !!'
        }
    });

});