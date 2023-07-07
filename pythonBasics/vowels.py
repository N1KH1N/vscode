from tkinter.tix import InputOnly


a=input("enter the string:")
v="aeiou"
flag=0

for i in a:
    if i in v:
        print(i,end="\n")
        flag=flag+1
print("the number of vowels present is:",flag)
