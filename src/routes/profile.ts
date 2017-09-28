import * as express from "express"
import {Request, Response} from "express"
import { getProfileRanking, getTrending, like, vote } from "../controllers/profile"

const router = express.Router()
router.get("/getprofileranking", (req, res) => {
    console.log("hello")
    getProfileRanking( req , res)
})

router.get("/gettrending"), (req: Request, res: Response) => {
    getTrending(req, res)
}

router.post("/setlike", (req, res) => {
    like(req, res)
})

router.post("/getlike", (req, res) => {
    vote(req, res)
})

export default router

