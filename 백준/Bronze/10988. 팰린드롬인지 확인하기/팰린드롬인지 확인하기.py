word = input()
isPalindrome = True

for i in range(len(word) // 2):
    if word[i] != word[(i * -1) - 1]:
        isPalindrome = False
        break
    
print(1 if isPalindrome else 0)