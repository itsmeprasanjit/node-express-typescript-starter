import * as mongoose from "mongoose"
const Schema = mongoose.Schema
const configSchema = new Schema({
    crossPromotion: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model("Config", configSchema)