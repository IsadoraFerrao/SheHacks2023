

// Define uma função para criar os cards do FAQ
function createFAQCards() {
  const accordionContent = document.getElementById("accordion-content");

  const faqItems = [
    {
      question: "O que é um hackathon?",
      collapse: 'collapseOne',
      answer:
        "É uma competição em que as participantes desenvolvem soluções tecnológicas para algum problema específico.",
    },
    {
      question: "Por que participar?",
      collapse: 'collapseDois',
      answer:
        "Uma forma muito divertida de aprender como funciona a elaboração de projetos na área de TI e de fazer networking é através de hackathons! Além disso, você e sua equipe colocarão as mãos na massa para criar uma solução para um problema real.",
    },
    {
      question: "Não tenho uma equipe, ainda posso participar?",
      collapse: 'collapseTres',
      answer:
        "Sim! No nosso pré-evento, haverá uma dinâmica de formação de equipes.",
    },
    {
      question: "Quantas integrantes cada equipe terá?",
      collapse: 'collapseQuatro',
      answer: "As equipes podem ter até 4 participantes.",
    },
    {
      question: "Quais são os requisitos para participar?",
      collapse: 'collapseCinco',
      answer:
        "Ser uma mulher cis ou trans e estar matriculada em uma instituição de ensino superior.",
    },
    {
      question: "Onde e quando será o evento?",
      collapse: 'collapseSeis',
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      question: "Haverá certificado de participação?",
      collapse: 'collapseSete',
      answer: "Sim.",
    },
    {
      question: "Que programas preciso ter instalados?",
      collapse: 'collapseOito',
      answer:
        "Primeiro é importante lembrar que será necessário que pelo menos uma representante da equipe tenha um notebook para participar da etapa presencial. Além do Discord, que usaremos para nossa comunicação oficial, isso pode depender da solução proposta pela sua equipe. Recomendamos que ao menos uma integrante do time esteja familiarizada com algum ambiente de desenvolvimento.",
    },
  ];
  

  // Função para criar e estilizar os cards
  function createCard(question, answer, collapse) {
    const card = document.createElement("div");
    card.className = "col-xl-6 col-lg-6";
    card.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button"
            data-toggle="collapse" data-target="#${collapse}"
            aria-expanded="false" aria-controls="${collapse}"
            style="white-space: normal; text-align: left; width: 100%;">
                ${question}
            </button>
        </h5>
      </div>

    <div id="${collapse}" class="collapse" data-parent="#accordionExample">
        <div class="card-body">
        ${answer}
        </div>
    </div>
</div>
    `;

    accordionContent.appendChild(card);
  }

  // Criar os cards com base nos itens do FAQ
  faqItems.forEach((item) => {
    createCard(item.question, item.answer, item.collapse);
  });
}

// Execute a função de criação de cards após o carregamento do DOM
document.addEventListener("DOMContentLoaded", createFAQCards);
