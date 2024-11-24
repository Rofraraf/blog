// Obtener elementos del DOM para el modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("marco-imagen");
var closeBtn = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en una imagen
//var images = document.getElementsByClassName("marco-imagen");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
    }
}

/* Abrir el modal al hacer clic en el botón
if (modalBtn) {
    modalBtn.onclick = function() {
        modal.style.display = "block";
    }
}*/

// Cerrar el modal al hacer clic en la "X"
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}