const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/0e65e7640340a16068734dd46468fb9f.png") {
    myImage.setAttribute("src", "images/gear-5-in-anime-1.png");
  } else {
    myImage.setAttribute("src", "images/0e65e7640340a16068734dd46468fb9f.png");
  }
};

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.getItem("name");
    myHeading.textContent = `Gear Fifth, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
