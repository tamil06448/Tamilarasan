mytuple = (1,"suraj",2,3,4,5,"raj","suraj")

numlist = []
strlist = []

for i in mytuple:
    print(isinstance(i,str))
    if isinstance(i,str):
        strlist.append(i)
        strtup=tuple(strlist)
    elif isinstance(i,int):
        numlist.append(i)
        numtup=tuple(numlist)
    else:
        pass

print("NUMBER LIST:",numtup)
print("STRING LIST:",strtup)