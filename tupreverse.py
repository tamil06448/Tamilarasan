a = (10,20,30,40,50)
b = (10,20,30,40,50)
c = []

for i in range(len(a)):
    c.append(a[i] + b[i])
    ctuple=tuple(c)


print("ADDED LIST IS:",ctuple)