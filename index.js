

const encriptar = document.getElementById("boton__encriptador");
const desencriptar = document.getElementById("boton__desencriptador");
const copiar = document.getElementById("boton__copiar");
const textoInicial = document.getElementById("textoInicial");
const textFinal = document.getElementById("mensaje");
const munheco = document.getElementById("img");
const textInfo = document.getElementById("textoInfo");
const encriptado = document.getElementById("encriptado")

const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	encriptado.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese el texto aquí";
	munheco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copiar.classList.remove("boton__ocultar");
}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	munheco.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copiar.classList.add("boton__ocultar");
	textoInicial.focus();
};



let remplazar =[
["e", "enter"],
["i", "imes"],
["a", "ai"],
["o", "ober"],
["u", "ufat"]
];


encriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});


desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	//navigator.clipboard.writeText(texto.value);
	//clipboard función no compatible con móviles
	alert("Texto Copiado");
	reset();
});
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});