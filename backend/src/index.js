import express from 'express';
import cors from "cors"

const app = express()
const port = 3001;

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



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})


