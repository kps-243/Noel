document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    const importer = document.getElementById('fileInput');
    const drop = document.getElementById('drop');
    const bonnet = document.getElementById('bonnet');
    const barbe = document.getElementById('barbe');
    const sapin = document.getElementById('sapin');
    const lunettes = document.getElementById('lunettes');

    var actibonnet = 0;
    var actibarbe = 0;
    var actisapin = 0;
    var actilunettes = 0;

    importer.onchange = function () {
        var fichier = this.files[0];

        var allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;

        if (!allowedExtensions.exec(fichier.name)) {
            alert('Fichier invalide ! Seuls les fichiers PNG, JPG et JPEG sont acceptés.');
            fichier.value = '';
            return false;
        }

        else {
            var reader = new FileReader();

            reader.onload = function () {
                var dataURL = reader.result;
                drop.style.backgroundImage = "url('" + dataURL + "')";
            }
            reader.readAsDataURL(fichier);
            drop.classList.remove('zone');
            document.querySelector('#drop button').style.display = 'none';

            montrer('bulle4');

            // Ajouter l'événement dragstart pour la source de l'événement de glisser-déplacer
            bonnet.addEventListener("dragstart", function (event) {
                event.dataTransfer.setData("text/plain", event.target.id);
                actibonnet = 1;
            });

            barbe.addEventListener("dragstart", function (event) {
                event.dataTransfer.setData("text/plain", event.target.id);
                actibarbe = 1;
            });

            sapin.addEventListener("dragstart", function (event) {
                event.dataTransfer.setData("text/plain", event.target.id);
                actisapin = 1;
            });

            lunettes.addEventListener("dragstart", function (event) {
                event.dataTransfer.setData("text/plain", event.target.id);
                actilunettes = 1;
            });

            // Ajouter l'événement dragover pour la zone de dépôt pour permettre le dépôt
            drop.addEventListener("dragover", function (event) {
                event.preventDefault();
            });

            // Ajouter l'événement drop pour la zone de dépôt pour accepter le dépôt
            drop.addEventListener("drop", function (event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("text/plain");
                event.target.appendChild(document.getElementById(data));

                // obtenir les coordonnées de l'événement drop
                var x = event.clientX;
                var y = event.clientY;

                // définir la position de l'image en utilisant les coordonnées

                if (actibonnet == 1) {
                    bonnet.style.position = "absolute";
                    bonnet.style.left = x - 500 + "px";
                    bonnet.style.top = y - 325 + "px";

                    // ajouter l'image à la zone de dépôt
                    event.target.appendChild(bonnet);
                    
                    actibonnet = 0;
                }

                else if (actibarbe == 1){
                    barbe.style.position = "absolute";
                    barbe.style.left = x - 475 + "px";
                    barbe.style.top = y - 325 + "px";
                    
                    // ajouter l'image à la zone de dépôt
                    event.target.appendChild(barbe);
                    
                    actibarbe = 0;
                }

                else if (actisapin == 1){
                    sapin.style.position = "absolute";
                    sapin.style.left = x - 500 + "px";
                    sapin.style.top = y - 225 + "px";
                    
                    // ajouter l'image à la zone de dépôt
                    event.target.appendChild(sapin);
                    
                    actisapin = 0;
                }

                else if (actilunettes == 1){
                    lunettes.style.position = "absolute";
                    lunettes.style.left = x - 507 + "px";
                    lunettes.style.top = y - 215 + "px";
                    
                    // ajouter l'image à la zone de dépôt
                    event.target.appendChild(sapin);
                    
                    actilunettes = 0;
                }
            });
        }

    }

});