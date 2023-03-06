/*The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
 */
/*
cloudButton->class.cloud(button)
sunButton->class.sun(button)
water->water(will move)

search for add evenet listener -> good when activating for click button
*/

const cloudButton = document.querySelector(".cloud");
const sunButton = document.querySelector(".sun");
const water = document.querySelector(".water");

cloudButton.addEventListener("click", () => {
  let fillWaterAmount = Math.floor(Math.random() * 40) + 60;
  /*make slower number high*/
  water.style.height = `${fillWaterAmount}%`;
});
/* dollar sign for shortcut in JS // and water(htmlcode)style(css)height of water element which is 400px..?*/
/*difference between var and let..?dunno but use let since it means it can change
random number between 0-40 add 60 to make it bigger-> if confusinf go codeacademy free course again*/
sunButton.addEventListener("click", () => {
  let decreaseAmount = Math.floor(Math.random() * 30) + 10;
  /*parseFloar will bring the string again(?) Ask 예은 again*/
  let currentHeight = parseFloat(water.style.height);
  /*makes 100px to 100. extract numerical value to math. Making it string,,,
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat*/
  let newHeight = currentHeight - decreaseAmount;
  water.style.height = `${newHeight}%`;
});
