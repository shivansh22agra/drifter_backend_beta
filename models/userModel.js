import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  universityEmail: {
    type: String,
    required: true,
  },
  universityRollno: { type: Number, required: true },
  name: { type: String, required: true },
  phoneNo: {
    type: Number,
    maxlength: 10,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
});
export default mongoose.model("User", userSchema);
