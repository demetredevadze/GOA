# 2) დაწერეთ ფუნქცია სადაც შემოიტანთ ერთ რიცხვს არგუმენტად და შემდეგ შეამოწმეთ ლუწია თუ კენტი

def number_one():
    number = input("enter njumber one: ")

    if number % 2 == 0:
        print("ლუწია")

    else:
        print("კენტია")