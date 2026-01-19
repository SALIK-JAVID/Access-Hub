const express = require('express')
const cors = require("cors")
const connectDB =require("./config/db")
const dotenv = require("dotenv")

const PORT = process.env.PORT || 8000;

dotenv.config();      //this will load the environmental variables.
connectDB(); //connecting mongo


const app = express();  

app.use(express.json());



app.use(cors({
  origin: ["https://access-hub-five.vercel.app", "http://localhost:5173"],
  credentials : true
}));



app.use("/api/auth", require("./routes/authRoutes"));   //specifies the routes in the backend.
app.use("/api/admin",require("./routes/adminRoutes")); //this will specify the admin routes in the backend.
app.get('/', (req, res) => {
  res.send('Server Running....')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
