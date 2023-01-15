document.addEventListener("DOMContentLoaded", function() {

    // git init
    // git remote add origin https://github.com/kps-243/Noel.git
    // git checkout -b nom_de_ma_branch_nouvelle
    // git add .
    // git commit -m "Test ajout de memory"
    // git push (--set-upstream origin memory)

    // https://3dtransforms.desandro.com/card-flip


    const cards = document.querySelectorAll('.card');

    let duo= [];
    let paires=0;
    let retournees = [];

    const pairesMax = cards.length/2;

    // Il faut initialiser les URLs/ paires randoms
    randomAssociations(cards);

  

    if (paires!=pairesMax){
        // Gerer les clics sur les cartes
        cards.forEach(carte => {
            carte.addEventListener('click', function handleClick(event) {

                // Conditions cliquer sur une carte
                if (carte.id!=duo[0] && !retournees.includes(carte.id) && carte.id!=duo[1]){
                    carte.classList.toggle('is-flipped');

                        // Si deux cartes sont retournées
                        if (duo.length == 2) {

                            // Si paire alors reste montrée
                            if (cards[duo[0]-1].children[1].style.backgroundImage == cards[duo[1]-1].children[1].style.backgroundImage){
                                paires+=1;
                                retournees.push(duo[0]);
                                retournees.push(duo[1]);
                            } 
                            // Si pas paire alors on retourne
                            else   retourneCarte(duo);
                            
                            duo = [];
                        } 
                    duo.push(carte.id);;                  
                }
                // Si WIN :
                if (retournees.length/2==pairesMax-1 && duo.length==2){
                    montrer('victoire');
                }
            });
        });
    }


}, false)


////////////// FONCTIONS /////////////

function randomAssociations(cards){
    
    let liste = {};
    
    // Création des urls
    let urlsName = ["grotte","igloo","maison","musee","palais","royaume","sapin","tour"]

    for (u=0; u<urlsName.length; u++)        urlsName[u] = "url('./../images/png/"+urlsName[u]+".png"
    urlsName = urlsName.concat(urlsName);

    // Choix random puis associé
        for (i=0; i<16; i++){
            a = Math.floor(Math.random() * (urlsName.length - 0) + 0);
            
            liste[i] = urlsName[a];
            
            // Initialise les backgrounds randoms des cartes
            cards[i].children[1].style.backgroundImage = urlsName[a];;
            
            urlsName.splice(a,1);
        } 
}

function retourneCarte(liste){
    // document.getElementById(liste[0]).style.backgroundImage = "url('./images/motif.webp')";
    // document.getElementById(liste[1]).style.backgroundImage = "url('./images/motif.webp')";

    document.getElementById(liste[0]).classList.toggle('is-flipped');
    document.getElementById(liste[1]).classList.toggle('is-flipped');
}
