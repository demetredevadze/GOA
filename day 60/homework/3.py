# 3) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ორ ციფრს და დააბრუნებს მათ შორის უმცირესს.
number_one = input("enter number one: ")
number_two = input("enter number two: ")
def big_number(number_1, number_2):
    if number_one > number_two:
        print("შენი დაწერილი ციფრებიდან პირველი ციფრი უფრო დიდია მეორეზე")

    else:
        print("შენი დაწერილი ციფრებიდან მეორე ციფრი უფრო დიდია პირველზე")

big_number(number_one, number_two)