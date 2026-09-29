const bebidas = [];

function criarBebida() {

    const nomeBebida = prompt("Qual é o nome da bebida?");
    const tipoBebida = prompt("Qual é o tipo da bebida?");
    const tamanhoBebida = prompt("Quantos ml a bebida tem?");

    const novaBebida = {
        id: bebidas.length + 1,
        nome: nomeBebida,
        tipo: tipoBebida,
        tamanho: tamanhoBebida
    };

    bebidas.push(novaBebida);

    alert("Bebida cadastrada!");
}

function listarTodos() {

    let lista = "";

    for (let i = 0; i < bebidas.length; i++) {

        lista += "ID: " + bebidas[i].id +
        "\nNome: " + bebidas[i].nome +
        "\nTipo: " + bebidas[i].tipo +
        "\nTamanho: " + bebidas[i].tamanho + " ml\n\n";
    }

    if (bebidas.length == 0) {
        alert("Nenhuma bebida cadastrada.");
    } else {
        alert(lista);
    }
}

function removerBebida() {

    const id = Number(prompt("Digite o ID da bebida que deseja remover"));

    for (let i = 0; i < bebidas.length; i++) {

        if (bebidas[i].id == id) {
            bebidas.splice(i, 1);
            alert("Bebida removida!");
            return;
        }
    }

    alert("Bebida não encontrada.");
}

function removerUltimo() {

    bebidas.pop();

    alert("Última bebida removida!");
}

function limparTodasBebidas() {
  if (bebidas.length === 0) {
    alert("A lista ja está vazia!");
    return;
  }
  const confirmar = confirm("Tem certeza que deseja apagar TODAS as bebidas?");
  
  if (confirmar) {
    bebidas.length = 0; 
    alert("Todas as bebidas foram removidas com sucesso!");
  }
  }
function buscarBebidas() {

    const nome = prompt("Digite o nome da bebida:");

    for (let i = 0; i < bebidas.length; i++) {

        if (bebidas[i].nome.toLowerCase() == nome.toLowerCase()) {

            alert(
                "Bebida encontrada!\n\n" +
                "ID: " + bebidas[i].id +
                "\nNome: " + bebidas[i].nome +
                "\nTipo: " + bebidas[i].tipo +
                "\nTamanho: " + bebidas[i].tamanho + " ml"
            );

            return;
        }
    }

    alert("Nenhuma bebida encontrada.");
}