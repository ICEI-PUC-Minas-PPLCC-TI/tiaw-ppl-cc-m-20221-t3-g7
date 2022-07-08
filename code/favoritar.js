window.onload = () => {
    let usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
    let estrelas = document.getElementsByClassName("star");
    let noticia = JSON.parse(localStorage.getItem("valor_noticia"));
    let favoritos = [];
    let novoFavorito = Object;

    for(let i = 0; i < estrelas.length; i++) {
        estrelas[i].onclick = () => {
            if(estrelas[i].firstChild.nextSibling.getAttribute("fill") == "#") {
                estrelas[i].firstChild.nextSibling.setAttribute("fill", "#FFD540");
                novoFavorito = {"user": usuarioCorrente['id'], 'noticia': noticia['noticia'][0]['id']};
                favoritos.push(novoFavorito);
                sessionStorage.setItem('favoritos', JSON.stringify(favoritos));

                console.log(favoritos);
            }
            else if(estrelas[i].firstChild.nextSibling.getAttribute("fill") == "#FFD540") {
                estrelas[i].firstChild.nextSibling.setAttribute("fill", "#");
                favoritos.splice(favoritos.indexOf({"user": usuarioCorrente['id'], 'noticia': noticia['noticia'][0]['id']}), 1);
                sessionStorage.setItem('favoritos', JSON.stringify(favoritos));

                console.log(favoritos);
            }
        }
    }

}
