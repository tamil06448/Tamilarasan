class calulate():
    def __init__(self,a,b):
        self.a = a
        self.b = b
    def addition(self):
        print("addition",self.a+self.b)
    def subtracion(self):
        print("subtraction", self.a-self.b)
    def multiplication(self):
        print("multiplication", self.a*self.b)
    def division(self):
        print("division", self.a/self.b)



cal1 = calulate(4,5)
print("a=",cal1.a)
print("b=",cal1.b)
cal1.addition()
cal1.subtracion()
cal1.multiplication()
cal1.division()

cal2 = calulate(3,2)
print("a=",cal2.a)
print("b=",cal2.b)
cal2.addition()