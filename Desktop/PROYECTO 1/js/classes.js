export class Slider{
	constructor(id){
		this.slider = document.querySelector(`#${id}`);
		this.imgCounter = document.querySelector("#container-slider").children.length;
		this.actualImgCounter = 0;
		this.actualImage = document.querySelector("#container-slider").children[this.actualImgCounter];
		this.prevButton = this.slider.querySelector("button:nth-of-type(1)");
		this.nextButton = this.slider.querySelector("button:nth-of-type(2)");
		this.actualCircle =  document.querySelector("#circle-container-slider").children[this.actualImgCounter];
		this.eventListeners();
		this.autoSlide();
	}
	nextImg(){
		this.actualImage.classList.add('not-display');
		(this.actualImgCounter == this.imgCounter - 1) ? this.actualImgCounter = 0 : this.actualImgCounter++;
		this.actualImage = document.querySelector("#container-slider").children[this.actualImgCounter];
		this.actualImage.classList.remove('not-display');
		this.actualCircle.classList.remove('slider__circle--active');
		this.actualCircle = document.querySelector("#circle-container-slider").children[this.actualImgCounter];
		this.actualCircle.classList.add('slider__circle--active');
	}
	prevImg(){
		this.actualImage.classList.add('not-display');
		(this.actualImgCounter == 0) ? this.actualImgCounter = this.imgCounter - 1 : this.actualImgCounter--;
		this.actualImage = document.querySelector("#container-slider").children[this.actualImgCounter];
		this.actualImage.classList.remove('not-display');
		this.actualCircle.classList.remove('slider__circle--active');
		this.actualCircle = document.querySelector("#circle-container-slider").children[this.actualImgCounter];
		this.actualCircle.classList.add('slider__circle--active');
	}		
	autoSlide(){
		setInterval(() => {
			this.nextImg();
		},4000);
	}
	eventListeners()
	{
		this.prevButton.addEventListener('click', this.prevImg.bind(this));
		this.nextButton.addEventListener('click', this.nextImg.bind(this))
	}
}