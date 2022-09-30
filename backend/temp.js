const fs = require("fs");
const path = require("path").join(__dirname, "temp.dat");

const log = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
];

const log2 = [
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

fs.writeFileSync(path, JSON.stringify(log), { flags: "a" }, function (err) {
  if (err) console.log(err);
});

fs.writeFileSync(path, JSON.stringify(log2), { flags: "a" }, function (err) {
  if (err) console.log(err);
});
// console.log("Hello");
