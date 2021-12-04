class PetAnimal():
    def __init__(self,name,age,color):
        self.name = name
        self.age = age
        self.color = color

    def makesound(self):
        print("this is my sound")

    def sayHello(self):
        print("this is",self.name,"my age is",self.age,"and my color is",self.color)
        print("one more hello")

mypet1 = PetAnimal("scooby",5,"sandle")
mypet1.makesound()
mypet1.sayHello()
