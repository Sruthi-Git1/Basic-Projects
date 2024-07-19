const dec=document.getElementById("dec");
const res=document.getElementById("res");
const inc=document.getElementById("inc");
const dis=document.getElementById("count");
dec.addEventListener("click",decrease);
res.addEventListener("click",reset);
inc.addEventListener("click",increase);
let count=0;
function decrease(){
  count--;
  dis.innerHTML=count;
  if(count<0){
    dis.style.color="red";
  }
  if(count>0){
    dis.style.color="green";
  }
  if(count==0){
    dis.style.color="black";
  }
}
function increase(){
  count++;
  dis.innerHTML=count;
  if(count<0){
    dis.style.color="red";
  }
  if(count>0){
    dis.style.color="green";
  }
  if(count==0){
    dis.style.color="black";
  }
}
function reset(){
  count=0;
  dis.innerHTML=count;
  if(count<0){
    dis.style.color="red";
  }
  if(count>0){
    dis.style.color="green";
  }
  if(count==0){
    dis.style.color="black";
  }
}

