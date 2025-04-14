require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use("/api/users", userRoutes);
app.use('/api/reviews', reviewRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
