document.addEventListener("DOMContentLoaded", function(){
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("close");
    const form = document.getElementById("modalForm");

    openModalBtn.onclick = function(){
        modal.style.display = "block";
    }

    closeModalBtn.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }

    form.onsubmit = function(event){
        event.preventDefault();
        alert("Mensagem Enviada Com sucesso!");
        modal.style.display = "none";
    }
});