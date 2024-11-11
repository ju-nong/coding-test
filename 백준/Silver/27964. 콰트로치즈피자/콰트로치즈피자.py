topping_length = input()
topping_list = input().split(" ")

cheese_list = []
FIND_VALID_WORD = "Cheese"
FIND_VALID_WORD_LENGTH = len(FIND_VALID_WORD)

is_valid = False

for topping in topping_list:
    if topping.rfind(FIND_VALID_WORD) == (len(topping) - FIND_VALID_WORD_LENGTH):
        if topping not in cheese_list:
            cheese_list.append(topping)
            
            if len(cheese_list) == 4:
                is_valid = True
                break;
                
if is_valid:
    print("yummy")
else:
    print("sad")