
 # sololearn data type checking -ის ჩათვლით

# მომხმარებელს შემოატაინეთ თავისი ნიშნები(რიცხვები), შემდეგ კი გამოითვალეთ მისი საშუალო არითმეტიკული(მომხმარებლის ნიშნების ჯამი გაყოფილი მათ რაოდენობაზე) ანუ უნდა შეკრიბოთ ეს ნიშნები და გაყოთ იმდენზე რამდენი ნიშანიც შემოატანინეთ მომხმარებელს


user_marks1 = int(input("marks1: "))
user_marks2 = int(input("marks2: "))
user_marks3 = int(input("marks3: "))
user_marks4 = int(input("marks4: "))
user_marks5 = int(input("marks5: "))

sum = user_marks1 + user_marks2 + user_marks3 + user_marks4 + user_marks5

mid_mark = sum / 5

print("ჩემი საშვალო ნიშანია " + str(mid_mark))