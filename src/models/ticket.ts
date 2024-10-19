import mongoose, { Schema } from "mongoose"

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}

mongoose.Promise = global.Promise

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket