# 1. მომხამრებელს შეეკითხეთ 3 სხვადასხვა სახელი, ეს სახელები დაამატეთ სიაში,შემდეგ კი დაბეჭდეთ სიის ელემენტები

goas_chad_men = []

goas_chad_men.append("gabriel molodini")
goas_chad_men.append("dato")
goas_chad_men.append("batoni nika keselava")

print(goas_chad_men )

# 2) შექმენით ორი სია, ერთი ლუწი რიცხვებისთვის მეორე კენტი რიცხვებისთვის, მომხმარებელს შეეკითხეთ რიცხვი, თუ რიცხვი იქნება ლუწი ეს რიცხვი დაამატეთ ლუწი რიცხვებისთვის განკუთვნილ სიაში, თუ იქნება კენტი დაამატეთ კენტებისთვის განკუთვნილ სიაში, საბოლოოდ კი დაბეჭდეთ ორივე ლუწების და კენტების სია

ლუწი = [2, 4, 6, 8, 10]
კენტი = [3, 5, 7, 9]

number = int(input("enter number: "))

if number % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")

