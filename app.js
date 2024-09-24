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

let imagenRetrato = document.getElementById("imagenRetrato");
let imagenBallet = document.getElementById("imagenBallet");
let imagenAguila = document.getElementById("imagenAguila");

//botones cards
let elizaCancelButton = document.getElementById("eliza-cancel-button");
let elizaButton = document.getElementById("bolita-eliza");
let elizaCard = document.getElementById("eliza-card");


let parryCancelButton = document.getElementById("parry-cancel-button");
let parryButton = document.getElementById("bolita-parry");
let parryCard = document.getElementById("parry-card");

let jabberCancelButton = document.getElementById("jabber-cancel-button");
let jabberButton = document.getElementById("bolita-jabber");
let jabberCard = document.getElementById("jabber-card");


let sabaitsoCancelButton = document.getElementById("sabaitso-cancel-button");
let sabaitsoButton = document.getElementById("bolita-sbait");
let sabaitsoCard = document.getElementById("sabaitso-card");

let aliceCancelButton = document.getElementById("alice-cancel-button");
let aliceButton = document.getElementById("bolita-alice");
let aliceCard = document.getElementById("alice-card");


let clippyCancelButton = document.getElementById("clippy-cancel-button");
let clippyButton = document.getElementById("bolita-clippy");
let clippyCard = document.getElementById("clippy-card");

let siriCancelButton = document.getElementById("siri-cancel-button");
let siriButton = document.getElementById("bolita-siri");
let siriCard = document.getElementById("siri-card");

let chatGptCancelButton = document.getElementById("chatGpt-cancel-button");
let chatGptButton = document.getElementById("bolita-chatGpt");
let chatGptCard = document.getElementById("chatGpt-card");


let perroCancelButton = document.getElementById("perro-cancel-button");
let perroCard = document.getElementById("perro-card");
let botonPerroFuturista = document.getElementById("button-perro-futurista");
let botonPerroFigura = document.getElementById("button-perro-figura");

let perroIndividualCancelButton = document.getElementById("perro-individual-cancel-button");
let perroInidividualCard = document.getElementById("card-individual-perro");
let imagenPerroFuturista = document.getElementById("perro-futurista");
let imagenPerroFigura = document.getElementById("perro-figura");



let paisajeCancelButton = document.getElementById("paisaje-cancel-button");
let paisajeCard = document.getElementById("paisaje-card");
let botonPaisajeAbstracto = document.getElementById("button-paisaje-abstracto");
let botonPaisajeRenacentista = document.getElementById("button-paisaje-renacentista");

let paisajeIndividualCancelButton = document.getElementById("paisaje-individual-cancel-button");
let paisajeInidividualCard = document.getElementById("card-individual-paisaje");
let imagenPaisajeAbstracto = document.getElementById("paisaje-abstracto");
let imagenPaisajeRenacentista = document.getElementById("paisaje-renacentista");



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

    perroCard.classList.replace("disabled","image-card");
    
    if(paisajeCard.classList.contains("image-card")){
        paisajeCard.classList.replace("image-card","disabled");
    }
   
})


botonPlaya.addEventListener("click",()=>{
    paisajeCard.classList.replace("disabled","image-card");


    if(perroCard.classList.contains("image-card")){
        perroCard.classList.replace("image-card","disabled");
    }
    if(perroInidividualCard.contains("card-individual")){
        perroInidividualCard.classList.replace("card-individual","disabled")
    }
    if(paisajeInidividualCard.contains("card-individual")){
        paisajeInidividualCard.classList.replace("card-individual","disabled")
    }

})



//CARDS

elizaButton.addEventListener("click",()=>{
    elizaCard.classList.replace("disabled", "card-container");
})

elizaCancelButton.addEventListener("click", ()=>{
    elizaCard.classList.replace("card-container", "disabled");
})



parryButton.addEventListener("click",()=>{
    parryCard.classList.replace("disabled", "card-container");
})

parryCancelButton.addEventListener("click", ()=>{
    parryCard.classList.replace("card-container", "disabled");
})



jabberButton.addEventListener("click",()=>{
    jabberCard.classList.replace("disabled", "card-container");
})

jabberCancelButton.addEventListener("click", ()=>{
    jabberCard.classList.replace("card-container", "disabled");
})



sabaitsoButton.addEventListener("click",()=>{
    sabaitsoCard.classList.replace("disabled", "card-container");
})

sabaitsoCancelButton.addEventListener("click", ()=>{
    sabaitsoCard.classList.replace("card-container", "disabled");
})


aliceButton.addEventListener("click",()=>{
    aliceCard.classList.replace("disabled", "card-container");
})

aliceCancelButton.addEventListener("click", ()=>{
    aliceCard.classList.replace("card-container", "disabled");
})



clippyButton.addEventListener("click",()=>{
    clippyCard.classList.replace("disabled", "card-container");
})

clippyCancelButton.addEventListener("click", ()=>{
    clippyCard.classList.replace("card-container", "disabled");
})



siriButton.addEventListener("click",()=>{
    siriCard.classList.replace("disabled", "card-container");
})

siriCancelButton.addEventListener("click", ()=>{
    siriCard.classList.replace("card-container", "disabled");
})

chatGptButton.addEventListener("click",()=>{
    chatGptCard.classList.replace("disabled", "card-container");
})

chatGptCancelButton.addEventListener("click", ()=>{
    chatGptCard.classList.replace("card-container", "disabled");
})




perroCancelButton.addEventListener("click", ()=>{
    perroCard.classList.replace("image-card", "disabled");
})

botonPerroFuturista.addEventListener("click", ()=>{
    perroInidividualCard.classList.replace("disabled", "card-individual");
    perroCard.classList.replace("image-card", "disabled");
    imagenPerroFuturista.classList.replace("disabled","image-perro");
    
    imagenPerroFigura.classList.replace("image-perro","disabled");
})

botonPerroFigura.addEventListener("click", ()=>{

    perroInidividualCard.classList.replace("disabled", "card-individual");
    perroCard.classList.replace("image-card", "disabled");

    imagenPerroFigura.classList.replace("disabled","image-perro");
    imagenPerroFuturista.classList.replace("image-perro","disabled");

})


perroIndividualCancelButton.addEventListener("click", ()=>{
    perroInidividualCard.classList.replace("card-individual", "disabled");
})




paisajeCancelButton.addEventListener("click", ()=>{
    paisajeCard.classList.replace("image-card", "disabled");
})

botonPaisajeAbstracto.addEventListener("click", ()=>{
    paisajeInidividualCard.classList.replace("disabled", "card-individual");
    paisajeCard.classList.replace("image-card", "disabled");
    imagenPaisajeAbstracto.classList.replace("disabled","image-perro");
    
    imagenPaisajeRenacentista.classList.replace("image-perro","disabled");
})

botonPaisajeRenacentista.addEventListener("click", ()=>{

    paisajeInidividualCard.classList.replace("disabled", "card-individual");
    paisajeCard.classList.replace("image-card", "disabled");

    imagenPaisajeRenacentista.classList.replace("disabled","image-perro");
    imagenPaisajeAbstracto.classList.replace("image-perro","disabled");

})


paisajeIndividualCancelButton.addEventListener("click", ()=>{
    paisajeInidividualCard.classList.replace("card-individual", "disabled");
})



