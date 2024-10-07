var json1 = `{
    "Raca": "Pastor Alemão",
    "Imagem":"<img src='img/pastor_alemao-p.jpg' width='200px' height='200px'>"
}`;
var json2 = `{
    "Raca": "Siberian Husky",
    "Imagem":"<img src='img/Siberian-Husky-dog.webp' width='200px' height='200px'>"
}`;
var json3 = `{
    "Raca": "Doberman",
    "Imagem":"<img src='img/doberman_223996249.jpg' width='200px' height='200px'>"
}`;
var json4 = `{
    "Raca": "Shar Pei",
    "Imagem":"<img src='img/shar_pei-39922255.jpg' width='200px' height='200px'>"
}`;
var json5 = `{
    "Raca": "Border Collie",
    "Imagem":"<img src='img/Border Collie.webp' width='200px' height='200px'>"
}`;
var json6 = `{
    "Raca": "Labrador Retriever",
    "Imagem":"<img src='img/YellowLabradorLooking_new.jpg' width='200px' height='200px'>"
}`;
var corpo1 = JSON.parse(json1)
var corpo2 = JSON.parse(json2)
var corpo3 = JSON.parse(json3)
var corpo4 = JSON.parse(json4)
var corpo5 = JSON.parse(json5)
var corpo6 = JSON.parse(json6)

function buscar1(){
    document.getElementById('imagem').innerHTML = corpo1.Imagem
    document.getElementById('Raca').innerHTML = corpo1.Raca
}
function buscar2(){
    document.getElementById('imagem').innerHTML = corpo2.Imagem
    document.getElementById('Raca').innerHTML = corpo2.Raca
}
function buscar3(){
    document.getElementById('imagem').innerHTML = corpo3.Imagem
    document.getElementById('Raca').innerHTML = corpo3.Raca
}
function buscar4(){
    document.getElementById('imagem').innerHTML = corpo4.Imagem
    document.getElementById('Raca').innerHTML = corpo4.Raca
}
function buscar5(){
    document.getElementById('imagem').innerHTML = corpo5.Imagem
    document.getElementById('Raca').innerHTML = corpo5.Raca
}
function buscar6(){
    document.getElementById('imagem').innerHTML = corpo6.Imagem
    document.getElementById('Raca').innerHTML = corpo6.Raca
}