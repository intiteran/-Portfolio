let fondo = document.querySelector(".fondo-oscuro");


function abrirProyectos(){
    let proyectos = document.getElementById("proyectos");
    proyectos.classList.toggle("abierto"); 
    fondoOscuro();
}

function abrirContacto(){
    let contacto = document.getElementById("contacto");
    contacto.classList.toggle("abierto"); 
    fondoOscuro();
}

function fondoOscuro(){
    if(fondo.classList.contains("activo")){
        fondo.classList.remove("activo");   
    } else{
        fondo.classList.add("activo");   
    }
}

function formulario() {
    document.querySelector("#form").addEventListener("submit", (async function(e) {
        e.preventDefault();
        const o = new FormData(this);
        (await fetch(this.action, {
            method: this.method,
            body: o,
            headers: {
                Accept: "application/json"
            }
        })).ok && (this.reset(),
        alert("Gracias por contactarme, te escribire pronto!"))
    }
    ))
}

