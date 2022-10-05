const hamburguesa = document.getElementById("hamburguer-button");
hamburguesa.addEventListener("click",openMenu);
function openMenu(){
	let ul = document.querySelector(".header__ul-2")
	let header = document.querySelector("header");
	if(ul.style.display == 'none' || ul.style.display == '')
	{
		ul.style.display = "block";
		header.style.height = "auto";
		header.style.paddingBottom = "33.65px";
	}
	else
	{
		header.style.paddingBottom = "0px";
		ul.style.display = "none";
	}
}