class Student():
    univercity = "IIIT"

    def __init__(self,name,rollno):
        self.name = name
        self.rollno = rollno

    def myIntro(self):
        print("hello this is",self.name,"this is my rollen",self.rollno,"and my univercity",self.univercity)

student1 = Student("raj",111)
student2 = Student("ram",222)
print(student1.name)
print(student1.rollno)
student1.myIntro()

print(student2.name)
print(student2.rollno)
student2.myIntro()
