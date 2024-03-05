function Cards(tempData){

    const tarjeta=document.Cards('div')
    tarjeta.classList.add("cards")
    const titulo= document.Cards('h3')
    const imagen= document.Cards('poster')

    titulo.innerHTML=title;
    imagen.src=poster;

    titulo.classList.add("title")
    imagen.classList.add("img")

    tarjeta.appendChild(titulo)
    tarjeta.appendChild(imagen)

    const conteiner=document.getElementById("CardsContenier")
    conteiner.appendChild(tarjetas)

    return tarjetas;

}   
const contenedor = document.getElementById("contenedor");
contenedor.innerHTML = tempData.map(movie => crearTarjeta(movie)).join('');




console.log(tempData);
