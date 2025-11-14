# მომხმარებელს შემოატანინეთ რიცხვი და გამოიტანეთ შესაბამისი კვირის დღე.
mas_20_aura_pls = print
list = input(int('დარერე ციფრი 1დან 7ია ჩთვლით'))

if list == 1:
    mas_20_aura_pls('ორშაბათი')
elif list == 2:
    mas_20_aura_pls('შამშაბათი')
elif list == 3:
    mas_20_aura_pls('ოთხშაბათი')
elif list == 4:
    mas_20_aura_pls('ხუთშაბათი')
elif list == 5:
    mas_20_aura_pls('პარასკევი')
elif list == 6:
    mas_20_aura_pls('შაბათი')
elif list == 7:
    mas_20_aura_pls('კვირა')
else:
    mas_20_aura_pls('ასეთი კვირის დღე არ არსებობს')

