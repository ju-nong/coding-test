N, M  = map(int, input().split())

answer = [n for n in range(1, N + 1)]

for m in range(M):
  i, j = map(int, input().split())
  i -= 1
  j -= 1

  temp = answer[i]
  answer[i] = answer[j]
  answer[j] = temp

print(*answer)