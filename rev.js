const reviews = [
  {
    img: "assets/rev1.jpeg",
    pername: "Susan Smith",
    role: "WEB DEVELOPER",
    rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque vitae in porro similique culpa accusantium consequatur, ducimus deleniti molestiae repudiandae iste. Voluptatum non voluptates tenetur quis sapiente nostrum asperiores, illum praesentium, magni repellendus, earum molestiae nobis enim repellat. Ipsa?"
  },
  {
    img: "assets/rev2.jpeg",
    pername: "Richard",
    role: "SOFTWARE DEVELOPER",
    rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque vitae in porro similique culpa accusantium consequatur, ducimus deleniti molestiae repudiandae iste. Voluptatum non voluptates tenetur quis sapiente nostrum asperiores, illum praesentium, magni repellendus, earum molestiae nobis enim repellat. Ipsa?"
  },
  {
    img: "assets/rev3.jpeg",
    pername: "Charle",
    role: "WEB DEVELOPER",
    rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque vitae in porro similique culpa accusantium consequatur, ducimus deleniti molestiae repudiandae iste. Voluptatum non voluptates tenetur quis sapiente nostrum asperiores, illum praesentium, magni repellendus, earum molestiae nobis enim repellat. Ipsa?"
  },
  {
    img: "assets/rev4.jpeg",
    pername: "Adam",
    role: "TECHNICAL ANALYST",
    rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque vitae in porro similique culpa accusantium consequatur, ducimus deleniti molestiae repudiandae iste. Voluptatum non voluptates tenetur quis sapiente nostrum asperiores, illum praesentium, magni repellendus, earum molestiae nobis enim repellat. Ipsa?"
  },
  {
    img: "assets/rev5.jpeg",
    pername: "George Hitler",
    role: "SENIOR DEVELOPER",
    rev: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloremque vitae in porro similique culpa accusantium consequatur, ducimus deleniti molestiae repudiandae iste. Voluptatum non voluptates tenetur quis sapiente nostrum asperiores, illum praesentium, magni repellendus, earum molestiae nobis enim repellat. Ipsa?"
  }
];

let counter = 0;

const img = document.getElementById("img");
const pername = document.getElementById("name");
const role = document.getElementById("role");
const rev = document.getElementById("rev");
const left = document.getElementById("left");
const right = document.getElementById("right");
const btn = document.getElementById("btn");

function showReview(index) {
  img.src = reviews[index].img;
  pername.textContent = reviews[index].pername;
  role.textContent = reviews[index].role;
  rev.textContent = reviews[index].rev;
}
showReview(counter);

left.addEventListener("click", () => {
  counter = (counter - 1 + reviews.length) % reviews.length;
  showReview(counter);
});

right.addEventListener("click", () => {
  counter = (counter + 1) % reviews.length;
  showReview(counter);
});

btn.addEventListener("click", () => {
  counter = Math.floor(Math.random() * reviews.length);
  showReview(counter);
});
