class calculater():

    def __init__(self,a,b):
        self.a = a
        self.b = b

    def division(self):
        result = 0
        try:
            result = self.a / self.b
            print("division",result)
        except(ZeroDivisionError):
            print("divede by Zero happneed.")

cal1 = calculater(10,5)
cal1.division()

cal1 = calculater(10,0)
cal1.division()

cali = calculater(10,2)
cal1.division()