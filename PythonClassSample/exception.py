"""
def calc(x,y):
    try:
        return x/y
    except:
        return x/1
x=calc(10,0)
print(x)"""

"""
def calc(x,y):
    try:
        return x/y
    except TypeError:
        return x/1

x=calc(10,0)
print(x)"""

"""
def calc(x,y):
    try:
        return x/y
    except (ZeroDivisionError):
        return x/1

x=calc(10,0)
print(x)"""

"""
def calc(x,y):
    try:
        print(x/y)
    except (ZeroDivisionError):
        print(x/1)
    finally:
        print("finalyblock")
    print("end of program")

x=calc(10,0)
print(x)"""

"""
def calc(x,y):
    try:
        print(x/y)
    except TypeError:
        print(x/1)
    finally:
        print("finalyblock")
    print("end of program")

x=calc(10,1)"""

"""
def calc(x,y):
    try:
        print(x/y)
    except TypeError:
        print(x/1)
    else:
        print("else block")
    print("end of program")


x=calc(10,'1')"""

"""
class Ageexception(Exception):
    def __init__(self,age):
        self.age=age
        super().__init__("age is not eligabel")
age=int(input("please provide age"))
if not 18<age<35:
    raise Ageexception(age)
else:
    print("eligable for job")"""
