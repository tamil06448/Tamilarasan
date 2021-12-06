"""                     LIST.COPY
lst = [1,2,3,4,5,3,2,1,10,20,10]
print(lst.count(4))
print(lst.count(2))
print(lst.count(10))
lst2=lst.copy()
lst3=lst"""
"""                     LIST.REMOVE
lst = [1,2,3,4,5,3,2,1,10,20,10]
x=lst.remove(10)
print(x)
print(lst)"""
"""                     LIST.POP
lst = [1,2,3,4,5,3,2,1,10,20,10]
x=lst.pop(4)
print(x)
print(lst)"""

"""                     LIST.APPEND            
lst1 = [1,2,3,4,5]
lst2 = [10,20,30,40,50]

def addlist():
    lst=[]
    for i,j in zip(lst1,lst2):
        lst.append(i+j)
    return lst
print(addlist())"""

"""lst1 = [1,2,3,4,5]
lst2 = [10,20,30,40,50,60,70,80,90,100]

def addlist():
    lst=[]
    for i,j in zip(lst1,lst2):
        lst.append(i+j)
    return lst
print(addlist())"""

"""                             QUIZ QUESTION
check1 = ['learn','quiz','prace','continue']
check2 = check1
check3 = check1[:]
print(check1 is check2)
print(check2 is check3)
check2[0] = 'code'
check3[1] = 'mcq'
count = 0

for c in (check1,check2,check3):
    if c[0]=='code':
        count+=1
    if c[2]=='mcq':
        count+=0
    print(count)"""

"""lst = [1,2,3,4,5]
   print(lst[::-2])"""
""""
str = 'Hello'
print(min(str))"""

"""                     SORT(NONE)
lst = [1,2,4,3,9,8,10]
x=lst.sort()
print(x)"""

lst = [[1,2,3,4,5],['a','b','c'],8]
print(len(lst))








