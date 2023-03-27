import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    //   _id: "string",
    task: { type: String, required: true },
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
