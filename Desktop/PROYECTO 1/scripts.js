const hamburguesa = document.getElementById("hamburguer-button");
hamburguesa.addEventListener("click",openMenu);
function openMenu(){
	let ul = document.querySelector(".header__ul-2")
	let header = document.querySelector("header");
	if(ul.style.display == 'none' || ul.style.display == '')
	{
		ul.style.display = "block";
		header.style.height = "auto";
	}
	else
	{
		ul.style.display = "none";
	}
}