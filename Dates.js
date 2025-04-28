const date = new Date();
const date1 = new Date(17000000000000);

const customDate = new Date(2024, 0, 1, 2, 3, 4, 5);
const customDate1 = new Date("2024-01-02T12:00:00Z");

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

date.setFullYear(2025);
date.setMonth(3);
date.setDate(25);
date.setHours(14);
date.setMinutes(3);
date.setSeconds(5);

console.log(date);
console.log(customDate);
console.log(customDate1);
console.log(date1);

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

//Compare Dates

const date2 = new Date("2025-12-31");
const date3 = new Date("2025-01-01");

if (date3 > date2) {
    console.log("HAPPY NEW YEAR!!");
}

else {
    console.log("Another Day!!");
}