def gradings(grade):
    if(grade>90 and grade<=100):
        print("your grade is a")
    elif(grade>80 and grade<=90):
        print("your grade is b")
    elif(grade>70 and grade<=80):
        print("your grade is c")
    else:
        print("your failed")

grade=int(input("enter your grade:  "))
gradings(grade)