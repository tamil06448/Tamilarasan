import json


student_file = open("resource/student.json","r")
student_data = json.load(student_file)

print(student_data)

print(student_data["students"])

elist = student_data["students"]

total = 0

for i in elist:
    print(i["cmarks"])
    total = total + i["cmarks"]
    per = total/4

print(per)
