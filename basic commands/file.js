const fs = require("fs");

// const proverb = "Honesty is best policy";
// fs.writeFile("./proverb.txt", proverb, (err) => {
//   console.log("task completed");
// });

// //task 1
// const proverb1 = "Something is better than nothing";
// for (i = 0; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.txt`, proverb1, (err) => {
//     console.log("task over");
//   });
// }

// //task 2
// const proverb2 = "Talk less work more";
// const count = process.argv[2];
// for (i = 0; i <= count; i++) {
//   fs.writeFile(`./backup/proverb2-${i}.txt`, proverb2, (err) => {
//     console.log("task over");
//   });
// }

// fs.readFile("quote.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log("error", err);
//   }
//   console.log("Content:", content);
// });

// newQuote = "\nWake up early";
// fs.appendFile("quote.txt", newQuote, (err) => {
//   console.log("Updated file");
// });

// fs.unlink("text.html", (err) => {
//   console.log("file deleted");
// });

fs.readdir("./backup", (err, files) => {
  files.forEach((filename) => {
    fs.unlink(`./backup/${filename}`, (err) => {
      console.log("delete");
    });
  });
});
