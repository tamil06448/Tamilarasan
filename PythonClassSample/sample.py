""""
def func(*a):
    sum=0
    for i in a:
            sum+=i
    return sum
print(func( ))
"""
"""
def func(**k):
    print(k)

func(a=10,b=20,c=30)
"""
"""def func(**k):
    for i,j in k.items():
        print(i,j)
func(a=10,b=20,c=30)"""

"""def func (x):
    a,b=0,1
    print(a,b,sep=",",end=",")
    for i in range(2,x):
        temp=a+b
        a = b
        b = temp
        print(temp,end=",")
func(10)"""

"""def func(x):
    if (x<=0):
        return 2
    else:
        return func(x-1)+func(x-2)
for i in range(10):
    print(func(i))"""

"""lst = [10,12,15,18,21,25]
x=filter(lambda x:(x%2==0),lst)
print(list(x))"""

"""                                                         LAMBDA FUNCTION
lst = ["Amar","Bhim","chema","David","Anitha","akul","Durga"]
x = list(filter(lambda x:(x.startswith('A')),lst))
print(x)"""

"""                         MAP FUNCTION
lst = [1,2,3,4,5]
x=list(map(lambda x:(x*3),lst))
print(x)"""

"""
lst = [1,2,3,4,5]
def func(x):
    return x*3
x=list(map(func,lst))
print(x)"""

'''                             LAMBDA FUNCTION
from functools import reduce as a, reduce

lst = [10,15,20,25,30,35,40]
y = reduce(lambda a,b:a if a>b else b,lst)
print(y)'''

"""                         DECOUR FUNCTION
def decorPlus(func):
    def inner():
        print("++++++++++++++++++++++++++++++++++")
        func()
        print("++++++++++++++++++++++++++++++++++")
    return inner
def decorStar(func):
    def inner():
        print("*********************************")
        func()
        print("*********************************")
    return inner
@decorPlus
@decorStar
def myfunc():
    print("this is main line")
myfunc()"""

"""
def decor(func):
    def inner(a,b):
        print("first line ")
        x=func(a,b)
        return x
    print("last line")
    return inner
@decor
def addition(a,b):
    return(a+b)
print(addition(1,3))"""

"""
lst=['Apple','banana','orange','pineapple','papaya']
def mygen():
    for val in lst:
        yield val
x=mygen()
print(x.__next__())
print(x.__next__())"""

"""
def range(limit):
    temp=0
    while(temp<limit):
        yield temp
        temp += 1
for i in range(100):
    print(i)"""

def range(limit):
    temp=0
    while(temp<limit):
        yield temp
        temp += 1
print(__name__)









