class path():

    def __init__(self,right,wrong):
        self.right = right
        self.wrong = wrong

    def right(self):
        pass
    with open("resource/msg.txt","r") as myfile:
        lines = myfile.read()
        print(lines)
    def wrong(self):
        pass
try:
    with open("resource/message.text","r") as myfile:
        lines = myfile.read()
        print(lines)
except(FileNotFoundError):
    print("file not found")

