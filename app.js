let amigos = [];
let maisAmigos = ;
function adicionarAmigo{
    let inserirNome = document.getElementById('amigo').value;
    if (inserirNome ==""){
        alert("Por favor, insira um nome");
    }else{
         maisAmigos.push(amigos);
    }
}
function obterNomes{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}
amigos.forEach(amigo => {
    const li = document.createElement("li"); // Cria um elemento <li>
    li.textContent = amigo; // Define o texto do <li> com o nome do amigo
    lista.appendChild(li); // Adiciona o <li> na lista <ul>
});
function limparCampo{
    inserirNome = document.querySelector('input');
    inserirNome.value = "";

}
function sortearAmigo{
    if (amigos.length<0){
        alert("Por favor, insira um nome");
    }
    let gerador = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[gerador];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}