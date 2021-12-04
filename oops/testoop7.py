class PetAnimal():
    def __init__(self,name,age,color):
        self.name = name
        self.age = age
        self.color = color

    def makeSound(self):
        print("this is my sound.")

    def sayHello(self):
        print("hello this is",self.name,"this is my age",self.age,"this is my color",self.color)
        print("one more intro")

class Dog(PetAnimal):
    def __init__(self,name,age,color,sound):
        super().__init__(name,age,color)
        self.sound = sound

    def makeSound(self):
        print("this is my sound",self.sound)

    def sayHello(self):
        print("hello this is",self.name,"this is my age",self.age,"this is my color",self.color,"my sound",self.sound)
        print("one more myntro")

class Cat(PetAnimal):
    def __init__(self,name,age,color,sound):
        super().__init__(name,age,color)
        self.sound = sound

    def makeSound(self):
        print("this is my sound",self.sound)

    def sayHello(self):
        print("hello this is",self.name,"my age is",self.age,"is my color",self.color,"my sound is",self.sound)
        print("one more intro")

myPet1 = PetAnimal("jack",5,"sandle")
myPet1.sayHello()
myPet1.makeSound()

myDog1 = Dog("jack",4,"black","Barking")
myDog1.sayHello()
myDog1.makeSound()

myCat1 = Cat("pinky",3,"white","meow")
myCat1.sayHello()
myCat1.makeSound()