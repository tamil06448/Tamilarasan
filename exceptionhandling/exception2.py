class calculate():
    def __init__(self,a,b):
        self.a = a
        self.b = b
    def addition(self):
        print("addition",self.a+self.b)
    def subtration(self):
        print("subtration",self.a-self.b)
    def multiplication(self):
        print("multiplication",self.a*self.b)
        print("before exception")
        result = 0
        try:
            result = cal1.division()
        except(ZeroDivisionError):
            print("divede by Zero happneed.")
            print("result is ", result)
            print("after exception")
    def division(self):
            print("division",self.a/self.b)


cal1 = calculate(10,0)
print("a=",cal1.a)
print("b=",cal1.b)
cal1.addition()
cal1.subtration()
cal1.multiplication()
