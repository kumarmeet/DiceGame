"use strict";

const diceGame = {
	randomNumber: null,
	randomDiceImg: null,
	randomImageSource: null,

	elements: {
		image1: null,
		image2: null,
		heading: null,
	},

	setRandomNumber(num) {
		this.randomNumber = Math.floor(Math.random() * num) + 1;
	},

	getRandomNumber() {
		return this.randomNumber;
	},

	randomization(num) {
		this.setRandomNumber(num);
		this.randomDiceImg = `dice${this.randomNumber}.png`;
		this.randomImageSource = `images/${this.randomDiceImg}`;
	},

	setElements(img1, img2, head) {
		if (img1) {
			this.elements.image1 = document.querySelector(`.${img1}`);
		} else if (img2) {
			this.elements.image2 = document.querySelector(`.${img2}`);
		} else if (head) {
			this.elements.heading = document.querySelector(`.${head}`);
		}
	},

	imageOneSetAttri() {
		this.setElements("img1");
		this.randomization(6);
		this.elements.image1.setAttribute("src", this.randomImageSource);
		return this.getRandomNumber();
	},

	imageTwoSetAttri() {
		this.setElements("", "img2", "");
		this.randomization(6);
		this.elements.image2.setAttribute("src", this.randomImageSource);
		return this.getRandomNumber();
	},

	winner() {
		this.setElements("", "", "container h1");
		const p1 = this.imageOneSetAttri();
		const p2 = this.imageTwoSetAttri();

		if (p1 > p2) {
			this.elements.heading.textContent = "Player One Wins";
		} else if (p1 < p2) {
			this.elements.heading.textContent = "Player Two Wins";
		} else {
			this.elements.heading.textContent = "Draw";
		}
	},

	init() {
		this.imageOneSetAttri();
		this.imageTwoSetAttri();
		this.winner();
	},
};

diceGame.init();
