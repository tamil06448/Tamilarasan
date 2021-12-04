import math
class basic_calculater():
    def __init__(self,a,b):
        self.a = a
        self.b = b

    def add(self):
        print("ADDITION=",self.a+self.b,)
    def sub(self):
        print("SUBTRACTION=",self.a-self.b,)
    def mul(self):
        print("MULTIPLICATION=",self.a*self.b,)
    def div(self):
        print("DEVISION=",self.a/self.b)
class scientific_calculater(basic_calculater):
    def __init__(self,a,b,x):
        super().__init__(a,b)
        self.x=x
    def expo(self):
        print("\n\nEXPONENT=",self.a**self.b)
    def sin(self):
        print("sin value=",(math.sin(self.x)))
    def cos(self):
        print("cos value=",(math.cos(self.x)))
    def log(self):
        print("log value=",(math.log(self.x)))
    def tan(self):
        print("tan value=",(math.tan(self.x)))
cal=basic_calculater(3,5)
cal.add()
cal.sub()
cal.mul()
cal.div()
Scientific=scientific_calculater(2,5,7)
Scientific.expo()
Scientific.sin()
Scientific.cos()
Scientific.log()
Scientific.tan()