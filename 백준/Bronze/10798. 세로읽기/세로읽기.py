words = []

for _ in range(5):
  words.append(list(input()))

for i in range(15):
  for j in range(5):
    try:
      print(words[j][i], end="")
    except:
      continue