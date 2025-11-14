# მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის ჩათვლით გადაამრავლეთ ყველა რიცხვი

num = int(input('enter number'))
num2 = 1

for i in range(1, num):
    num2 *= i

print(num2)