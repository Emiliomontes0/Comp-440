require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const unitRoutes = require("./routes/unitRoutes");
const searchRoutes = require("./routes/searchRoutes");
const queryRoutes = require("./routes/queryRoutes");
const sameDayFeatureRoutes = require('./routes/sameDayFeatureRoutes');
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use("/api/users", userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/rentals', unitRoutes);
app.use('/api/search',searchRoutes);
app.use('/api/query', queryRoutes);
app.use('/api/feature',sameDayFeatureRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
