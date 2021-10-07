/*Abre e fecha o menu quando clica nos ícones*/

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header nav .toggle');

for(const element of toggle){
  element.addEventListener("click",function (){
    nav.classList.toggle("show");
  })
}

const links = document.querySelectorAll('#header nav ul li a');

for(const link of links){
  link.addEventListener("click", function (){
    nav.classList.remove("show")
  })
}

/*Adicionar classe ao header com o scroll da página*/

const header = document.querySelector("#header");
const navHeight = header.offsetHeight

window.addEventListener("scroll", function(){
  if(window.scrollY >= navHeight){
    header.classList.add("scroll");
  }else{
    header.classList.remove("scroll");
  }
})