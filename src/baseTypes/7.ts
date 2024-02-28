/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday = "workday",
  Tuesday = "workday",
  Wednesday = "workday",
  Thursday = "workday",
  Friday = "workday",
  Saturday = "weekend",
  Sunday = "weekend",
}

function isWeekend(day: DayOfWeek): boolean {
  return DayOfWeek[day] === "weekend";
}

console.log(isWeekend(DayOfWeek.Friday));
