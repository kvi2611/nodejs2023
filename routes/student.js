import express from "express";
const router = express.Router()

// định nghĩa các phương thức cho routes
router.get("/", (req, res) => {
    res.send('GET student')
})

router.get("/:id", (req, res) => {
    // debugger
    res.send('GET detail student by id:' + req?.params?.id)
})

router.post("/insert", (req, res) => {
    res.send('POST insert student')
})

export default router