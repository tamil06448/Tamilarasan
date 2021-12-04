right_path = "resource/msg.txt"
wrong_path = "resource/message.txt"

try:
    with open(wrong_path,"r") as myfile:
        lines = myfile.readlines()
        print(lines)
except(FileNotFoundError):
    print("file not found")