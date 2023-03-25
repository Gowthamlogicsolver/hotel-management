import express from 'express';
import cors from "cors"
import mysql from "mysql";
const app = express();
app.use(express.json())

app.use(
    cors({
        origin: "*",
    })
)

app.get("/", (req, res) => {
    const msg = {
        msg: "Hotel management"
    }

    return res.send(JSON.stringify(msg))
})
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'hotel_management',
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  
  app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM demo';
    db.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });

  const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


