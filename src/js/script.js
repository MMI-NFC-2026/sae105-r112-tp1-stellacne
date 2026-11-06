// TODO
const collH2 = document.querySelectorAll("h2");

collH2.forEach((elm)=>{ 
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red"; 
    }); 
});