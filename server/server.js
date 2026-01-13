const express = require('express')
const cors = require("cors")
const connectDB =require("./config/db")
const dotenv = require("dotenv")



dotenv.config();      //this will load the environmental variables.
connectDB(); //connecting mongo


const app = express();  

app.use(express.json());



app.use(cors());



app.use("/api/auth", require("./routes/authRoutes"));   //specifies the routes in the backend.
app.get('/', (req, res) => {
  res.send('Server Running....')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
