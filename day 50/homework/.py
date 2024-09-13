# lists:
# 1) შექმენით 2 სია სადაც ჩასვამთ ნებისმიერ ელემენტს და ეს 2 სია უნდა შეაერთოდ extend-ის გამოყენებით 
# 2) შექმენით სია სადაც შეიტანთ 10 ელემენტს და მათშორის უნდა მოაშოროთ ელემენტი რომელიც იქნება 5 ინდექსზე pop-ის გამოყენებით და უნდა მოაშოროთ კიდე ერთი ელემენტი რომელიც იქნება 3 ინდექსზე remove-ის გამოყენებით
# 3) შექმენით ცარიელი სია სადაც დაამატებთ 10 ცალ ლუწ რიცხვებს append-ის გამოყენებით
# 4) შექმენით ცარიელი სია სადაც დაამატებღ 10 ცალ კენტ რიცხვებს

# for loop + list:
# 1) შექმენით სია სადაც გექნებათ 5 ცალი string-ი და შემდეგ for ციკლით უნდა გადაუაროთ ამ სიას რომ გამოიტანოს სიის ზომა len()-ის მეშვეობით

my_pet_are = ["cat", "dog"]
dets_name_are = ["ciso", "tetro"]

my_pet_are.extend(dets_name_are)

my_group_frends_are =["lazare", "mate", "aleqsandre", "merabi" , "merabi" , "gio"]

my_group_frends_are.pop(6)
my_group_frends_are.remove("merabi")

numbers = []

numbers.append(2)
numbers.append(4)
numbers.append(6)
numbers.append(8)
numbers.append(10)
numbers.append(12)
numbers.append(14)
numbers.append(16)
numbers.append(18)
numbers.append(20)

numbers = []

numbers.append(3)
numbers.append(5)
numbers.append(7)
numbers.append(9)
numbers.append(11)
numbers.append(13)
numbers.append(15)
numbers.append(17)
numbers.append(19)
numbers.append(21)

list = [1, 2, 3, 4]
for i in list:
 print("hello")

count = 0
for i in list:
 count = count + 1