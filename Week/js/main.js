document.getElementById("week-number").textContent = moment().isoWeek();

let startDay = moment().startOf('isoWeek');
let endDay = moment().endOf('isoWeek');

let countDaysOfWeek = function (startDay, endDay) {
    let dates = [];

    let firstDate = moment(startDay).startOf('day');
    let lastDate = moment(endDay).startOf('day');

    do {
        dates.push(firstDate.toDate());

        var dateElement = document.createElement('p');
        dateElement.id = moment(firstDate.toDate()).format("YYYY-MM-DD");
        dateElement.textContent = moment(firstDate.toDate()).format("DD MMM YYYY");
        let today = moment().format("YYYY-MM-DD");
        if (dateElement.id == today) {
            dateElement.classList.add("today");
        }

        var dayElement = document.createElement('span');
        dayElement.className = moment(firstDate.toDate()).format("dddd");
        dayElement.textContent = moment(firstDate.toDate()).format("dddd");

        var spacer = document.createElement('br');

        dayElement.appendChild(spacer);
        dateElement.insertBefore(dayElement, dateElement.firstChild);

        document.getElementById("week-days").appendChild(dateElement);
    } while (firstDate.add(1, 'days').diff(lastDate) <= 0);

    return dates;
}

console.log(countDaysOfWeek(startDay, endDay));
