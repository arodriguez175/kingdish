/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Auto-updating Copyright Year
document.getElementById("footer").innerHTML="Copyright&copy; "+(new Date().getFullYear())+", KingDish. All Rights Reserved";
