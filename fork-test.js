const fedHolidays = require("./index");

var myOptions = {
    shiftSaturdayHolidays: true,
    shiftSundayHolidays: true,
    utc: false,
    omit: [
      "Washington's Birthday",
      "Columbus Day",
      "Veterans Day",
      "Juneteenth National Independence Day"
    ],
    include: [
      {
        name: `Thanksgiving Day Friday`,
        mode: `getNthDayOf`,
        n: 4,
        day: 5,
        month: 11
      },
      {
        name: `Boxing Day`,
        mode: `getDateFor`,
        day: 26,
        month: 12
      }]
  };


  const testStart = new Date('2023-10-13');
  const testEnd = new Date('2023-12-29');


// tests assume 2023 dates

// now includes the different holidays
console.log(fedHolidays.allForYear(2023, myOptions))

// return true as 12/26 is a new holiday
console.log(fedHolidays.isAHoliday("12/26/2023",myOptions))

// return holidays between 10-13 and 12-29 and include new holidays
console.log(fedHolidays.inRange(testStart, testEnd,myOptions))

// not using myOptions still works just fine
console.log(fedHolidays.allForYear(2023))
console.log(fedHolidays.isAHoliday("12/26/2023"))
console.log(fedHolidays.inRange(testStart, testEnd))

// not using omit or include still works just fine
const newOptions = {
    shiftSaturdayHolidays: true,
    shiftSundayHolidays: true,
}
console.log(fedHolidays.allForYear(2023,newOptions))
console.log(fedHolidays.isAHoliday("12/26/2023",newOptions))
console.log(fedHolidays.inRange(testStart, testEnd, newOptions))


  