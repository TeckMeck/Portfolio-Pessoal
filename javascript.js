// Função para exibir uma seção com base no ID passado
function exibirSecao(id) {


    // Oculta todas as seções
    var secoes = document.querySelectorAll("main section");
    secoes.forEach(function(secao) {
        secao.style.display = "none";
    });

    
    // Exibe a seção com o ID especificado
    var secaoExibir = document.getElementById(id);
    if (secaoExibir) {
        secaoExibir.style.display = "block";
    }
}