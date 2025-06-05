const express = require("express")
const dotenv = require("dotenv")
const connectDB = require('./config/Db.js');
const cookieParser = require('cookie-parser')
const cors = require('cors')
//Routes
const authRoutes = require("./routes/auth-routes.js")
dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
      origin: 'http://localhost:5173', // frontend origin
  credentials: true,               // allow cookies
}))
//Routes
app.use("/auth",authRoutes)


app.get("/",(req,res)=>{
    res.send("Sundjsan")
})



app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})