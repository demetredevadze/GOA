#for loop-ის საშვალებით გამოიტანეთ ყველა რიცხვი 0-იდან 20-მდე
for i in range(0,30):
    print(i)


#for loop-ის საშველბით გამოიტანეთ ყველა რიცხვი 1-დან 30 ის ჩათვლით

for i in range(1,31):
    print(i)



#for loop-ის საშვალებით გამოიტანეთ ყველა ლუწი რიცხვი 50-იდან 100-მდე

for i in range(50, 100, 2):
    print(i)

#for loop-ის საშვალებით გამოიტანეთ ყოველი მეორე ასო თქვენი სახელიდან ცალ ცალკე

name = "demetre"

for i in range(0, len(name), 2):
     print(name[i])

#for loop-ის საშვალებით გამოიტანეთ ყველა რიცხვი 50-იდან 100-მდე უკუღმა

for i in range(100, 50, -1):
     print(i)