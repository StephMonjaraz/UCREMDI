// Carga el menú de navegación en el contenedor "menu-container"
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si existe el contenedor del menú en la página
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
        // Carga el archivo menu.html y se coloca en el contenedor
        fetch("menu.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el menú");
                }
                return response.text();
            })
            .then(data => {
                menuContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar el menú:", error));
    }
});
