let deleteStudent = document.getElementById("delete");
deleteStudent.addEventListener("click", function()
{
    if(confirm("Are You Sure you want to delete this Student?"))
    {
        alert("Deleted Successfully.");
    }
})

let AddStudent =document.getElementById("add");
AddStudent.addEventListener("click" , function()
{
    if (confirm("Are you sure you want to add this student?"))
    {
        alert("Student Added Successfully.");
    }
})

let UpdateStudent=document.getElementById("edit");
UpdateStudent.addEventListener("click", function()
{
    if(confirm("Are you sure you want to update student's data"))
    {
        alert("ok , you can edit now .")
    }
})

let AssignStudent = getElementById("Assign")
AssignStudent.addEventListener("click",function()
{
    if(confirm("Are you sure you want to Assign student's department"))
    {
        alert("Student's department Assigned Successfully.")
    }
})
let ChangeAcitive = getElementById("change")
ChangeAcitive.addEventListener("click",function()
{
    if(confirm("Are you sure you want to modify this"))
    {
        alert("Done!.")
    }
})









