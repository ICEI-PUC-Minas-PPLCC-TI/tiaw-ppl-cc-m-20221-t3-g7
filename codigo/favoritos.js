
let botaoStar = document.getElementById("star-button")
let estrela = document.getElementById("star");
let listaNoticaDb = []

// var listaNoticaDb = JSON.parse(localStorage.getItem('db_noticia'))
var dbFavoritos = {
    favoritos: [{

    }]
}

function trocaCorEstrela() {

    if(estrela.firstChild.nextSibling.getAttribute('fill') == "none") {
        console.log("estrela colorido")

        const params = new URLSearchParams(location.search);
        let idNoticia = params.get('id');
        
        dbFavoritos.favoritos.push(idNoticia)

        console.log(dbFavoritos);

        estrela.firstChild.nextSibling.setAttribute("fill", "#be2525");
    } else {
        console.log("estrela none")

        estrela.firstChild.nextSibling.setAttribute("fill", "none");
    } 
}

botaoStar.addEventListener("click", () => {

    
    trocaCorEstrela()

})
