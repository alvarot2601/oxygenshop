//import {openMenu} from "./functions.js";
import {Slider} from "./classes.js";
import {body, hamburguesa, form, popupForm, popupButton, popup, selector_moneda, sw, openMenu, percentageScroller, returnToTheTopButton, returnToTheTop, sendData, sendPopupData, formValidation, popUpValidation, closePopUp, showPopUp, getApiData, changePrices} from "./functions.js";


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








