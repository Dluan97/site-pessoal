  // Função para exibir os projetos na tela

  function mostrarProjetos(filtro = "") {
    const container = document.getElementById("projetos-container");
    container.innerHTML = ""; // Limpa antes de mostrar

    projetos.filter(projeto => projeto.titulo.toLowerCase().includes(filtro.toLowerCase()))

            .forEach(projeto => {
                const div = document.createElement("div");
             div.classList.add("projeto", "fade-in");
              div.innerHTML = `
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                ${projeto.link ? `<a href="${projeto.link}" target="_blank">Ver projeto</a>` : ""}
                `;
            container.appendChild(div);
            } );
        }

    // Validação e envio do formulário

    const form = document.getElementById('form-contato');
    const statusEnvio = document.getElementById('status-envio');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // evita recarregar a página

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if(nome === "" || email === "" || mensagem === "") {
        statusEnvio.textContent = "Por favor, preencha todos os campos.";
        statusEnvio.style.color = "red";
        return;
      }

      statusEnvio.textContent = "Mensagem enviada com sucesso";
      statusEnvio.style.color = "green";

      form.reset();
    });
  
    // Filtro ao digitar

    const inputFiltro = document.getElementById("filtro");
    inputFiltro.addEventListener("input",() => {
        mostrarProjetos(inputFiltro.value);
    });

    //Mostrar todos ao carregar
    mostrarProjetos();