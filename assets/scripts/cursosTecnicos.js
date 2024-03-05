let cursosTecnicos = [

    // {id:1,enderecoHREF:'https://forms.gle/6C8HpYTSZDh4Vtw97',imgSRC:'./assets/img-outside/combo.jpg',alt:"Escolha seus cursos e monte seu combo" },
    {id:2,enderecoHREF:'https://go.hotmart.com/J80168536U',imgSRC:'./assets/img-outside/cursosTecnicos/FormacaoFinal.jpg',alt:"Curso Tecnico de Formação de Professores GAF"},
    {id:3,enderecoHREF:'https://hotmart.com/pt-br/marketplace/produtos/iniciacao-a-ginastica-artistica-feminina-aplicada-a-professores-como-comecar-curso-consultoria/L60248985M',imgSRC:'./assets/img-outside/cursosTecnicos/2.jpg', alt:"Iniciação à Ginástica Artística Feminina - Aplicada a professores - como começar? (Curso + Consultoria)"},
    {id:4,enderecoHREF:'https://go.hotmart.com/G71392175V',imgSRC:'./assets/img-outside/cursosTecnicos/nivel2.jpg',alt:"curso tecnico de ginastica artistica nivel 2"},    
    {id:5,enderecoHREF:'https://go.hotmart.com/W74473283S',imgSRC:'./assets/img-outside/cursosTecnicos/5.jpg',alt:"arbitragem escolar gaf"},
    {id:6,enderecoHREF:'https://hotmart.com/pt-br/marketplace/produtos/curso-preparatorio-de-arbitragem-ginastica-artistica-feminina-2022-2024/S60332014R',imgSRC:'./assets/img-outside/cursosTecnicos/3.jpg',alt:"Curso Preparatório de Arbitragem - Ginástica Artística Feminina 2022-2024"},
    {id:7,enderecoHREF:'https://go.hotmart.com/A77459330J',imgSRC:'./assets/img-outside/cursosTecnicos/ballet.jpg',alt:"Curso Online Básico de Ballet, Saltos de Dança e Giros - Ginástica Artística Feminina"},
    {id:8,enderecoHREF:'https://go.hotmart.com/L71346871M',imgSRC:'./assets/img-outside/cursosTecnicos/gr.jpg',alt:"curso iniciacao a GR"},
    {id:9,enderecoHREF:'https://hotmart.com/pt-br/marketplace/produtos/curso-online-de-iniciacao-ao-cheerleading-nivel-1/M69795595I',imgSRC:'./assets/img-outside/cursosTecnicos/1.jpg',alt:"Curso Online de Iniciação em Cheerleading - Nivel 1"},
    {id:10,enderecoHREF:'https://go.hotmart.com/M75896452T',imgSRC:'./assets/img-outside/cursosTecnicos/4.jpg', alt:"Oficina GymWod - iniciacao a gam"},
    {id:11,enderecoHREF:'https://go.hotmart.com/U74771621F',imgSRC:'./assets/img-outside/cursosTecnicos/6.jpg',alt:"Oficina GymWod - ajudas nivel 1 gaf"},
    {id:12,enderecoHREF:'https://go.hotmart.com/X75896644Q',imgSRC:'./assets/img-outside/cursosTecnicos/8.jpg',alt:"Oficina GymWod - ajudas nivel 2 gaf"},
    {id:13,enderecoHREF:'https://go.hotmart.com/K79354458G',imgSRC:'./assets/img-outside/cursosTecnicos/BABIES.jpg',alt:"Oficina Ginástica na Prática - Ginástica para Babies 2 a 5 anos"},
    {id:14,enderecoHREF:'https://go.hotmart.com/O81911788F',imgSRC:'./assets/img-outside/cursosTecnicos/ESCOLA.jpg',alt:"Oficina Ginástica na Prática - Ginástica na Escola"},
    {id:15,enderecoHREF:'https://go.hotmart.com/O80874178W',imgSRC:'./assets/img-outside/cursosTecnicos/che.jpg',alt:"Oficina Cheerleading na Prática"},
    {id:16,enderecoHREF:'https://go.hotmart.com/J88588924J',imgSRC:'./assets/img-outside/cursosTecnicos/gg.jpg',alt:"Oficina Ginástica na Prática Prevenção de Lesões através do Treinamento de Força GA"},
    
    
]

let ulCursosTecnicos = document.querySelector('[data-imagens]')

cursosTecnicos.map((item, index)=>{
    let liCursosTecnicos = document.createElement('li')
    liCursosTecnicos.classList.add('baseImagens')
    liCursosTecnicos.innerHTML = 
                `<a href="${item.enderecoHREF}" target="_blank">
                    <img class="imagen" src="${item.imgSRC}" alt="${item.alt}" >    
                </a>`

    ulCursosTecnicos.appendChild(liCursosTecnicos)
})
        