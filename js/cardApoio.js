
function createapoioCards() {
    console.log('entrou aquo1')
    const apoioCard = document.getElementById("apoio-card");
    const apoioItems = [
        {
          img: "img/icmc.png",
          src: "Icon icmc",
        },
        {
            img: "img/each.png",
            src: "Icon tarça prêmio",
        },
        {
            img: "img/ime.jpg",
            src: "Icon tarça prêmio",
        }

    ]

     // Função para criar e estilizar os cards
  function createCard(img, alt, titulo, descricao) {
    const card = document.createElement("div");
    card.className = "col-xl-4 col-lg-4";
    card.innerHTML = `
        <div class="single_service premio text-center">
          <div class="icon">
            <img src="${img}" alt="${alt}" style="width:170px;"/>
          </div>
        </div>

    `;

    apoioCard.appendChild(card);
    console.log('entrou aquo')
  }

  // Criar os cards com base nos itens 
  apoioItems.forEach((item) => {
    createCard(item.img, item.src, item.titulo, item.desc);
  });
}

// Execute a função de criação de cards após o carregamento do DOM
document.addEventListener("DOMContentLoaded", createapoioCards);


