"use strict";
function onMouseDown(e) {
	const element = e.target.parentElement;
	if (!element.classList.contains("key")) return;
	element.classList.add("selected");
	const audio = document.querySelector(
		`audio[data-key = "${element.getAttribute("data-key")}"]`
	);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}
function removeEffect(e) {
	const element = e.target;
	element.classList.remove("selected");
}
function onkeydown(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return;

	key.classList.add("selected");
	audio.currentTime = 0;
	audio.play();
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((div) => div.addEventListener("mousedown", onMouseDown));
keys.forEach((div) => div.addEventListener("transitionend", removeEffect));
window.addEventListener("keydown", onkeydown);
