const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { data } = require("autoprefixer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const WORKOUTS = "./workouts.json";

app.get("/api/workouts", (req, res) => {
  fs.readFile(WORKOUTS, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Błąd" });
    }
    res.json(JSON.parse(data));
  });
});

app.post("/api/workouts", (req, res) => {
    const newWorkout = req.body;

    fs.readFile(WORKOUTS, "utf-8", (err, data) => {
        if(err) {
            return res.status(500).json({message: "Błąd odczytu"});
        }

        const workouts = JSON.parse(data);
        workouts.push(newWorkout);

        fs.writeFile(WORKOUTS, JSON.stringify(workouts, null, 2), "utf-8", (err) => {
            if(err) {
                return res.status(500).json({message: "Błąd zapisu"});
            }
            res.status(201).json(newWorkout);
        })
    })
})

// app.delete("/api/workouts", (req, res) => {
//   const id = parseInt(req.params.id);
//   fs.readFile(WORKOUTS, "utf-8", (err, data) => {
//     if(err) {
//       return res.status(500).json({message: "Błąd odczytu"})
//     }
//     let workouts = JSON.parse(data)
//     workouts.splice()
//   })
// })

app.listen(PORT, () => {
    console.log("serwr dziala")
})