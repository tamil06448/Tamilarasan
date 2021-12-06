"""
file=open("filename_with.txt",'w')
file.write("this is python program")
file.close()"""

"""
file=open("filename_with.txt",'a')
file.write("this is python program")
file.close()"""

"""
file=open("file",'a')
file.write("this is python program")
file.close()"""

"""
file=open("file",'r')
print(type(file))
for ch in file:
    print(ch)"""

"""
file=open("file",'r')
print(type(file.read()))"""

"""
import os
status=os.path.exists("file with path")
print(status)"""

"""
file=open("file",'r+')
file.write("hello,all")
file.flush()
print(file.read())"""

"""                         LAST 3COMMENTS SHOWING
file=open("myfile.txt",'rb')
file.seek(-3,2)
print(file.read())"""

"""                         FIRSTLINE SHOWING
file=open("myfile.txt",'r')
print(file.readline())"""

"""                         ALLPRINT SHOWING
file=open("myfile.txt",'r')
print(file.read())"""

"""
file=open("myfile.txt",'r')
print(file.readlines())"""

"""
with open("myfile.txt",'w')as file:
    file.write"""

from zipfile import ZipFile
file= "D:/pythonClass/zipfile.py"
with ZipFile("files.zip", "w") as z:
    z.write(file)

