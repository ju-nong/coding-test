table = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
}

totalCredit = 0
sum = 0

for _ in range(20):
    _, credit, grade = input().split(" ")

    if grade == "P":
        continue

    credit = float(credit)

    totalCredit += credit
    sum += credit * table[grade]

if totalCredit == 0:
    print("0.000000")
else:
    sum /= totalCredit
    print(f"{sum:.6f}")
