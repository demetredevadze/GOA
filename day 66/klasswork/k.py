# 1) შემქნით ფუნქცია რომელიც გამოგვიტანს სიას შემობრიუნებულს.

# 2) შექმენით ფუნქცია რომელიც გამოგვიტანს ლუწ რიცხვებს ცალკე, ხოლო კენტ რიცხვებს ცალკე.

# 3) შექმენით ფუნქცია ორმელიც გამოგვიტანს ჩვენი სახლეის და გვარის პირველ ასოებს, და შემდეგ მათ შორის იქნება წერტილი მაგ: l.s

# 4) შექმენით ფუნქვია რომელიც მიღებს ლისტს, რომელშიც რიცხვები ინქბეა ჩაწერილი, თქვენი დავალება ამ სიაში ყველა მყოფი ელემენტი ჩასვათ ახალ სიაში სტრინგის სახით.

# 5) შექმენით ფუნქცია, რომელივ მიღებს პარამეტრად ლისტს, დაიმახსობვრეთ რომ ეს ლისტში უნდა იყოს რიცხვები, ხოლო შემდეგ ამ სიდან მარტო ლუწი რიცხვები გადაიტანეთ ახალ მასივში, და შემდეგ გამოიტანეთ მხოლოდ ლუწი რიცხვების ჯამი.

# 1
def reverse_list(arr):
    print(arr[::-1])

reverse_list([1,2,3,4])
# 2
def odd_and_even(arr):
    odd_list = []
    even_list = []
    for i in arr:
        if i %2 == 0:
            even_list.append(i)
        else:
            odd_list.append(i)
    print(odd_list)
    print(even_list)

odd_and_even([1,2,3,4])
# 3
def min_name(name, lastname):
    print(name[0] + '.' + lastname[0])

min_name('levani','samsonidze')

#  4
def my_list(arr):
    new_list = []
    for i in arr:
        new_list.append(str(i))

    print(new_list)
my_list([1,2,3,4])

# 5
def my_list(arr):
    new_list = []
    for i in arr:
        if i %2 == 0:
            new_list.append(i)
    sum = 0
    for i in new_list:
        sum = sum + i
    print(sum)
my_list([1,2,3,4])