$(document).ready(function () {
    const navLinks = $("#navigation a");
    const apoioLink = $('a[href="#apoio"]');

    // Função para destacar o link de navegação da seção visível
    function highlightNavLink() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        navLinks.removeClass("active"); // Remove a classe "active" de todos os links

        // Se o usuário estiver perto do final da página, destaque a aba "#apoio"
        if (scrollPosition + windowHeight >= documentHeight - 1) {
            apoioLink.addClass("active");
        } else {
            // Caso contrário, aplique a lógica anterior para destacar a aba visível
            for (let i = navLinks.length - 1; i >= 0; i--) {
                const link = navLinks.eq(i);
                const sectionId = link.attr("href").substring(1);
                const section = $("#" + sectionId);

                if (section.length === 1) {
                    const sectionTop = section.offset().top;
                    const sectionBottom = sectionTop + section.height();

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        link.addClass("active");
                        break; // Sair do loop quando encontrar a seção visível
                    }
                }
            }
        }
    }

    // Adiciona o evento de rolagem para chamar a função de destaque
    $(window).scroll(highlightNavLink);

    // Chama a função de destaque na carga inicial da página
    highlightNavLink();
});
