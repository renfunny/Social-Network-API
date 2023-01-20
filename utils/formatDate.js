// Thank you chatGPT!
const formatDate = function () {
  let date = new Date();
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.getDate();
  let ordinal = "th";
  if (day === 1 || day === 21 || day === 31) {
    ordinal = "st";
  } else if (day === 2 || day === 22) {
    ordinal = "nd";
  } else if (day === 3 || day === 23) {
    ordinal = "rd";
  }
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = "AM";
  if (hours > 12) {
    hours -= 12;
    ampm = "PM";
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${month} ${day}${ordinal}, ${year} at ${hours}:${minutes} ${ampm}`;
};

console.log(formatDate());

module.exports = formatDate;
