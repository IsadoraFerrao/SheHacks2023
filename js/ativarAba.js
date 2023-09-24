document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll("#navigation a");

    navigationLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Remove a classe "active" de todas as abas
            navigationLinks.forEach(function(navLink) {
                navLink.classList.remove("active");
            });

            // Adiciona a classe "active" à aba clicada
            link.classList.add("active");
        });
    });
});
