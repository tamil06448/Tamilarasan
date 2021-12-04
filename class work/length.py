mylist = [1,2,3,4,5,6,7]
newlist = []

for i in range(0,len(mylist)):
        newlist.insert(-i,mylist[-i])

newlist