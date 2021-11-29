def voteornot(age):
    if (age>18 and age<100):
        print("yes you can vote")
    else:
        print("no you can not vote")

age=int(input("enter your age: "))
voteornot(age)