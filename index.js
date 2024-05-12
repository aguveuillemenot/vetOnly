document.addEventListener("DOMContentLoaded", function() {

    const primeraCarga = localStorage.getItem("popup")
 
    if(primeraCarga != "true"){
        formularioDeInicio();
        localStorage.setItem("popup", true)
    }
});


function cerrarFormulario() {
    const form = document.querySelector(".formulario-registro")
    const overlay = document.querySelector(".overlay")
    const body = document.querySelector("body")
    body.removeChild(form)
    body.removeChild(overlay)
    body.style.overflow = "auto"
}


function formularioDeInicio(){
   
    const body = document.querySelector("body")
    const formulario = document.createElement("div")
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    formulario.classList.add("formulario-registro")

    formulario.innerHTML = `
    <div class="contenido-formulario">
    <!-- Imagen de mascota a la izquierda -->
    <div class="imagen-mascota">
        <img src="./img/imagenes/imagenpopupregistro.webp" alt="Mascota" height="200" width="150">
    </div>
    <!-- Mensaje a la derecha -->
    <div class="mensaje">
        <h1 class="pacifico-regular">¡Subscribite a nuestro sitio!</h1>
        <h3>Para recibir las mejores ofertas y novedades</h3>
    </div>
</div>
<form>
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" required>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" required>
    <div class="botones">
        <button type="submit">Registrarme</button>
        <button type="button" onclick="cerrarFormulario()">Ya estoy registrado</button>
    </div>
</form>
`


body.appendChild(formulario)
body.appendChild(overlay)
body.style.overflow = "hidden"

}