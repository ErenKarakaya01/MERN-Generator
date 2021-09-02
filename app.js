const express = require("express")

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
  res.send("Hello World")
})

const port = process.env.port || 8080

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
