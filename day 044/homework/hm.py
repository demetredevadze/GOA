# 1) Print all integers from 0 to 20 inclusive.

# 2) Print the first 10 natural numbers.

# 3) Print even numbers separately and odd numbers separately from 0 to 100 inclusive.

# 4) Enter a number to the user and then using a for loop output the sum of all the numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).

# 5) Write an algorithm that prints multiples of 5 (numbers divisible by 5) from 1 to 50 inclusive


for i in range(0 ,20):
     print(i)

for i in range(0 ,10):
     print(i)

for i in range(0 ,100):
     print(i)

number = int(input("enter  a number "))

sum1 = 0

count = 0

while count <= number:
    count += 1
    sum1 += count

print(sum1)

for i in range(0 , 51, 5):
    print(i)

# 1) Print even numbers up to 20.

# 2) calculate the sum of numbers from 1 to 10.

# 3) Write a while loop that asks the user to guess a number between 1 and 10 until they get it right. The correct number is 7.

# 4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.

# 5) Write a while loop that repeatedly asks the user to enter a password until the correct password "password123" is entered.

for i in range(0 , 20, 2):
     print(i)

for i in range(1):
    print(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

number = int( input("enter number : ") )

list = [1,2,3,4]
list2 = []
count = 0

while count < len(list):
     list2.append(list[count]  * 2)
     count += 1


correct = "password123"

password = input('entera password : ')

while correct != password:
     password = input('enter a password: ')

hour = 6

if hour < 12:
     print('good morning')
else:
     print('good after noon')




# 1) Write an if-else statement that prints "Good morning!" if the current hour is less than 12 and "Good afternoon!" otherwise.

# 2) Write an if-else statement that checks if a number is even or odd. If the number is even, print "Even"; otherwise, print "Odd."

# 3) Create an if-else statement to check if the temperature is above 30 degrees. If it is, print "It's hot outside!"; otherwise, print "It's not too hot."

# 4) Create an if-else statement that determines if a person is a teenager. If the age is between 13 and 19 (inclusive), print "You are a teenager!"; otherwise, print "You are not a teenager."

morning = int(input("დაწერე დილას რომელ საათზე იღვიძებ : "))

if morning <= 12  :
     print("დილა მშვიდობისა ")

number = int(input("enter number: "))

if number % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")

temp = 29

if temp < 30:
     print('garet grila')
else:
     print('garet cxela')


age = 17

if age >= 13 and age <=18:
     print('shen xar tineijeri')
else:
     print('shen ar xar tineijeri')