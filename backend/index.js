const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "todo",
  }
);

con.connect(function (error) {
  if (error) throw error;
  else console.log("connected to the database successfully!!");
});

// con.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database.");
// });


// app.post('/register', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   con.query("INSERT INTO users (namee, email_id, passwords) VALUES(?, ?, ?)", [name, email, password],
//     (err, result) => {
//       if(result){
//         res.send(result);
//       }
//       else{
//         res.send({message: "ENTER CORRECT DETAILS"})
//       }
//     }
//   )
// })

// app.post('/login', (req, res) => {
//   const sql = "SELECT * FROM users WHERE email_id = ? AND passwords = ?";

//   con.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if(err) return res.json("Login Failed");
//     if(data.length > 0){
//       return res.json("Success")
//     }
//     else{
//       return res.json("No Record")
//     }
//   })

// })

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email_id = ? AND passwords = ?";

  con.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error", error: err });
    }
    if (data.length > 0) {
      return res.status(200).json({ success: true, message: "Login successful" });
    } else {
      return res.status(200).json({ success: false, message: "User Not Found" });
    }
  });
});


app.listen(4001, () => {
  console.log("running backend server");
})