
function createPremiosCards() {
    console.log('entrou aquo1')
    const premiosCard = document.getElementById("premios-card");
    const premiosItems = [
        {
          img: "img/premio.svg",
          src: "Icon tarça prêmio",
          titulo: 'Em breve!',
          desc: "1º Lugar",
        },
        {
            img: "img/premio.svg",
            src: "Icon tarça prêmio",
            titulo: 'Em breve!',
            desc: "2º Lugar",
        },
        {
            img: "img/premio.svg",
            src: "Icon tarça prêmio",
            titulo: 'Em breve!',
            desc: "3º Lugar",
        }

    ]

     // Função para criar e estilizar os cards
  function createCard(img, alt, titulo, descricao) {
    const card = document.createElement("div");
    card.className = "col-xl-4 col-lg-4";
    card.innerHTML = `
        <div class="single_service premio text-center">
          <div class="icon">
            <img src="${img}" alt="${alt}" style="width:80px; height"/>
          </div>
          <h3>${titulo}</h3>
          <p>${descricao}</p>
        </div>

    `;

    premiosCard.appendChild(card);
    console.log('entrou aquo')
  }

  // Criar os cards com base nos itens 
  premiosItems.forEach((item) => {
    createCard(item.img, item.src, item.titulo, item.desc);
  });
}

// Execute a função de criação de cards após o carregamento do DOM
document.addEventListener("DOMContentLoaded", createPremiosCards);


