# 1) დაწერეთ ფუნქცია რომელიც ორ რიცხვს შეადარებს და დააბრუნებს უფრო დიდ რიცხვს

def big_number():
    number_one = input("enter number one: ")
    number_two = input("enter number two: ")

    if number_one > number_two:
        print("შენი დაწერილი ციფრებიდან პირველი ციფრი უფრო დიდია მეორეზე")

    else:
        print("შენი დაწერილი ციფრებიდან მეორე ციფრი უფრო დიდია პირველზე")

big_number()