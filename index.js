const express = require("express")
const {connection} = require("./configs/db")
const { userModel } = require("./models/user.model")
const { flightModel } = require("./models/flight.model")
const { bookingModel } = require("./models/booking.model")


const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to Air Ticket Booking")
})

app.post("/api/register",async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const data =  new userModel({name,email,password})
        await data.save()
        res.status(201).send({
            "msg":"user registered successfully",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.post("/api/login",async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const data =  await userModel.findOne({email})
        if(data){
            if(data.password==password){
                res.status(201).send({
                    "msg":"user loggedin successfully",
                    data
                })
            }
            else{
                res.send({
                    "msg":"wrong credentials",
                    data
                })
            }
        }
        else{
            res.send({
                "msg":"user not found",
                data
            })
        }
    }
    catch(err){
        console.log(err)
    }
})


app.get("/api/flights",async (req,res)=>{
    try{
        const data = await flightModel.find()
        res.status(200).send({
            "msg":"these are available flights",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.get("/api/flights/:id",async (req,res)=>{
    const {id} =req.params
    try{
        const data = await flightModel.findById(id)
        res.status(200).send({
            "msg":"this is the flight",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.post("/api/flights",async (req,res)=>{
    const {
        airline,
        flightNo,
        departure,
        arrival,
        seats,
        price
      } = req.body
    try{
        const data = new flightModel({
        airline,
        flightNo,
        departure,
        arrival,
        departureTime:new Date(),
        arrivalTime:new Date(),
        seats,
        price
        })
        await data.save()
        res.status(201).send({
            "msg":"new flight added",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.put("/api/flights/:id",async (req,res)=>{
    const {id} =req.params
    const obj = req.body
    try{
        const data = await flightModel.findByIdAndUpdate(id,obj)
        if(data){
            res.status(204).send({
                "msg":"flight successfully updated",
                data
            })
            
        }
        else{
            res.send({
                "msg":"flight doesnt exist",
                data
            })
        }
    }
    catch(err){
        console.log(err)
    }
})

app.delete("/api/flights/:id",async (req,res)=>{
    const {id} =req.params
    try{
        const data = await flightModel.findByIdAndDelete(id)
        if(data){
            res.status(202).send({
                "msg":"flight successfully deleted",
                data
            })
            
        }
        else{
            res.send({
                "msg":"flight doesnt exist",
                data
            })
        }
    }
    
    catch(err){
        console.log(err)
    }
})

app.post("/api/booking",async (req,res)=>{
    const {user,flight} = req.body

    try{
        const data = new bookingModel({user,flight})
        await data.save()
        res.status(201).send({
            "msg":"booking placed successfully",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.get("/api/dashboard",async(req,res)=>{
    try{
        const data = await bookingModel.find()
        .populate("user")
        .populate("flight")

        res.status(200).send({
            "msg":"these are all the bookings",
            data
        })
    }
    catch(err){
        console.log(err)
    }
})

app.listen(4500,async ()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})