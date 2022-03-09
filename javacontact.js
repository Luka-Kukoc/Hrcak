
var mqls = [ // list of window.matchMedia() queries
window.matchMedia("(max-width: 380px)"),
window.matchMedia("(max-width: 768px)"),
window.matchMedia("(max-width: 1000px)"),
window.matchMedia("(max-width: 1440px)"),
window.matchMedia("(max-width: 1600px)")
]

function mediaqueryresponse(mql){

if(mqls[4].matches){
document.getElementById("contactimgbottom").src = "./Slike/L.png";
}

if(mqls[3].matches){
document.getElementById("contactimgbottom").src = "./Slike/M.png";
}

if(mqls[2].matches){
document.getElementById("contactimgbottom").src = "./Slike/S.png";
}

if(mqls[1].matches){
    console.log("700")
document.getElementById("contactimgbottom").src = "./Slike/XS.png";
}

if(mqls[0].matches){
document.getElementById("contactimgbottom").src = "./Slike/XSS.png";
}

}

for (var i=0; i<mqls.length; i++){ // loop through queries
mediaqueryresponse(mqls[i]) // call handler function explicitly at run time
mqls[i].addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
}
