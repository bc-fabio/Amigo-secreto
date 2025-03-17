let amigos = [];
function adicionarAmigo(){
    let inserir = document.getElementById('amigo').value;
    if (inserir ===""){
        alert("Por favor, insira um nome");
    }
    amigos.push(inserir);
    atualizarNomes();
    limparCampo();
}
function limparCampo() {
    inserir = document.querySelector('input');
    inserir.value = '';
}
function atualizarNomes(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo(){
    if (amigos.length<0){
        alert("Por favor, insira um nome");
    }
    let gerador = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[gerador];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}