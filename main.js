const form = document.getElementById('form-agenda');
const ContatoExiste = [];
const telefoneExiste = [];
const spanResultadoContato ='<span class = "quantidade de contato">Resultado>/span>';

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
});
function adicionaLinha (){
    const inputNomeContatos = document.getElementById('nome-completo');
    const inputTelefoneContatos = document.getElementById('telefone');

    ContatoExiste.push(inputNomeContatos.value); 
    telefoneExiste.push(inputTelefoneContatos.value);
    let agenda = ContatoExiste.length;   

let linha = `<tr>`;
linha += `<td>${inputNomeContatos.value}</td>`;
linha += `<td>${inputTelefoneContatos.value}</td>`;
//inha += `<td><button class="excluir" onclick= "atualizaTabela(this.parentNode.parentNode. rowIndex)">X</button></td>`;
linha += `</tr>`;
linhas += linha;

inputNomeContatos.value = '';
inputTelefoneContatos.value = '';
}
function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaAgenda () {
    const Resultado = quantidadeDeContatos ();
    return quantidadeDeContatos / linhas.length;
}
