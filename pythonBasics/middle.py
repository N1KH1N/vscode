l=[2,4,5,6,8,9,13,21,35,55,88]
e=34
l.sort()
low=0
up=len(l)-1
flag=0
count=0
while low<=up:
    count+=1
    mid=(low+up)//2
    if e==l[mid]:
        flag=1
        break
    elif e>l[mid]:
        low=mid+1
    elif e<l[mid]:
        up=l[mid]+1
if flag==1:
    print("present")
else:
    print("not present")
print(count)
