let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12; 
minutes = minutes < 10 ? "0" + minutes : minutes;

let day = now.getDate();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[now.getMonth()];
let year = now.getFullYear();

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let weekday = days[now.getDay()];

console.log(`${hours}:${minutes} ${ampm}, ${day} ${month} ${year}, ${weekday}`);

