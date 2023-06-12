N, M  = map(int, input().split())

answer = [0 for n in range(N)]

for m in range(M):
  i, j, k = map(int, input().split())

  for index in range(i, j + 1):
    answer[index - 1] = k

print(*answer)