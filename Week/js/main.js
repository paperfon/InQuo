// document.getElementById("year").innerHTML = moment().format("Y");
document.getElementById("week-number").innerHTML = moment().isoWeek();

let startDay = moment().startOf('isoWeek');
let endDay = moment().endOf('isoWeek');

let countDaysOfWeek = function(startDay, endDay) {
  let dates = [];

  let firstDate = moment(startDay).startOf('day');
  let lastDate = moment(endDay).startOf('day');

  do {
    dates.push(firstDate.toDate());
    console.log(firstDate.toDate());
    var newElement = document.createElement('div');
    newElement.id = moment(firstDate.toDate()).format("YYYY-MM-DD");
    newElement.className = "weekDays";
    newElement.innerHTML = moment(firstDate.toDate()).format("dddd, MMMM Do YYYY");
    document.getElementById("days-of-the-week").appendChild(newElement);
  } while (firstDate.add(1, 'days').diff(lastDate) <= 0);

  return dates;
}

console.log(countDaysOfWeek(startDay, endDay));
