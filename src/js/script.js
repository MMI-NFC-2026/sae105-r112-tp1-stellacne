// TODO
aMettreEnRouge = document.querySelector("#aMettreEnRouge");
aMettreEnRouge.style.color = "red";

enRougeSuiteAClick = document.querySelectorAll("#enRougeSuiteAClick");
enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAclick.style.color = "red"
    });

const collH2 = document.querySelectorAll("h2");

collH2.forEach((elm)=>{ 
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red"; 
    }); 
});
