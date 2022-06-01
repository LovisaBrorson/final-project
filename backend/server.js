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

const ThoughtSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 5,
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

const Thought = mongoose.model("Thought", ThoughtSchema)

app.use(cors())
app.use(express.json())

//THE ROUTES
app.get("/", (req, res) => {
  res.send("Här ska byggas backend, tjohoo!")
})

app.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await Thought.find()
      .sort({ createdAt: "desc" })
      .limit(40)
      .exec()
    res.status(200).json(thoughts)
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})

app.post("/thoughts", async (req, res) => {
  const { message } = req.body
  try {
    const newThought = await new Thought({ message }).save()
    res.status(201).json({ response: newThought, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

app.post("/thoughts/:thoughtId/like", async (req, res) => {
  const { thoughtId } = req.params
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $inc: {
          hearts: 1,
        },
      },
      {
        new: true,
      }
    )
    res.status(200).json({ response: updatedThought, success: true })
  } catch (error) {
    res.status(400).json({ response: error, success: false })
  }
})

//START THE SERVER
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
