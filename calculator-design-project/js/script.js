document.title = "Kawsar || Calculator Design"

var loading = document.querySelector("#loader")
window.addEventListener("load", function(){
    loading.style.display = "none"
})

confirm("Hi Iam Engineer MD Kawsar Ahmed (CSE) Iam Junior Web Developars. Welcome My Calculator Project.")

console.log("Website Creator Engineer MD Kawsar Ahmed (CSE)")

window.onbeforeunload = () => true;



function notifaction(){
let titlenotifaction = document.title;
let inflash = false;
function notifaction(){
    document.title = inflash ? "(90) New Notifaction" : titlenotifaction;
    inflash = !inflash;
}
setInterval(notifaction, 1000)
} 
window.onload = notifaction;