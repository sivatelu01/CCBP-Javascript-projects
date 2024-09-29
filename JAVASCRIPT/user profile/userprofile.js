let profileDetails = {
  imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: 25
};
let imgContainermain=document.getElementById("imgContainer");
imgContainermain.classList.add("place")
let img1=document.createElement("img")
img1.setAttribute("src",profileDetails.imgSrc)
img1.classList.add("image")
imgContainermain.appendChild(img1)

let heading1=document.createElement("h1")
heading1.textContent=profileDetails.name;
heading1.classList.add("heading")
imgContainermain.appendChild(heading1);

let age1=document.createElement("p")
age1.textContent="Age: "+(profileDetails.age)
age1.classList.add("age1")
imgContainermain.appendChild(age1)