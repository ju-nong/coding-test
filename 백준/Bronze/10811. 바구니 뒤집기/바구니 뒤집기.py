N, M  = map(int, input().split())

answer = [n for n in range(1, N + 1)]

for m in range(M):
    i, j = map(int, input().split())
    i -= 1
    
    reverse_answer = list(reversed(answer[i:j]))
    
    for index in range(i, j):
        answer[index] = reverse_answer[index - i]

print(*answer)