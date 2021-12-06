from functools import reduce as a, reduce

lst = [10,15,20,25,30,35,40]
y = reduce(lambda a,b:a if a>b else b,lst)
print(y)