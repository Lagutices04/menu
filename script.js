const navegacion = document.querySelector("#menu");

const abrir = document.querySelector("#abrir");

const cerrar = document.querySelector("#cerrar");



// si los elementos se llaman por id se usara el #
// si los elementos se llaman por clase se usara el .

abrir.addEventListener('click', () =>{
    //abrir tenga en cuenta este evento cuando se haga click

    navegacion.classList.add("visible");
    //cuando haga click se desplegara el menu

cerrar.addEventListener("click",()=>{
    //cuando haga click en la clase visible remuevalo, y el menu se va a contraierar
    navegacion.classList.remove("visible");

})
});