const menuBox = document.querySelector(".menu");

let lWidth = window.innerWidth;
console.log(lWidth);

// déclenche la vanne de la matrice dans la page Dev
function matriceTheme() {
    var element = document.body;
    var element2 = document.getElementById('textematrice');
    element.classList.toggle("matrice");
    element2.style.visibility = "visible";
    menuBox.classList.add("menumatrice");
    document.getElementById("buttonmatrix").style.visibility = "hidden";
 }

//     document.getElementById("buttonmatrix").innerHTML = "Voilà c'est tout";


 // menu flottant quand on scroll
 window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        document.getElementById("myBtn").style.display = "block";    
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
 })
