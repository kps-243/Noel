document.addEventListener("DOMContentLoaded", function() {

})

function valide(){
    let question1 = document.querySelector('input[name="question1"]:checked').value  ;
    let question2 = document.querySelector('input[name="question2"]:checked').value  ;
    let prenom = document.getElementById('prenom').value;
    let age = document.getElementById('age').value;

    document.getElementById("texte9").innerHTML = 
    "Cher Père Noël,<br><br/>\
    Je m’appelle "+prenom+" et j’ai "+age+" ans !<br><br/>\
    J’ai été très sage cette année, tout le monde me l’a dit, et même mes parents !<br>\
    J’attends Noël avec impatience et j’espère que tu vas m’apporter les jouets dont je rêve ! Tu trouveras ma liste sur l’autre feuille dans l’enveloppe.<br>\
    L’année dernière, je ne t’ai pas vu devant la cheminée, tu devais être pressé, mais cette année, j’espère que je pourrai te voir un peu.<br>\
    Je te souhaite bon courage pour tout le travail que tu vas avoir et je t’embrasse très fort."

    document.getElementById("texte11").innerHTML = 
    "Cher Père Noël,<br><br/>\
    Je m’appelle "+prenom+" et j’ai "+age+" ans !<br><br/>\
    Cette année, j’ai fait des bêtises, mais seulement de toutes petites bêtises, je te le promets, Père Noël !<br>\
    Même si je n’ai pas été très sage, j’espère quand même que tu m’apporteras mes jouets préférés (ma liste est sur l’autre feuille).<br>\
    Peut-être que je pourrai t’apercevoir quand tu viendras chez moi, car je reste toujours éveillé.e en attendant mes cadeaux…"

    document.getElementById("texte13").innerHTML = 
    "Cher Père Noël,<br>\
    Je m’appelle "+prenom+" et j’ai "+age+" ans !<br><br/>\
    Je n’ai pas toujours été très sage cette année, et j’ai fait quelques bêtises.<br>\
    Mais je te promets de faire des efforts et d’être beaucoup plus sage l’année prochaine, même si ce n’est pas toujours facile !<br>\
    J’espère que tu ne m’en veux pas trop et que tu m’apportas quand même les jouets que je t’ai demandé (ma liste est sur l’autre feuille).<br>\
    Le soir de Noël, je te laisserai un petit gâteau au pied du sapin, comme ça tu pourras en donner un petit bout à ton renne.<br>\
    Je t’embrasse."

    if (prenom){
        document.getElementById("sign9").innerHTML = String(prenom);
        document.getElementById("sign11").innerHTML = String(prenom);
        document.getElementById("sign13").innerHTML = String(prenom);
    }
    
    // Scénario moyens
    if ((question1=="question1-2" || question2=="question2-2") && (question1!="question1-1" && question2!="question2-1")){
        return ['bulle7','bulle10'];
    } // Scénario 2 pas bien
    else if (question1=="question1-3" && question2=="question2-3"){
        return ['bulle7','bulle12'];
    } // Scénario le reste : minimum une bonne réponse !
    else {
        return ['bulle7','bulle8'];
    }
}

function popLettre(bulledepart,bullearrivee){
    let filter = document.getElementById("filter");
    filter.style.display = "block";
    let helene = document.getElementById("Helene");
    helene.style.display = "none";


    return [bulledepart,bullearrivee];
}

function depopLettre(bulledepart,bullearrivee){
    let filter = document.getElementById("filter");
    filter.style.display = "none";
    let helene = document.getElementById("Helene");
    helene.style.display = "block";


    return [bulledepart,bullearrivee];
}