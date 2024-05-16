N = int(input());

for i in range(1, 2 * N):
    print("{0}{1}".format(" " * (N - i) if i < N else " " * (i - N) if i > N else "", ("*" * i) + ("*" * (i - 1)) if i <= N else "*" * ((N * 2 - 1) - (i - N) * 2)))