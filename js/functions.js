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


function OpenHF(HF){
    if (HF == 'header'){
        let header = document.getElementById("header");
        let flecheHeader = document.getElementById("fleche-header")
        if (header.style.top == "0px"){
            header.style.top = "-11vh";
            flecheHeader.style.transform = "rotate(0deg)";
        } else {
            header.style.top = "0px";
            flecheHeader.style.transform = "rotate(180deg)";
        }
    }
    else if (HF == 'footer'){
        let footer = document.getElementById("footer");
        let flechefooter = document.getElementById("fleche-footer")
        if (footer.style.bottom == "0px"){
            footer.style.bottom = "-11vh";
            flechefooter.style.transform = "rotate(180deg)";
        } else {
            footer.style.bottom = "0px";
            flechefooter.style.transform = "rotate(0deg)";
        }
    }
}