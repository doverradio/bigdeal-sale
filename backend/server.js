const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("DB Connected"));

const authRoutes = require("./routes/auth");
const productRoutes = require('./routes/productRoutes');
const tikTokRoutes = require('./routes/tiktok');
const shortenRoutes = require('./routes/shorten');
const redirectRoutes = require('./routes/redirect');
const statsRoutes = require('./routes/stats');

app.use('/api', productRoutes);
app.use('/api', tikTokRoutes);
app.use('/api', shortenRoutes);
app.use('/api', statsRoutes);
app.use(redirectRoutes);

const PORT = process.env.PORT || 8025;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});