import email
from os import stat
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from .models import Student

def Mainhome(request):
    return render(request , 'student/Mainhome.html')

def index(request):
    return render(request , 'student/index.html')

def add(request):
    if request.method == 'POST':
        ID = request.POST['id']
        Name = request.POST['name']
        BDATE = request.POST['Birthday']
        GPA = request.POST['GPA']
        if 'Department' in request.POST:
            Department = request.POST['Department']
        else:
            Department = False
        Level = request.POST['level']
        Email = request.POST['email']
        Phone = request.POST['phone']
        gender1 = request.POST['gender']
        stat1 = request.POST['stat']
        new_student = Student(sid = ID, name = Name, sBD = BDATE, sgpa = GPA,phone = Phone, email = Email, Dpt = Department , stat = stat1 , gender = gender1, level = Level)
        new_student.save()
    return render(request , 'student/Add.html', {})

def view(request):
    context = {
        'students': Student.objects.all()
    }
    return render(request , 'student/View.html', context)

def studentdetail(request, id):
    stdDetails = Student.objects.get(id = id)
    return render(request , 'student/Student.html',  {'stdDetails' : stdDetails})

def Edit(request, id):
    editStudent = Student.objects.get(id = id)
    return render(request , 'student/Edit.html', {'editStudent' : editStudent})

def editting(request , id):
    student1 = get_object_or_404(Student, id = id)
    ID = request.POST.get('id')
    Name = request.POST.get('name')
    BDATE = request.POST.get('Birthday')
    GPA = request.POST.get('GPA')
    Level = request.POST.get('level')
    Email = request.POST.get('email')
    Phone = request.POST.get('phone')
    gender1 = request.POST.get('gender')
    stat1 = request.POST.get('status')
    student1.name = Name
    student1.sid = ID
    student1.sBD = BDATE
    student1.phone = Phone
    student1.email = Email
    student1.gender = gender1
    student1.stat = stat1
    student1.level = Level
    student1.sgpa = GPA
    student1.save()
    return redirect('view')

        
def department(request, id):
    stdDPT = Student.objects.get(id = id)
    return render(request , 'student/DptAssignment.html', {'stdDPT' : stdDPT})



def result(request):
    if request.method == "POST":
        searched = request.POST.get('searched')
        students = Student.objects.filter(name__contains = searched)
        return render(request , 'student/Results.html' , {'students' : students})
    else:
        return render(request , 'student/Results.html')

def active(request):
    context = {
        'students': Student.objects.all()
    }
    return render(request , 'student/Active-and-Inactive.html' , context)

def deletestudent(request , id):
    stdDetails = Student.objects.get(id = id)
    stdDetails.delete()
    return redirect('view') 

def update_department(request, id):
    student1 = get_object_or_404(Student, id = id)
    department1 = request.POST.get('dep')
    student1.name = student1.name
    student1.sid = student1.sid
    student1.sBD = student1.sBD
    student1.phone = student1.phone
    student1.email = student1.email
    student1.gender = student1.gender
    student1.stat = student1.stat
    student1.level = student1.level
    student1.sgpa = student1.sgpa
    student1.Dpt = department1
    student1.save()
    return redirect('view')