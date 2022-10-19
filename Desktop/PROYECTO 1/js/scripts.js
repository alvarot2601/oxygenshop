//import {openMenu} from "./functions.js";
import {Slider} from "./classes.js";
import {openMenu, percentageScroller, returnToTheTopButton, returnToTheTop, sendData, sendPopupData, formValidation, popUpValidation, closePopUp, showPopUp, getApiData, changePrices} from "./functions.js";
const body = document.querySelector("body");
const hamburguesa = document.getElementById("hamburguer-button");
const form = document.querySelector("form");
const popupForm = document.getElementById("popupform")
const popupButton = document.querySelector(".popup__button");
const popup = document.querySelector(".popup");
const selector_moneda = document.querySelector("select");

//EVENTOS

hamburguesa.addEventListener("click",openMenu);

window.addEventListener("load", percentageScroller);
window.addEventListener("scroll", percentageScroller);

//para asignar el evento al botón que se crea dinámicamente
document.addEventListener("click", (e)=> {
	if(e.target && e.target.id == 'returnTop')
	{
		setTimeout(returnToTheTop, 200);
	}
}, true);

form.addEventListener("submit", formValidation);
popupForm.addEventListener("submit", (e)=>{
	sendPopupData();
	e.preventDefault();
});

//para mostrar popup despues d 5s
window.addEventListener("load", ()=>{
	setTimeout( () =>{
		if(sw === false)
		{
			showPopUp();
		}
	}, 5000);
});
 //para cerrar el popup
popupButton.addEventListener("click", closePopUp);

popup.addEventListener("click", (e)=>{
	if(e.target.id == "popup")
		closePopUp();
});

selector_moneda.addEventListener("change", changePrices);

window.addEventListener('load', () => {new Slider('slider');});








