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

function flex(el) {
    document.getElementById(el).style.display = "flex";
}

function montrer(el) {
    document.getElementById(el).classList.remove('caché');
}

function cacher(el) {
    document.getElementById(el).classList.add('caché');
}

function classe(el,classe) {
    document.getElementById(el).classList.add(classe);
}

function capture(el, nom) {
    html2canvas(document.getElementById(el)).then(canvas => {
        let link = document.createElement('a');
        link.download = nom+'.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}