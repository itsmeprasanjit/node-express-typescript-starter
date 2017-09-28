import * as mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    deviceID: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    phone : {
        type: String
    },
    age : {
        type: Number
    },
    gender: {
        type: String
    }
})

export default mongoose.model("User", userSchema)
