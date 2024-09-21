const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ticketRoutes = require('./routes/ticketRoutes');
var cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/ticket-management', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/tickets', ticketRoutes);
app.use(cors());
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});