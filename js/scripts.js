document.addEventListener("DOMContentLoaded", function() {

    // git init
    // git remote add origin https://github.com/kps-243/Noel.git
    // git checkout -b nom_de_ma_branch_nouvelle
    // git add .
    // git commit -m "Test ajout de memory"
    // git push --set-upstream origin memory



    const classcarte = document.querySelectorAll('.carte');
    let duo= [];
    let paires=0;
    let retournees = [];

    // Il faut initialiser les paires randoms et stocker leur url
    // A faire plus tard boucle et randoms
    let associations = randomAssociations();
    



    if (paires!=8){
        // Gerer les clics sur les cartes
        classcarte.forEach(carte => {
            carte.addEventListener('click', function handleClick(event) {

                // Conditions cliquer sur une carte
                if (duo.length<2 && carte.id!=duo[0] && !retournees.includes(carte.id)){
                    console.log("je peux cliquer parce que : duo length "+duo.length+" carte.id "+carte.id+" et aussi parce que retournees "+retournees);
                    duo.push(carte.id);
                    carte.style.backgroundImage = associations[carte.id];
                }

                // Si deux cartes sont retournées
                if (duo.length == 2) {

                    // Si paire alors reste montrée
                    if (associations[duo[0]] == associations[duo[1]]){
                        paires+=1;
                        
                        retournees.push(duo[0]);
                        retournees.push(duo[1]);
                        console.log("retournees "+retournees);

                        duo = [];
                    } 
                    // Si pas paire alors on retourne
                    else {
                        console.log("pas paire ! "+duo);
                        setTimeout(function () {
                            retourneCarte(duo);
                            duo = []
                          }, 1500);
                    }
                } 
            });
        });
    }

    // Si WIN :
    if (paires==8){
        // STOP LE JEU ET ECRAN DE WIN
        let win = document.getElementById('win');
        win.style.style.display = "block";

        console.log(paires)
    }
}, false)


////////////// FONCTIONS /////////////


function retourneCarte(liste){
    document.getElementById(liste[0]).style.backgroundImage = "url('./images/motif.webp')";
    document.getElementById(liste[1]).style.backgroundImage = "url('./images/motif.webp')";
}


function randomAssociations(){
    let liste = {};
    
    // Création des urls
    let urlsName = ["gift","teddy","ornament","flocon","houx","reindeer","santa","sapin"]
    
    for (u=0; u<urlsName.length; u++)        urlsName[u] = "url('./images/"+urlsName[u]+".webp"
    urlsName = urlsName.concat(urlsName);

    // Choix random puis associé
        for (i=1; i<=16; i++){
            a = Math.floor(Math.random() * (urlsName.length - 0) + 0);
            
            liste[i] = urlsName[a];
            urlsName.splice(a,1);
        }    

    return liste;
}