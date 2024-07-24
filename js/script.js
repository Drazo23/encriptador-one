const ingreseTexto = document.getElementById ("ingreseTexto");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const derechoInfo = document.getElementById("derechoInfo");
const derecha = document.getElementById("derecha");


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
const remplece = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    ingreseTexto.value = "";
    muneco.classList.add("oculto");
    derechoInfo.style.display = "none";
    botonCopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLowerCase()
    function encriptar(newText){
        for (let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])

            };
        };
        return newText
    }
    remplece(encriptar(texto));
  
});
botonDesencriptar.addEventListener("click", () =>{
    const texto = ingreseTexto.value.toLowerCase();
    function desencriptar(newText){
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0])
            };
        };
        return newText
    }
    remplece(desencriptar(texto));
});

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy');

    mensajeFinal.innerHTML="";
    muneco.classList.remove("oculto");
    derechoInfo.style.display = "block";
    botonCopiar.style.display = "none";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    ingreseTexto.focus();
})
