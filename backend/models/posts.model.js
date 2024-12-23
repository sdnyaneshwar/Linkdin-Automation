import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    typeOfPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema);  

export default Post
