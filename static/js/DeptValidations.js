let Dept = document.getElementById("Dpt");
function getSelectValue() {
    var selectedValue = document.getElementById("levels").value;
    if (selectedValue === "Level 1" || selectedValue === "Level 2") {
      Dept.disabled = true;
      Dept.placeholder = "Not Allowed! (level 3 or Above)";
      Dept.style.backgroundColor = "red";
      Dept.style.cursor = "not-allowed";
      Dept.style.border = "2px solid";
    } else {
      Dept.disabled = false;
      Dept.placeholder = "Enter Department";
      Dept.style.backgroundColor = "var(--nav-color)";
      Dept.style.cursor = "text";
      Dept.style.border = "1px solid rgb(99, 57, 57)";
    }
  }
  getSelectValue();