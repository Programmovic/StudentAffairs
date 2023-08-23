// const GPA = document.getElementById("GPA").vlaue,
// Form = document.getElementById("form").vlaue,
// Name = document.getElementById("name").vlaue,
// Email = document.getElementById("email").vlaue,
// BD = document.getElementById("Bd").vlaue,
// Phone = document.getElementById("phone").vlaue,
// Department = document.getElementById("dpt").vlaue,
// ID = document.getElementById("ID").vlaue,
// formStatus = document.getElementById("status"),
// checkNum = document.getElementById("checkNum"),
// checkName = document.getElementById("checkName"),
// checkID = document.getElementById("checkID"),
// checkEmail = document.getElementById("checkEmail"),
// checkGPA = document.getElementById("checkGPA"),
// checkDate = document.getElementById("checkDate");
// var regName = "/^[a-zA-Z]"+"[a-zA-Z]+$/";

// function validateForm() {
//     if(GPA > 4){
//         checkGPA.innerHTML = "Enter Full Name.";
//     }
//   }
let Name = document.querySelector("[name='name']"),
  bDate = document.querySelector("[name='Birthday']"),
  email = document.querySelector("[name='email']"),
  GPA = document.querySelector("[name='GPA']"),
  ID = document.querySelector("[name='id']"),
  phone = document.querySelector("[name='phone']"),
  checkGPA = document.getElementById("checkGPA"),
  checkID = document.getElementById("checkID"),
  checkName = document.getElementById("checkName"),
  checkNum = document.getElementById("checkNum"),
  checkEmail = document.getElementById("checkEmail"),
  formStatus = document.getElementById("status");

Name.addEventListener("input", validate);
bDate.addEventListener("input", validate);
email.addEventListener("input", validate);
GPA.addEventListener("input", validate);
ID.addEventListener("input", validate);
phone.addEventListener("input", validate);

function ValidateName(x) {
  let userName = String(x);
  for (let i = 0; i < userName.length; i++) {
    if (!isNaN(userName.charAt(i)) && !(userName.charAt(i) === " ")) {
      return true;
    }
  }
  return false;
}
function ValidateEmail(input) {
  var validRegex =
    /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;

  if (input.value.match(validRegex) || input.value === "") {
    return false;
  } else {
    return true;
  }
}

document.getElementById("form").addEventListener("submit", function (e) {
  if (validate(e)) {
    e.preventDefault();
    alert("Bad Credentials, Try Again!");
  }
  else{
    if(confirm("Are You Sure you want to update or Add data?")){
      alert("Done Successfully.");
    }
  }
 return true;
});

function validate(e)
 {
  let gpaError = false,
    idError = false,
    phoneError = false,
    nameError = false,
    emailError = false;
  if (GPA.value > 4) 
  {
    checkGPA.style.display = "block";
    checkGPA.innerHTML = "GPA Can't Be More Than 4";
    gpaError = true;
  } 
  else if (GPA.value < 0)
   {
    checkGPA.style.display = "block";
    checkGPA.innerHTML = "GPA Can't Be less Than 0";
    gpaError = true;
  }
   else 
  {
    checkGPA.style.display = "none";
    gpaError = false;
  }
  if (ID.value.length > 8)
   {
    checkID.style.display = "block";
    checkID.innerHTML = "ID Can't Be More Than 8 digits";
    idError = true;
  } 
  else
   {
    checkID.style.display = "none";
    idError = false;
  }
  if (phone.value.length > 11)
   {
    checkNum.style.display = "block";
    checkNum.innerHTML = "Phone Can't Be More Than 11 digits";
    phoneError = true;
  }
   else
    {
    checkNum.style.display = "none";
    phoneError = false;
  }
  if (ValidateName(Name.value))
   {
    checkName.style.display = "block";
    checkName.innerHTML = "Name Can't Conatains Numbers!";
    nameError = true;
  } 
  else 
  {
    checkName.style.display = "none";
    nameError = false;
  }
  if (ValidateEmail(email))
   {
    checkEmail.style.display = "block";
    checkEmail.innerHTML = "Invalid Email!";
    emailError = true;
  }
   else
    {
    checkEmail.style.display = "none";
    emailError = false;
  }
  if
   (
    gpaError === true ||
    idError === true ||
    phoneError === true ||
    nameError === true ||
    emailError === true
  ) 
  {
    formStatus.innerHTML =
      '<i class="fa fa-times" aria-hidden="true"></i>' + "There're Some Errors";
    formStatus.style.backgroundColor = "red";
    formStatus.style.border = "2px solid";
    return true;
  } 
  else
   {
    formStatus.innerHTML =
      '<i class="fa fa-check" aria-hidden="true"></i>' + "There're No Errors";
    formStatus.style.backgroundColor = "green";
    formStatus.style.border = "2px solid";
  }
}

