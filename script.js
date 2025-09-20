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


// Second Programm
const students = [
  { name: "রাহুল", passingYear: 2021, city: "Dhaka" },
  { name: "সারা", passingYear: 2022, city: "Dhaka" },
  { name: "অনিক", passingYear: 2023, city: "Chittagong" },
  { name: "মিতা", passingYear: 2024, city: "Dhaka" },
  { name: "করিম", passingYear: 2025, city: "Dhaka" },
  { name: "ফারহান", passingYear: 2020, city: "Dhaka" },
  { name: "নাদিয়া", passingYear: 2022, city: "Sylhet" },
  { name: "আলী", passingYear: 2023, city: "Dhaka" },
  { name: "তানিয়া", passingYear: 2024, city: "Rajshahi" },
  { name: "সোহান", passingYear: 2025, city: "Dhaka" },
  { name: "মেহরিন", passingYear: 2021, city: "Dhaka" },
  { name: "জুবায়ের", passingYear: 2022, city: "Dhaka" },
  { name: "রিয়া", passingYear: 2023, city: "Barisal" },
  { name: "ইমরান", passingYear: 2024, city: "Dhaka" },
  { name: "শিমা", passingYear: 2025, city: "Khulna" },
  { name: "আরিফ", passingYear: 2022, city: "Dhaka" },
  { name: "সুমাইয়া", passingYear: 2023, city: "Dhaka" },
  { name: "তাহমিদ", passingYear: 2021, city: "Chittagong" },
  { name: "নুসরাত", passingYear: 2024, city: "Dhaka" },
  { name: "সাকিব", passingYear: 2025, city: "Dhaka" },
];

const filteredStudents = students.filter(student =>
  student.passingYear >= 2022 &&
  student.passingYear <= 2025 &&
  student.city === "Dhaka"
);

console.log(filteredStudents);