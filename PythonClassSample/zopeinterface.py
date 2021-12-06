import zope.interface as intr
class myclass(intr.Interface):
    def func1(self):
        pass
    def func2(self):
        pass
@intr.implementer(myclass)
class intrImpl:
    def func1(self):
        print("this is func1")
    def func2(self):
        print("this is func2")
obj=intrImpl()
print(myclass.implementedBy(intrImpl))