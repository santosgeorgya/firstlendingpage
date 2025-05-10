// const inputEl = document.getElementById("inputMain");
// console.log(inputEl);

const inputElByIdMain = document.getElementById("inputMain");
console.log(inputElByIdMain);

inputElByIdMain.addEventListener("change", (e) => {
  e.target.value;
  return console.log(e.target.value);
});

const button = document.querySelectorAll("button[type]");
console.log(button);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function () {
    button[i].classList.toggle("newColorBtn");
    button[i].addEventListener("mouseout", function () {
      button[i].classList.remove("newColorBtn");
    });
  });
}

const menuHome = document.getElementById("menuHome");
console.log(menuHome);

menuHome.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "red";
});

const menuAbout = document.getElementById("menuAbout");
console.log(menuAbout);

const menuServices = document.getElementById("menuServices");
console.log(menuServices);

const menuWork = document.getElementById("menuWork");
console.log(menuWork);

const menuContact = document.getElementById("menuContact");
console.log(menuContact);

console.log(document.getElementsByClassName("button"));
