
let htmlAviso = document.createElement('div')
htmlAviso.innerHTML =  `<div class="aviso">
                            <div class="controle-aviso">
                                <img src="./assets/img-outside/EmConstrucao.jpg" alt="pagina em contrucao com botao do lado direito inferior para sair">
                                <div onclick="desativAviso()" class="aviso-botao">OK</div>
                            <div>
                        </div>`
document.querySelector('main').append(htmlAviso)
let aviso = ()=>{   
    document.querySelector(".aviso").style.display = 'flex';
}
let desativAviso = ()=>{    
    document.querySelector(".aviso").style.display = 'none';    
}

