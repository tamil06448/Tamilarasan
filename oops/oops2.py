class Computer():
    def __init__(self,memory,ram,cpu):
        self.memory=memory
        self.ram=ram
        self.cpu=cpu

    def Intro(self):
        print("It Storage Device",self.memory)
        print("Temporary Storage",self.ram)
        print("Brain of Unit",self.cpu)

class Laptop(Computer):
        def __init__(self,memory, ram, cpu,size):
            super().__init__(memory, ram, cpu)
            self.size=size

        def Intro(self):
            print("It Storage Device", self.memory)
            print("Temporary Storage", self.ram)
            print("Brain of Unit", self.cpu)
            print("Eassy to",self.size)

class Destop(Computer):
        def __init__(self, memory, ram, cpu,power):
            super().__init__(memory, ram, cpu)
            self.power=power
        def Intro(self):
            print("\nIt Storage Device", self.memory)
            print("Temporary Storage", self.ram)
            print("Brain of Unit", self.cpu)
            print("On a destop",self.power)

laptop=Laptop(400,8,5,"fold")
destop=Destop(500,12,9,"want power")

laptop.Intro()
destop.Intro()