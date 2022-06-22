import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//DATABASE
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

//PORT APP IS RUNNING ON
const port = process.env.PORT || 8080
const app = express()

const GreetingSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
  },
  hearts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
})

const Greeting = mongoose.model("Greeting", GreetingSchema)

app.use(cors())
app.use(express.json())

//THE ROUTES
app.get("/", (req, res) => {
  res.send("Backend - Börje Brorson")
})

app.get("/greetings", async (req, res) => {
  try {
    const greetings = await Greeting.find({})
      .sort({ createdAt: "desc" })
      .limit(30)
      .exec()
    res.status(200).json(greetings)
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})

app.post("/greetings", async (req, res) => {
  const { message } = req.body
  try {
    const newGreeting = await new Greeting({ message }).save()

    res.status(201).json({ response: newGreeting, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

app.post("/greetings/:greetingId/like", async (req, res) => {
  const { greetingId } = req.params
  try {
    const updatedGreeting = await Greeting.findByIdAndUpdate(
      greetingId,
      {
        $inc: {
          hearts: 1,
        },
      },
      {
        new: true,
      }
    )
    res.status(200).json({ response: updatedGreeting, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

//START THE SERVER
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
