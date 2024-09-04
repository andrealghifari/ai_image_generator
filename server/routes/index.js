import { Router } from "express";
const router = Router();

router.get("/test", async(req, res) => {
    return res.send("success test route");
})

// module.exports = router;
export default router;