function textToNext(bulledepart,bullearrivee){

    let bulle1 = document.getElementById(bulledepart);
    let bulle2 = document.getElementById(bullearrivee);

    bulle1.style.display = "none";

    if (bulle2){
        bulle2.style.display = "block";
    }
}

function textToBefore(bulledepart,bullearrivee){
    let bulle1 = document.getElementById(bulledepart);
    let bulle2 = document.getElementById(bullearrivee);
   
    if (bulle2){
        bulle1.style.display = "none";
        bulle2.style.display = "block";
    }
}