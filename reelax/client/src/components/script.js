const usernameRef = document.getElementById("username");
const passwordRef = document.getElementById("password");
const eyeL = document.querySelector(".eyeball-l")
const eyeR = document.querySelector(".eyeball-r")
const HandL = document.querySelector(".hand-l")
const HandR = document.querySelector(".hand-l")

const stars = document.querySelectorAll(".stars i")

document.addEventListener("DOMContentLoaded", () => {
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
    })
  });
});
});

const normalEyeStyle = () => {
    eyeL.style.cssText = `
  left:0.6em;
  top:0.6em;
   `;
    eyeR.style.cssText = `
  left:0.6em;
  top:0.6em;
   `;
}

const normalHandStyle = () => {
  HandL.style.cssText =`
  height: 2.81em;
  top:8.4em;
  left:7.5em;
  transform: rotate(0deg);
  `;
  HandR.style.cssText =`
  height: 2.81em;
  top:8.4em;
  right:7.5em;
  transform: rotate(0deg);
  `;
}

usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
  left:0.75em;
  top:1.12em;`;
  eyeR.style.cssText = `
  left:0.75em;
  top:1.12em;`;

  normalHandStyle()
})
passwordRef.addEventListener("focus", () => {
    eyeL.style.cssText = `
    left:0.75em;
    top:1.12em;`;
    eyeR.style.cssText = `
    left:0.75em;
    top:1.12em;`;
  
    normalHandStyle()
  })
