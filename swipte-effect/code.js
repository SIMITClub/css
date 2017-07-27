var target = window.location.hash; window.addEventListener("popstate", function(){
if(target != ""){
document.querySelector("main"). setAttribute("data-previous", target);
}
target = window.location.hash; });