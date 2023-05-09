
function toggleMode(){
const html = document.documentElement;
html.classList.toggle('light');
const img = document.querySelector("#profile img");
if(html.classList.contains('light')){
    img.setAttribute('src','');
    img.setAttribute('alt','Imagem com problema!')
}else{
    img.setAttribute('src','./assets/Avatar.png')

}

}