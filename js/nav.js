// JavaScript File// JavaScript File
let icon= document.getElementById("icon");
let nav= document.getElementById("myNav");

icon.addEventListener("click",()=>{
  if(!nav.classList.contains("responsive")){
    nav.classList.add("responsive");
  }else{
    nav.classList.remove("responsive")
  }
})