class Person():
    def __init__(self,name,aadhar):
        self.name = name
        self.aadhar = aadhar

    def myIntro(self):
        print("hello this is",self.name,"this is my id",self.aadhar)

class Student(Person):
    def __init__(self,name,aadhar,marks):
        super().__init__(name,aadhar)
        self.marks = marks

    def myIntro(self):
        print("hello this is",self.name,"this is my id",self.aadhar,"my marks is",self.marks)

class Employee(Person):
    def __init__(self,name,aadhar,salary):
        super().__init__(name,aadhar)
        self.salary = salary

    def myIntro(self):
        print("hello this is",self.name,"my id is",self.aadhar,"my salary is",self.salary)

student = Student("tamil",45,90)
employee = Employee("ramesh",666,9000)

student.myIntro()
employee.myIntro()