document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const mainPage = document.getElementById("main-page");
    const botonAcceder = document.getElementById("boton");

    // Si URL tiene #introduccion, se mite la pantalla de bienvenida
    if (window.location.hash === "#introduccion") {
        container.style.display = "none"; 
        mainPage.classList.remove("hidden"); // Muestra la página principal
    } else {
        // Muestra la pantalla de bienvenida y configura el evento para el botón "Acceder"
        botonAcceder.addEventListener("click", function() {
            container.classList.add("hidden");
            mainPage.classList.remove("hidden");
            window.location.hash = "#introduccion"; 
        });
    }
});
