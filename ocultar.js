    function mostrarOcultarImagen(step) {
        var imageContainer = document.querySelector(`[data-step="${step}"]`);
        if (imageContainer.style.display === "none") {
            imageContainer.style.display = "block";
        } else {
            imageContainer.style.display = "none";
        }
    }