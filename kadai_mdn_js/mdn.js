const date = new Date("2024-10-12");

const [year, month, day] = [
  date.getFullYear(),
  date.getMonth()+1,
  date.getDate(), 
];

const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);
