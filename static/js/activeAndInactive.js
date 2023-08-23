document.getElementById("activeStudents").style.display = "none";
document.getElementById("inactiveStudents").style.display = "none";
document.getElementById("active").addEventListener("click", function() {
    document.getElementById("activeStudents").style.display = "block";
    document.getElementById("inactiveStudents").style.display = "none";
  });
document.getElementById("inactive").addEventListener("click", function() {
    document.getElementById("activeStudents").style.display = "none";
    document.getElementById("inactiveStudents").style.display = "block";
  });