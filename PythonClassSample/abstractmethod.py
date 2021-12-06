from abc import abstractmethod,ABC
class myclass(ABC):
    def myfunc(self):
        print("myfunc")
class myclass2(myclass):
    def myfunc(self):
        print("my function is inpl")

obj = myclass2()
print(obj.myfunc())