const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  const log = { logs: [] };
  setTimeout(() => {
    const path = require("path").join(__dirname, "log.dat");
    // const file = fs.createWriteStream(path);
    // file.on("error", function (err) {
    //   console.log(err);
    // });
    console.log(JSON.stringify(log));
    fs.writeFile(path, JSON.stringify(log), "utf8", function (err) {
      console.log(err);
    });

    // file.end();
  }, 120000);
  const videoSize = fs.statSync("./resources/video/Spiderman.mp4").size;
  const range = req.headers.range;

  console.log(range);
  //PARSING THE START
  if (range) {
    const start_Time = new Date().getTime();
    const start = Number(range.replace(/\D/g, ""));
    const CHUNK_SIZE = 10 ** 6; //Sending chunks of 1MB
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const videoPath = "./resources/video/Spiderman.mp4";
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
    const end_Time = new Date().getTime();
    log.logs.push({
      "Start Time:": start_Time,
      "End_time:": end_Time,
      "Time Elapsed:": end_Time - start_Time,
    });
    console.log({ log });
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
