import * as mongoose from "mongoose"

const Schema = mongoose.Schema
const profileSchema = new Schema({
    name: {
        type: String
    },
    dob: {
        type: String,
        default: "29,November,1996"
    },
    icon: {
        type: String,
    },
    about: {
        type: String,
        default: "No Information about the User"
    },
    images: [ String ],
    votes: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    currentRank: {
        type: Number
    }

})

export default mongoose.model("Profile", profileSchema)