function openMenu(hamburguesa){
	const ul = document.querySelector(".header__ul-2")
	const header = document.querySelector("header");
	//si contiene la clase not-display debe mostrar el ul cada vez que se haga click en la hamburguesa
	if(ul.classList.contains("not-display"))
	{
		ul.classList.remove("not-display");
		header.classList.add("header-open");
		hamburguesa.style.backgroundImage = "url('./images/x.svg')";
	}
	else
	{
		header.style.paddingBottom = "0px";
		ul.classList.add("not-display");
		hamburguesa.style.backgroundImage = "url('./images/open-menu.svg')";
	}
}
export openMenu;