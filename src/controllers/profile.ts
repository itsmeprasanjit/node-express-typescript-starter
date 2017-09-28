import {Request, Response} from "express"
import Profile from "../models/profile"
const profileController = {}

export let getProfileRanking = (req: Request, res: Response) => {
    console.log("hello=================")
    Profile.find({}, {name: 1}, (err, profile) => {
        res.status(200).send(profile)
    })
}

export let getTrending = (req: Request, res: Response) => {
    console.log("hello=================")
    res.status(200).send({
        name: "prasanjit "
    })
}

export let vote = (req: Request, res: Response ) => {
    res.status(200).send("vote working")
}

export let like = ( req: Request, res: Response ) => {
    res.status(200).send("like working")
}
