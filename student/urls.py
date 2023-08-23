from operator import index
from django.urls import path
from . import views
urlpatterns = [
    path('' , views.Mainhome , name = 'Mainhome'),
    path('index.html' , views.index , name = 'index'),
    path('Add' , views.add , name = 'add'),
    path('View.html' , views.view , name = 'view'),
    path('Student/<int:id>' , views.studentdetail , name = 'studentdetail'),
    path('edit/<int:id>' , views.Edit , name = 'Edit'),
    path('DptAssignment/<int:id>' , views.department , name = 'dept'),
    path('Results.html' , views.result , name = 'result'),
    path('active' , views.active , name = 'active' ),
    path('delete_student/<int:id>' , views.deletestudent , name = 'delete'),
    path('editting/<int:id>' , views.editting , name = 'editting'),
    path('dept/<int:id>' , views.update_department , name = 'department')
    
]
