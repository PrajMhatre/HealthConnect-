const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUD",
});

db.connect(err => {
    if (err) console.error("Database Connection Failed: ", err);
    else console.log("Connected to MySQL");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ?";
    
    db.query(sql, [username], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, match) => {
                if (match) {
                    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                    res.json({ message: "Login successful", token });
                } else {
                    res.status(401).json({ message: "Invalid credentials" });
                }
            });
        } else {
            res.status(401).json({ message: "User not found" });
        }
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
