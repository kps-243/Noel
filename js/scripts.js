document.addEventListener("DOMContentLoaded", function() {

    // git init
    // git remote add origin https://github.com/kps-243/Noel.git
    // git checkout -b nom_de_ma_branch_nouvelle
    // git add .
    // git commit -m "Test ajout de memory"
    // git push --set-upstream origin memory

    // git pull https://github.com/kps-243/Noel.git POUR TOUT RECUPERER

   
   
   
    var element = document.scrollingElement || document.documentElement;
    element.addEventListener('wheel', transformScroll);




    // CHANGEMENT LEFT ANIMAUX QUAND PORTRAIT

    let h_img = 630;
    let w_img = 1120

    let largeur = window.innerWidth;
    let hauteur = window.innerHeight;


    window.onresize = handle;

    function handle(evnt){
        // alert("l'événement resize a été déclenché." );
        return true;
      }

      
    if (h_img*largeur/w_img > hauteur) {
        console.log("format PORTAIT");

        let widthImageNow = w_img*hauteur/h_img;
        let moreOnTheLeft = (largeur-widthImageNow)/2;


        // Pour les animaux
        const animaux = document.querySelectorAll('.animaux');
        animaux.forEach(animal => {

            let aCharacter = document.getElementById(animal.id);
            // console.log(aCharacter);

            const cssObj = window.getComputedStyle(aCharacter, null);
            let left = cssObj.getPropertyValue("left");
            left.slice(0, -2);          //Retirer le "px" pour pouvoir faire les calculs
            left = parseInt(left);

            aCharacter.style.left = left+ moreOnTheLeft +"px";
        })



        // Pour les lieux
        const lieux = document.querySelectorAll('.lieux');
        lieux.forEach(lieu => {

            let aPlace = document.getElementById(lieu.id);
            // console.log(aPlace);
    

            const cssObj2 = window.getComputedStyle(aPlace, null);
            let left = cssObj2.getPropertyValue("left");
            left.slice(0, -2);          //Retirer le "px" pour pouvoir faire les calculs
            left = parseInt(left);

            aPlace.style.left = left+ moreOnTheLeft +"px";
        })


    } else {
        console.log("format PAYSAGE");
    }







    // TEXTES LISTENERS
    const listenersAbris = ["grotte","musee","igloo","maison","sapin","palais","royaume","tour"];
    listenersAbris.forEach(abri => {

        document.getElementById(abri).addEventListener('mousemove', function(event) {
            custom(event,'text-'+abri);
        });
        document.getElementById(abri).addEventListener('mouseleave', function(event) {
            leave('text-'+abri);
        });
    })

}, false)


  

////////////// FONCTIONS /////////////

function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
    let augmente = 300;

    if (event.deltaY < 0)  augmente = -augmente;
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX + augmente;

  }


function custom(event,element){
    let el = document.getElementById(element);
    el.style.display = "block";

    el.style.top = event.clientY + "px";
    el.style.left = event.clientX + 50 + document.scrollingElement.scrollLeft + "px";
}

function leave(element){
    let el = document.getElementById(element);
    el.style.display = "none";
}