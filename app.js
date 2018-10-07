let cells = document.querySelectorAll('.topright');


cells.forEach(function(topright) {
 topright.addEventListener("click", cellClicked);
 });

function cellClicked(e) { 
    e.target.textContent = 'X';

}


(function () {
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})(); 
