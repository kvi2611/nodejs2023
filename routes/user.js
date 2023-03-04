import express from "express";
const router = express.Router()

// định nghĩa các phương thức cho routes
router.get("/", (req, res) => {
    res.send('GET users')
})

router.post("/login", (req, res) => {
    res.send('POST login users')
})

router.post("/register", (req, res) => {
    res.send('POST register users')
})

export default router