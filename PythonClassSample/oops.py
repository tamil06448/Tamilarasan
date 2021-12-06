"""
class myclass:
    def __init__(self):
        print("this is init method")
    def add(self,a,b):
        return a+b
obj = myclass()
print(obj.add(10,20))"""

"""                         CONSTRUCTER
class myclass:
    def __init__(self,a,b):
        self.a=a
        self.b=b
    def add(self):
        return self.a+self.b
obj = myclass(15,30)
print(obj.add())"""

"""
class myclass:
    def __init__(self,a,b=0):
        self.a=a
        self.b=b
    def add(self):
        return self.a+self.b
obj=myclass(15)
print(obj.add())
obj1 = myclass(15,30)
print(obj1.add())
del(obj1)
print(obj.add())"""

"""
class myclass:
    myclassvar = 'Hello'
    def __init__(self):
        print(self.myclassvar)
    def printinfo(self):
        print(self.myclassvar)
obj=myclass()
obj.myclassvar='How are you'
obj.printinfo()
obj1=myclass()"""

"""
def add(num1=20):
    num=10
    def inner():
        num=20
        print(num+num1)
    inner()
    print(num)
add()"""

"""                         CLASS METHOD
class myclass:
    @classmethod
    def add(cls,a,b):
        return a+b
print(myclass.add(10,20))"""

"""                         STATIC METHOD
class myclass:
    @staticmethod
    def mul(a, b):
        return a * b


print(myclass.mul(10, 20))"""

"""                            __STR METHOD__
class myclass:
    def __str__(self):
        return "this is str method"
obj = myclass()
print(obj)"""

"""                             __REPR METHOD__
class myclass:
    def __repr__(self):
        return "this is str method"
obj = myclass()
print(obj)"""

class employee:
    def __init__(self,age,name,salary):
        self.age = age
        self.name = name
        self.salary = salary
    def displayinfo(self):
        return str.format("my age is {self.age}and"
                          "age is {self.age}and"
                          " i am earming{self.salary}per month")
class salaryincrement:
    def salary_increment(self,e):
        e.salary+=1000
    def displayinfo(self,e):
        return str.format("my age is {e.age}and age is {e.age}and i am earming{e.salary}per month")

obj=employee(25,"Ram",5000)
obj2=salaryincrement()
obj2.salary_increment(obj)
obj2.displayinfo(obj)