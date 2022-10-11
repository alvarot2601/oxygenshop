//import {openMenu} from "./functions.js";
const body = document.querySelector("body");
const hamburguesa = document.getElementById("hamburguer-button");
const form = document.querySelector("form");
function openMenu(){
	const ul = document.querySelector(".header__ul-2")
	const header = document.querySelector("header");
	//si contiene la clase not-display debe mostrar el ul cada vez que se haga click en la hamburguesa
	if(ul.classList.contains("not-display"))
	{
		ul.classList.remove("not-display");
		header.classList.add("header-open");
		hamburguesa.style.backgroundImage = "url('./images/x-blue.svg')";
	}
	else
	{
		header.classList.remove("header-open");
		ul.classList.add("not-display");
		hamburguesa.style.backgroundImage = "url('./images/open-menu.svg')";
	}
}

function percentageScroller()
{
	
	const percentageScrollerDiv = document.querySelector("#percentage-scroller");
	const documentHeight = document.body.clientHeight;
	let windowHeight = window.innerHeight;
	let heightScrolled = window.pageYOffset;
	const bodyDocument = document.body.offsetHeight;
	let actualPercentage = ((heightScrolled + windowHeight) * 100) / bodyDocument;
	if(actualPercentage>100)
		actualPercentage = 100;
	percentageScrollerDiv.style.width = actualPercentage + "%";
	//enviamos porcentaje a la funcion que crea y muestra el boton returntothetop para que lo muestre cuando el usuario baje un 25%
	returnToTheTopButton(actualPercentage);
	//alert(percentageScrollerDiv.style.width);

}

function returnToTheTopButton(percentage)
{
	if(percentage<25 && document.getElementById('returnTop'))
	{
		document.getElementById('returnTop').remove();
		return  false;
	}
	else if(percentage>=25 && !document.getElementById('returnTop'))
	{
		const button = document.createElement("button");
		button.textContent = "TOP";
		button.id = "returnTop";
		button.style.width = "80px";
		button.style.height = "80px";
		button.style.borderRadius = "50px";
		button.style.position = "fixed";
		button.style.bottom = "50px";
		button.style.right = "50px";
		button.style.background = "#08A6E4";
		button.style.border = "none";
		button.style.fontFamily = "Open Sans";
		button.style.color = "#FFFFFF";
		button.style.fontWeight = "700";
		body.appendChild(button);
	}	
}
//funcion para scrollear hasta el top mediante js
function returnToTheTop(){
	const interval = setInterval(() =>{
		let actualYCoord = window.pageYOffset;
		let nextYCoord = window.pageYOffset-15;
		window.scrollTo(actualYCoord, nextYCoord);
		if(actualYCoord<=0)
			clearInterval(interval);
	},1);
}
//funcion  para validar los campos del formulario
function formValidation(event)
{
	const usernameRegex  = /^[A-Za-zÀ-ÿ\s]{2,100}$/;
	const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const usernameInput = document.querySelector("input#username");
	const mailInput = document.querySelector("input#usermail");
	if(!usernameRegex.test(usernameInput.value))
	{
		usernameInput.style.borderBottom = "1px solid red";
		event.preventDefault();
		return false;
	}
	else
	{
		usernameInput.style.borderBottom = "none";
	}
	if(!mailRegex.test(mailInput.value))
	{
		mailInput.style.borderBottom = "1px solid red";
		event.preventDefault();
		return false;
	}
	else
	{
		usernameInput.style.borderBottom = "none";
	}
}

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




