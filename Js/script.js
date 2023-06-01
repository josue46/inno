// Pour basculer l'état de chargement
let form = document.querySelector('form');
form.addEventListener('submit', toogleState);

function toogleState(event){
    event.preventDefault();
    form.classList.add('signed');
}