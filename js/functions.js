

function textToNext(bulle){
    let num = bulle.slice(5);
    num = parseInt(num)+1;
    
    let bulle1 = document.getElementById(bulle);
    let bulle2 = document.getElementById("bulle"+num);

    bulle1.style.display = "none";

    if (bulle2){
        bulle2.style.display = "block";
    }
}

function textToBefore(bulle){
    let num = bulle.slice(5);
    num = parseInt(num)-1;
    
    let bulle1 = document.getElementById(bulle);
    let bulle2 = document.getElementById("bulle"+num);
   
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