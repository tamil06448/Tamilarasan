class Exception():

    def __init__(self):
        pass

    def path(self):
        try:
            with open(wrong_path,"r") as myfile:
                lines = myfile.readlines()
                print(lines)
        except(FileNotFoundError):
            print("file not found")
exception = Exception()
wrong_path = "resource/myfile.txt"
right_path = "resource/myfile.txt"
exception.path()