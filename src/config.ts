import { rateLimit } from "express-rate-limit";


export const limiter = rateLimit({
    windowMs: 10000,
    max: 3,
    standardHeaders: true
})