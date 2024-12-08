let pagina = window.document.getElementById('tela');
function teste() {
    let precoAnterior = window.prompt('Qual era o preço anterior do produto?');
    let precoAtual = window.prompt('Qual é o preço atual do produto?');
    let diferenca = Number(precoAnterior - precoAtual);
    let diferencaDois = Number(precoAtual-precoAnterior)
    let porcent = Number((precoAtual*100)/precoAnterior-100)
    if(diferenca > 0){
        pagina.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava R$${precoAnterior} e agora custa R$${precoAtual}</p><p>Hoje o produto está mais barato.</p><p>O preço abaixou R$${diferenca} em relação ao preço anterior.</p><p>Uma variação de ${porcent}% pra baixo</p>`
    }else{
        pagina.innerHTML = `<h2>Analisando os valores informados</h2><p>O produto custava R$${precoAnterior} e agora custa R$${precoAtual}</p><p>Hoje o produto está mais caro.</p><p>O preço subiu R$${diferencaDois} em relação ao preço anterior.</p><p>Uma variação de ${porcent}% pra cima</p>`
    }
}