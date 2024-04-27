// Date in "Wed 24-Apr 7:45 PM" format
function formatDate1(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${dayOfWeek} ${dayOfMonth}-${month} ${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
}

// Date in "April 5th 07:45 PM" format
function formatDate2(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const suffix = getNumberSuffix(dayOfMonth);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${month} ${dayOfMonth}${suffix} ${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;
}

// suffix (e.g., st, nd, rd, th)
function getNumberSuffix(number) {
  if (number >= 11 && number <= 13) {
    return "th";
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// current date
const currentDate = new Date();

// display
document.getElementById("format1").textContent = formatDate1(currentDate);
document.getElementById("format2").textContent = formatDate2(currentDate);
