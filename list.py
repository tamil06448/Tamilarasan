mylist = [1,"suraj",2,3,4,5,"raj","suraj"]

numlist = []
strlist = []

for i in mylist:
    print(type(i))
    print(isinstance(i,str))
    if isinstance(i,str):
        strlist.append(i)
    elif isinstance(i,int):
        numlist.append(i)
    else:
        print("no match")

print(numlist)
print(strlist)