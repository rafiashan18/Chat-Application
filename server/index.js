const express = require("express")
const dotenv = require("dotenv")
const connectDB = require('./config/Db.js');
const cookieParser = require('cookie-parser')
const cors = require('cors')
//Routes
const authRoutes = require("./routes/auth-routes.js")
const userRoutes = require("./routes/user-routes.js")
const messageRoutes = require("./routes/message-routes.js")
dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
      origin: 'http://localhost:5173', 
  credentials: true,               
}))

//Routes
app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/message",messageRoutes)


app.get("/",(req,res)=>{
    res.send("working")
})



app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})