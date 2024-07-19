const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const body = document.body;
const color=document.getElementById("color");

btn.addEventListener("click", colorflip);

function colorflip() {
  let colorcode="#";
  for(let i=0;i<6;i++){
    colorcode+=arr[Math.floor(Math.random() * arr.length)];
  }
  color.innerHTML = colorcode;
  body.style.background = colorcode;
}
