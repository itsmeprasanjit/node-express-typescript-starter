import profileRoute from "./profile"
import constants from "../config/constants"
import * as Express from "express"

const apiString = `/api/${constants.API_VERSION}`
const profileString = apiString + "/profile"
export default ( app: any ) => {
    app.use( profileString, profileRoute)
}