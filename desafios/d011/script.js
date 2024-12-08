let tela = window.document.getElementById('resultado')
function testar() {
    let ano = prompt('Qual é o ano que você quer verificar?');
    Number.parseInt(ano)
    let resUm = ano%4
    let resDois = ano%100
    let resTres = ano%400

    if(resUm == 0 && resDois == 0 && resTres == 0){
        tela.innerHTML = `<p>O ano de ${ano} <STRONG><mark>É BISSEXTO</mark></STRONG></p>`
    }if(resUm == 0 && resDois != 0){
        tela.innerHTML = `<p>O ano de ${ano} <STRONG><mark>É BISSEXTO</mark></STRONG></p>`
    }else {
        tela.innerHTML = `<P>O ano de ${ano} <STRONG><mark>NÃO É BISSEXTO</mark></STRONG></P>`
    }
}