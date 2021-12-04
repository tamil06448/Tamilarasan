class Student():
    name = "tamilarasan"
    rollno = 110

    def __init__(self):
        pass

    def myIntro(self):
        print("hello this is",self.name,"this is my rollen",self.rollno)

student1 = Student()
student2 = Student()
print(student1.name)
print(student1.rollno)
student1.myIntro()

print(student2.name)
print(student2.rollno)
student2.myIntro()
