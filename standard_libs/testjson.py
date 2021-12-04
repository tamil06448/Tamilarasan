import json

data = json.dumps({"name":"raj"})
print(data)

emp_file = open("resource/employee.json","r")
emp_data = json.load(emp_file)

print(emp_data)

print(emp_data["employees"])

print(emp_data["employees"])

elist = emp_data["employees"]

total = 0

for i in elist:
    print(i["salary"])
    total = total + i["salary"]

print(total)
