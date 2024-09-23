let nucleo1 = document.getElementById("nucleo1");
let nucleo2 = document.getElementById("nucleo2");
let nucleo3 = document.getElementById("nucleo3");

let pantallaInicio = document.getElementById("inicio");
let pantallaDato1 = document.getElementById("dato1");
let pantallaDato2 = document.getElementById("dato2");
let pantallaDato3 = document.getElementById("dato3");

let homeButtonDato1 = document.getElementById("homeButtonDato1");
let artistasButton = document.getElementById("artistasButton");
let programasButton = document.getElementById("programasButton");
let restaurarlasButton = document.getElementById("restaurarlasButton");

let navegarRestauracion = document.getElementById("navegarRestauracion");
let navegarSergio = document.getElementById("navegarSergio");
let navegarPrimerosProgramas = document.getElementById("navegarPrimerosProgramas");
let volverRestauracion = document.getElementById("volverRestauracion");

let imagen1 = document.getElementById("imagen1");
let sergioTexto = document.getElementById("sergioTexto");

let botonPerro = document.getElementById("botonPerro");
let botonPlaya = document.getElementById("botonPlaya");
let botonPersona = document.getElementById("botonPersona");

let imagenRetrato = document.getElementById("imagenRetrato");
let imagenBallet = document.getElementById("imagenBallet");
let imagenAguila = document.getElementById("imagenAguila");


//NUCLEOS PANTALLA INICIO
nucleo1.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato1.classList.replace("disabled", "dato1");
});


nucleo2.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato2.classList.replace("disabled", "dato2");
});



nucleo3.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato3.classList.replace("disabled", "dato3");
});
//FIN NUCLEOS PANTALLA INICIO

//LINKS PANTALLA INICIO

artistasButton.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato3.classList.replace("disabled", "dato3");
});


programasButton.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato1.classList.replace("disabled", "dato1");
});



restaurarlasButton.addEventListener("click", () => {
    pantallaInicio.classList.replace("inicio", "disabled");
    pantallaDato2.classList.replace("disabled", "dato2");
});


//BOTONES HOME


homeButtonDato1.addEventListener("click", () => {
    pantallaInicio.classList.replace("disabled", "inicio");
    pantallaDato1.classList.replace("dato1", "disabled");
});

homeButtonDato2.addEventListener("click", () => {
    pantallaInicio.classList.replace("disabled", "inicio");
    pantallaDato2.classList.replace("dato2", "disabled");
});

homeButtonDato3.addEventListener("click", () => {
    pantallaInicio.classList.replace("disabled", "inicio");
    pantallaDato3.classList.replace("dato3", "disabled");
});

//FIN BOTONES HOME

//BOTONERA NAVEGACION

navegarRestauracion.addEventListener("click", ()=>{
    pantallaDato1.classList.replace("dato1", "disabled");
    pantallaDato2.classList.replace("disabled", "dato2");
})

navegarSergio.addEventListener("click", ()=>{
    pantallaDato2.classList.replace("dato2", "disabled");
    pantallaDato3.classList.replace("disabled", "dato3");
})

navegarPrimerosProgramas.addEventListener("click", ()=>{
    pantallaDato2.classList.replace("dato2", "disabled");
    pantallaDato1.classList.replace("disabled", "dato1");
})

volverRestauracion.addEventListener("click",()=>{
    pantallaDato3.classList.replace("dato3", "disabled");
    pantallaDato2.classList.replace("disabled", "dato2");
})

// FIN BOTONERA NAVEGACION

botonPerro.addEventListener("click",()=>{

    imagenRetrato.classList.replace("disabled","active");
    
    if(imagenBallet.classList.contains("active")){
        imagenBallet.classList.replace("active","disabled");
    }
    if(imagenAguila.classList.contains("active")){
        imagenAguila.classList.replace("active","disabled");
    }
})


botonPlaya.addEventListener("click",()=>{
    imagenBallet.classList.replace("disabled","active");

    if(imagenAguila.classList.contains("active")){
        imagenAguila.classList.replace("active","disabled");
    }

    if(imagenRetrato.classList.contains("active")){
        imagenRetrato.classList.replace("active","disabled");
    }
})

botonPersona.addEventListener("click",()=>{
    imagenAguila.classList.replace("disabled","active");

    if(imagenRetrato.classList.contains("active")){
        imagenRetrato.classList.replace("active","disabled");
    }

    if(imagenBallet.classList.contains("active")){
        imagenBallet.classList.replace("active","disabled");
    }
})
