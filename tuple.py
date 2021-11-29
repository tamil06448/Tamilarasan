odd_list = []
even_list = []

for i in range(1,1000):
     if(i%2 != 0):
         odd_list.append(i)
         oddtup=tuple(odd_list)
     elif(i%2 == 0):
          even_list.append(i)
          eventup=tuple(even_list)
     else:
         pass


print("odd number :",oddtup)
print("even number :",eventup)