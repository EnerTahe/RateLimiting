import rateLimit from "express-rate-limit";
const limiter = rateLimit({
                  windowMs: 60 * 1000, // 6 seconds
                  max: 3 // limit each IP to 2 requests per windowMs
                });
export default limiter;