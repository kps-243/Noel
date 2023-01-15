document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var bd = 0;
    const tourne = document.getElementById('tourne');
    const bd1 = document.querySelector('#sablés button');
    const bd2 = document.querySelector('#tartines button');
    const bd3 = document.querySelector('#tiramisu button');


    function responsive() {
        if (matchMedia("only screen and (max-width: 768px)").matches) {
            return 'mobile';
        }

        else {
            return 'ordi';
        }
    }

    // var sheet = document.styleSheets[0]['cssRules'][0]['styleSheet']['rules']['cssText'];
    // console.log(sheet);

    var sheet0 = document.styleSheets[0]['cssRules'][0];
    var sheet = sheet0.styleSheets;
    for (var i = 0; i < sheet.cssRules.length; i++) {
        if (sheet.cssRules[i].media && sheet.cssRules[i].media[0] === "(orientation: portrait) and (max-width: 920px)") {
            // sheet.cssRules[i].cssText = sheet.cssRules[i].cssText.replace("background-color: red;", "background-color: blue;");
            console.log(sheet.cssRules[i].cssText);
        }
    }

    bd1.addEventListener("click", function () {
        if (responsive() == 'mobile') {

        }

    })

});