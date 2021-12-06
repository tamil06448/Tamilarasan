import turtle
import random
c=['red','yellow','green','white']
p=turtle.pen()
turtle.bgcolor('black')
for x in range(100):
    turtle.pencolor(random.choice(c))
    turtle.width(10)
    turtle.forward(x)
    turtle.left(30)