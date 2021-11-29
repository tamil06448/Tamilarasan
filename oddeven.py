odd_list =[]
even_list =[]

for i in range(1,1000):
     if(i%2 != 0):
         odd_list.append(i)
     elif(i%2 == 0):
          even_list.append(i)
     else:
         pass


print("odd number :",odd_list)
print("even number :",even_list)