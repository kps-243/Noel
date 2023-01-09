document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    const r1 = document.querySelector('#r1');
    const r2 = document.querySelector('#r2');
    const r3 = document.querySelector('#r3');
    const rchoix = document.querySelector('#rchoix');
    const rchoix2 = document.querySelector('#rchoix2');
    const rchoix3 = document.querySelector('#rchoix3');
    const ours = document.querySelector('#ourson');

    r1.addEventListener("click", () => {
        cacher('bulle4');
        ours.style.right = "50%";
        montrer('bulle5');
        
    })

    rchoix.addEventListener("click", () => {
        document.getElementById('bulle7').style.display = "none";
        ours.style.right = "24%";
        cacher('bulle5');
        flex('bulle5');
        montrer('bulle4');
        
    })

    r2.addEventListener("click", () => {
        cacher('bulle4');
        ours.style.right = "50%";
        montrer('bulle8');
        flex('bulle8');
        
    })

    rchoix2.addEventListener("click", () => {
        document.getElementById('bulle10').style.display = "none";
        ours.style.right = "24%";
        cacher('bulle8');
        montrer('bulle4');
        
    })

    r3.addEventListener("click", () => {
        cacher('bulle4');
        ours.style.right = "50%";
        montrer('bulle11');
        flex('bulle11');
    })

    rchoix3.addEventListener("click", () => {
        document.getElementById('bulle13').style.display = "none";
        ours.style.right = "24%";
        cacher('bulle11');
        montrer('bulle4');
        
    })
});