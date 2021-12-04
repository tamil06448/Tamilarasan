email_list = ["ragu@gmail.com","vignesh@gmail.com","surya@outlook.com"]

print(email_list)

gmail_count = 0
yahoo_count = 0
outlook_count = 0

for i in email_list:
    print(i)
    if i.endswith("gmail.com"):
        gmail_count = gmail_count + 1
    elif i.endswith("yahoo.com"):
        yahoo_count = yahoo_count + 1
    elif i.endswith("outlook.com"):
        outlook_count = outlook_count + 1
    else:
        pass

print("no of gmail users are",gmail_count,"\nno of yahoo users are",yahoo_count,"\nno of outlook users are",outlook_count)