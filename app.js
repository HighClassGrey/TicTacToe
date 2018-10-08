let cells = document.querySelectorAll('.row');


cells.forEach(function(row) {
 row.addEventListener("click", cellClicked);
 });

function cellClicked(e) { 
    e.target.textContent = 'X';

}


(function () {
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})(); 
