  // Função para exibir os projetos na tela

  function mostrarProjetos(filtro = "") {
    const container = document.getElementById("projetos-container");
    container.innerHTML = ""; // Limpa antes de mostrar

    projetos.filter(projeto => projeto.titulo.toLowerCase().includes(filtro.toLowerCase()))

            .forEach(projeto => {
                const div = document.createElement("div");
             div.classList.add("projeto");
              div.innerHTML = `
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                ${projeto.link ? `<a href="${projeto.link}" target="_blank">Ver projeto</a>` : ""}
                `;
            container.appendChild(div);
            } );
        }
  
    // Filtro ao digitar

    const inputFiltro = document.getElementById("filtro");
    inputFiltro.addEventListener("input",() => {
        mostrarProjetos(inputFiltro.value);
    });

    //Mostrar todos ao carregar
    mostrarProjetos();