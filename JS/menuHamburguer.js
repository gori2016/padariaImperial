//função para EXIBIR o menu//
function exibeMenu(){
    let hamburguer = window.document.getElementById("btHam")
    //nessa parte faz o menu mobile funcionar

    //faz o logo do menu sumir
    hamburguer.style.display = "none"

    //faz o logo de fechar aparecer
    btFechar.style.display = "inline"

    //faz o NAV virar display BLOCK
    menu.style.display = "block"
}


//Função para OCULTAR o menu//
function saiMenu(){
    let fechar = window.document.getElementById("btFechar")
    // oculta o botão de fechar 
    fechar.style.display = "none"
    //aparece o botão do menu
    btHam.style.display = "inline"
    //tira o nav no momento que clica no icone de fechar 
    menu.style.display = "none"
}

