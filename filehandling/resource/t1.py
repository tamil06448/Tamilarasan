with open("date.csv","r")as myfile:
    #print(myfile.readline())
    data = myfile.readline()
    print(data)
    for i in data:
        print(i.strip().split(","))
        ndata = i.strip().split(",")
        for j in data:
            print(int(j))