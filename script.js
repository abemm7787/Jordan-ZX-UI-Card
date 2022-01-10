
const card =  document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");






container.addEventListener("mousemove",(e) => { 
let xAxis = (window.innerWidth / 2 - e.pageX)/10;
let yAxis = (window.innerHeight / 2 - e.pageY)/10;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;                                              
 }); 
                                       
//Animate In
container.addEventListener("mouseenter", (e) => {
card.style.transition = "none"; 
title.style.transform = "translateZ(150px)";  
sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)"; 
title.style.transform = "translateZ(150px)";  
 });                           
 // Popout






// ANimate Out
 container.addEventListener('mouseleave',(e) => { card.style.transition="all 0.5s ease";
card.style.transform =`rotateY(0deg) rotateX(0deg)`; 
sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});


                            
                            
                            

