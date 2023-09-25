
function createCriteriosCards() {
    const criteriosCard = document.getElementById("criterios-card");
    const criteriosItems = [
        {
          img: "img/svg_icon/1.svg",
          src: "Icon criatividade",
          titulo: 'Criatividade',
          desc: "É uma solução original? Repensa, de forma diferente, algo existente?.",
        },
        {
            img: "img/svg_icon/2.svg",
            src: "Icon Web design",
            titulo: 'Web design',
            desc: "A solução possui uma boa interface? Tem uma boa experiência de usuário (UX)?.",
        },
        {
            img: "img/svg_icon/3.svg",
            src: "Icon Impacto",
            titulo: 'Impacto',
            desc: "A ideia é escalável? Pode ser aplicada ao mundo real?",
        },
        {
            img: "img/svg_icon/1.svg",
            src: "Icon Funcionalidade",
            titulo: 'Funcionalidade',
            desc: "A aplicação pode ser usada em um exemplo bem definido?",
        },

    ]

     // Função para criar e estilizar os cards
  function createCard(img, alt, titulo, descricao) {
    const card = document.createElement("div");
    card.className = "col-xl-3 col-lg-3";
    card.innerHTML = `
        <div class="single_service text-center">
          <div class="icon">
            <img src="${img}" alt="${alt}" />
          </div>
          <h3>${titulo}</h3>
          <p>${descricao}</p>
        </div>

    `;

    criteriosCard.appendChild(card);
  }

  // Criar os cards com base nos itens 
  criteriosItems.forEach((item) => {
    createCard(item.img, item.src, item.titulo, item.desc);
  });
}

// Execute a função de criação de cards após o carregamento do DOM
document.addEventListener("DOMContentLoaded", createCriteriosCards);


