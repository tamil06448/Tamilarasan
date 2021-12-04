def convertor(amount,bunit,cunit):
    if bunit == "dollar" and cunit == "rupee":
        return amount * 75
    elif bunit == "rupee" and cunit == "dollar":
        return amount/75
    else:
        print("Unkown conversion.")



print(convertor(20,"dollar","rupee"))