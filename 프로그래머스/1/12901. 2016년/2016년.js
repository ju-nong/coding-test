const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const solution = (a, b) => days[new Date(2016, a - 1, b).getDay()];